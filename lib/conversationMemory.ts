import { Redis } from "@upstash/redis";
import { ChatCompletionMessageParam } from "openai/resources/chat";

export interface ConversationContext {
  sessionId: string;
  messages: ChatCompletionMessageParam[];
  userInfo: {
    name?: string;
    location?: string;
    lastTopic?: string;
    [key: string]: any;
  };
  createdAt: number;
  lastActivity: number;
}

export class ConversationMemory {
  private redis: Redis;
  private readonly TTL = 24 * 60 * 60; // 24 hours in seconds

  constructor() {
    this.redis = Redis.fromEnv();
  }

  private getSessionKey(sessionId: string): string {
    return `chat_session:${sessionId}`;
  }

  async getConversation(sessionId: string): Promise<ConversationContext | null> {
    try {
      const data = await this.redis.get(this.getSessionKey(sessionId));
      return data as ConversationContext | null;
    } catch (error) {
      console.error('Error getting conversation:', error);
      return null;
    }
  }

  async saveConversation(context: ConversationContext): Promise<void> {
    try {
      await this.redis.setex(
        this.getSessionKey(context.sessionId),
        this.TTL,
        context
      );
    } catch (error) {
      console.error('Error saving conversation:', error);
    }
  }

  async addMessage(sessionId: string, message: ChatCompletionMessageParam): Promise<void> {
    try {
      const conversation = await this.getConversation(sessionId);
      if (conversation) {
        conversation.messages.push(message);
        conversation.lastActivity = Date.now();
        await this.saveConversation(conversation);
      }
    } catch (error) {
      console.error('Error adding message:', error);
    }
  }

  async updateUserInfo(sessionId: string, userInfo: Partial<ConversationContext['userInfo']>): Promise<void> {
    try {
      const conversation = await this.getConversation(sessionId);
      if (conversation) {
        conversation.userInfo = { ...conversation.userInfo, ...userInfo };
        conversation.lastActivity = Date.now();
        await this.saveConversation(conversation);
      }
    } catch (error) {
      console.error('Error updating user info:', error);
    }
  }

  async createConversation(sessionId: string): Promise<ConversationContext> {
    const conversation: ConversationContext = {
      sessionId,
      messages: [],
      userInfo: {},
      createdAt: Date.now(),
      lastActivity: Date.now(),
    };
    
    await this.saveConversation(conversation);
    return conversation;
  }

  async getOrCreateConversation(sessionId: string): Promise<ConversationContext> {
    const existing = await this.getConversation(sessionId);
    if (existing) {
      return existing;
    }
    return this.createConversation(sessionId);
  }

  // Extract user information from messages using AI
  async extractUserInfo(sessionId: string, userMessage: string): Promise<void> {
    try {
      const conversation = await this.getConversation(sessionId);
      if (!conversation) return;

      // Simple regex-based extraction for common patterns
      const nameMatch = userMessage.match(/\b(?:my name is|i'm|i am|call me)\s+([a-zA-Z]+)/i);
      const locationMatch = userMessage.match(/\b(?:i'm from|i live in|i'm in|from)\s+([a-zA-Z\s,]+)/i);
      
      const updates: Partial<ConversationContext['userInfo']> = {};
      
      if (nameMatch && !conversation.userInfo.name) {
        updates.name = nameMatch[1];
      }
      
      if (locationMatch && !conversation.userInfo.location) {
        updates.location = locationMatch[1].trim();
      }

      // Update last topic based on keywords in the message
      const topicKeywords = userMessage.toLowerCase();
      if (topicKeywords.includes('design') || topicKeywords.includes('ux') || topicKeywords.includes('product')) {
        updates.lastTopic = 'design/product';
      } else if (topicKeywords.includes('ladder') || topicKeywords.includes('insurance')) {
        updates.lastTopic = 'Ladder/insurance';
      } else if (topicKeywords.includes('music') || topicKeywords.includes('beat') || topicKeywords.includes('grover')) {
        updates.lastTopic = 'music/production';
      } else if (topicKeywords.includes('faith') || topicKeywords.includes('christian')) {
        updates.lastTopic = 'faith/religion';
      } else if (topicKeywords.includes('workout') || topicKeywords.includes('lifting') || topicKeywords.includes('gym')) {
        updates.lastTopic = 'fitness/workout';
      }

      if (Object.keys(updates).length > 0) {
        await this.updateUserInfo(sessionId, updates);
      }
    } catch (error) {
      console.error('Error extracting user info:', error);
    }
  }
}

export const conversationMemory = new ConversationMemory(); 