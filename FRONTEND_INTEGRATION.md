# Frontend Integration Guide: Conversation Memory

This guide explains how to integrate the enhanced chat API with conversation memory into your frontend project.

## API Changes Summary

The chat API now supports conversation memory with the following changes:

### Request Format
```javascript
// OLD (no memory)
{
  "userMessage": "Hello"
}

// NEW (with memory)
{
  "userMessage": "Hello",
  "sessionId": "optional-session-id" // Send same ID to maintain conversation
}
```

### Response Headers
- `X-Session-Id`: The session ID for this conversation (use in future requests)

## Implementation Steps

### 1. Session Management

**Generate and store session ID:**
```javascript
// Generate a unique session ID
function generateSessionId() {
  return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

// Store session ID in localStorage or your preferred storage
function getOrCreateSessionId() {
  let sessionId = localStorage.getItem('chatSessionId');
  if (!sessionId) {
    sessionId = generateSessionId();
    localStorage.setItem('chatSessionId', sessionId);
  }
  return sessionId;
}
```

### 2. Updated API Call

**Modified fetch function:**
```javascript
async function sendMessage(userMessage) {
  const sessionId = getOrCreateSessionId();
  
  const response = await fetch('/api/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userMessage,
      sessionId, // Include session ID
    }),
  });

  // Get session ID from response headers
  const responseSessionId = response.headers.get('X-Session-Id');
  if (responseSessionId && responseSessionId !== sessionId) {
    localStorage.setItem('chatSessionId', responseSessionId);
  }

  return response;
}
```

### 3. Complete Integration Example

```javascript
class ChatManager {
  constructor() {
    this.sessionId = this.getOrCreateSessionId();
    this.messages = [];
  }

  getOrCreateSessionId() {
    let sessionId = localStorage.getItem('chatSessionId');
    if (!sessionId) {
      sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      localStorage.setItem('chatSessionId', sessionId);
    }
    return sessionId;
  }

  async sendMessage(userMessage, onChunk) {
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userMessage,
          sessionId: this.sessionId,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Update session ID if provided
      const responseSessionId = response.headers.get('X-Session-Id');
      if (responseSessionId && responseSessionId !== this.sessionId) {
        this.sessionId = responseSessionId;
        localStorage.setItem('chatSessionId', this.sessionId);
      }

      // Handle streaming response
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let assistantMessage = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        const lines = chunk.split('\n');

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const content = line.slice(6);
            if (content === '[DONE]') {
              return assistantMessage;
            } else if (content.startsWith('Error: ')) {
              throw new Error(content.slice(7));
            } else if (content.trim()) {
              assistantMessage += content;
              onChunk?.(content); // Callback for real-time updates
            }
          }
        }
      }

      return assistantMessage;
    } catch (error) {
      console.error('Error sending message:', error);
      throw error;
    }
  }

  clearSession() {
    const newSessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    this.sessionId = newSessionId;
    localStorage.setItem('chatSessionId', newSessionId);
    this.messages = [];
  }
}
```

### 4. React Hook Example

```javascript
import { useState, useCallback } from 'react';

export function useChat() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState(() => {
    return localStorage.getItem('chatSessionId') || 
           `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  });

  const sendMessage = useCallback(async (userMessage) => {
    setIsLoading(true);
    
    // Add user message immediately
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userMessage, sessionId }),
      });

      // Update session ID if needed
      const responseSessionId = response.headers.get('X-Session-Id');
      if (responseSessionId && responseSessionId !== sessionId) {
        setSessionId(responseSessionId);
        localStorage.setItem('chatSessionId', responseSessionId);
      }

      // Handle streaming response
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let assistantMessage = '';

      // Add assistant message placeholder
      setMessages(prev => [...prev, { role: 'assistant', content: '' }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        const lines = chunk.split('\n');

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const content = line.slice(6);
            if (content === '[DONE]') break;
            if (content.startsWith('Error: ')) {
              throw new Error(content.slice(7));
            }
            if (content.trim()) {
              assistantMessage += content;
              // Update the last message (assistant's message)
              setMessages(prev => {
                const newMessages = [...prev];
                newMessages[newMessages.length - 1] = {
                  role: 'assistant',
                  content: assistantMessage,
                };
                return newMessages;
              });
            }
          }
        }
      }
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Sorry, I encountered an error. Please try again.' 
      }]);
    } finally {
      setIsLoading(false);
    }
  }, [sessionId]);

  const clearChat = useCallback(() => {
    const newSessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    setSessionId(newSessionId);
    localStorage.setItem('chatSessionId', newSessionId);
    setMessages([]);
  }, []);

  return { messages, sendMessage, isLoading, clearChat, sessionId };
}
```

### 5. Vue.js Composition API Example

```javascript
import { ref, onMounted } from 'vue';

export function useChat() {
  const messages = ref([]);
  const isLoading = ref(false);
  const sessionId = ref('');

  onMounted(() => {
    sessionId.value = localStorage.getItem('chatSessionId') || 
                     `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  });

  const sendMessage = async (userMessage) => {
    isLoading.value = true;
    messages.value.push({ role: 'user', content: userMessage });

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userMessage, sessionId: sessionId.value }),
      });

      const responseSessionId = response.headers.get('X-Session-Id');
      if (responseSessionId && responseSessionId !== sessionId.value) {
        sessionId.value = responseSessionId;
        localStorage.setItem('chatSessionId', responseSessionId);
      }

      // Handle streaming response...
      // (Same streaming logic as React example)
    } catch (error) {
      console.error('Error:', error);
      messages.value.push({ 
        role: 'assistant', 
        content: 'Sorry, I encountered an error. Please try again.' 
      });
    } finally {
      isLoading.value = false;
    }
  };

  const clearChat = () => {
    const newSessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    sessionId.value = newSessionId;
    localStorage.setItem('chatSessionId', newSessionId);
    messages.value = [];
  };

  return { messages, sendMessage, isLoading, clearChat, sessionId };
}
```

## What the API Now Remembers

### Automatic Information Extraction
The API automatically extracts and remembers:

1. **Names**: "my name is John", "I'm Sarah", "call me Mike"
2. **Locations**: "I'm from San Francisco", "I live in NYC", "from Seattle"
3. **Topics**: Based on keywords in messages:
   - Design/UX: "design", "ux", "product"
   - Ladder/Insurance: "ladder", "insurance"
   - Music: "music", "beat", "grover"
   - Faith: "faith", "christian"
   - Fitness: "workout", "lifting", "gym"

### Conversation Context
- **Message History**: Last 10 messages are included in context
- **User Context**: "The person you're chatting with is named John. They're from San Francisco. You were recently discussing design/product."

## Testing the Integration

### Test Conversation Flow:
1. **First Message**: "Hi, my name is John and I'm from Seattle"
2. **Second Message**: "Tell me about your design work"
3. **Third Message**: "That sounds interesting"

**Expected Behavior:**
- Message 1: Extracts name="John", location="Seattle"
- Message 2: Includes context about John from Seattle, responds about design
- Message 3: References previous conversation about design work

### Session Persistence Test:
1. Send a message with personal info
2. Refresh the page (or close/reopen browser)
3. Send another message
4. Verify the API remembers the previous context

## Error Handling

```javascript
// Handle rate limiting
if (response.status === 429) {
  const error = await response.json();
  console.error('Rate limit exceeded:', error.error);
  // Show user-friendly message
}

// Handle session errors
if (response.status === 500) {
  console.error('Session error - may need to restart conversation');
  // Optionally clear session and retry
}
```

## Environment Variables

Make sure your API has these environment variables set:
```env
OPENAI_API_KEY=your_openai_api_key
UPSTASH_REDIS_REST_URL=your_redis_url
UPSTASH_REDIS_REST_TOKEN=your_redis_token
```

## Migration Checklist

- [ ] Update API calls to include `sessionId` parameter
- [ ] Implement session ID storage (localStorage recommended)
- [ ] Handle `X-Session-Id` response header
- [ ] Add session management (clear chat functionality)
- [ ] Test conversation memory with personal information
- [ ] Test session persistence across page refreshes
- [ ] Add error handling for session-related errors 