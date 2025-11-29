# Sam Chat API

A conversational AI API that simulates chatting with Sam Chang, with built-in conversation memory and context awareness.

## Features

- **Conversation Memory**: GPT remembers who it's chatting with, including names, locations, and conversation topics
- **Session Management**: Persistent conversations across multiple requests using Redis
- **Context Awareness**: Automatically extracts and remembers user information from messages
- **Rate Limiting**: Built-in rate limiting with bypass options for authenticated users
- **Streaming Responses**: Real-time streaming chat responses
- **Edge Runtime**: Optimized for Vercel Edge Runtime

## How It Works

### Conversation Memory

The API now maintains conversation context using Redis storage. Each conversation session includes:

- **Message History**: Last 10 messages for context
- **User Information**: Automatically extracted from messages:
  - Name (e.g., "my name is John", "I'm Sarah")
  - Location (e.g., "I'm from San Francisco", "I live in NYC")
  - Last Topic Discussed (based on keywords in messages)

### Session Management

- Sessions are identified by unique session IDs
- Sessions persist for 24 hours
- Clients should send the same `sessionId` in subsequent requests to maintain conversation continuity

## API Usage

### POST /api/chat

**Request Body:**
```json
{
  "userMessage": "Hi, my name is John and I'm from San Francisco",
  "sessionId": "optional-session-id"
}
```

**Response Headers:**
- `X-Session-Id`: The session ID for this conversation (use in future requests)

**Response:** Server-Sent Events (SSE) stream

### Example Client Usage

```javascript
const response = await fetch('/api/chat', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    userMessage: 'Hi, my name is John',
    sessionId: 'your-session-id' // Optional, will be generated if not provided
  }),
});

// Handle streaming response
const reader = response.body.getReader();
const decoder = new TextDecoder();

while (true) {
  const { done, value } = await reader.read();
  if (done) break;
  
  const chunk = decoder.decode(value);
  const lines = chunk.split('\n');
  
  for (const line of lines) {
    if (line.startsWith('data: ')) {
      const content = line.slice(6);
      if (content === '[DONE]') break;
      console.log(content); // Handle streaming content
    }
  }
}
```

## Environment Variables

### Required
- `OPENAI_API_KEY`: Your OpenAI API key (required for chat functionality)

### Optional (for production)
- `UPSTASH_REDIS_REST_URL`: Upstash Redis REST URL (required for rate limiting and conversation memory in production)
- `UPSTASH_REDIS_REST_TOKEN`: Upstash Redis REST token (required for rate limiting and conversation memory in production)
- `RATE_LIMIT_BYPASS_TOKEN`: Token to bypass rate limiting (optional)
- `ALLOWED_ORIGIN`: CORS allowed origin (defaults to "*")

### Development Mode
If Redis environment variables are not set, the API will:
- **Rate Limiting**: Disabled (all requests allowed)
- **Conversation Memory**: Uses in-memory storage (sessions lost on server restart)

For production, you should set up Upstash Redis:
1. Sign up at https://console.upstash.com/
2. Create a Redis database
3. Copy the REST URL and token
4. Add them to your environment variables

### Example `.env.local` file:
```env
OPENAI_API_KEY=your_openai_api_key
UPSTASH_REDIS_REST_URL=https://your-redis-instance.upstash.io
UPSTASH_REDIS_REST_TOKEN=your_redis_token_here
RATE_LIMIT_BYPASS_TOKEN=optional_bypass_token
ALLOWED_ORIGIN=*
```

## Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up environment variables (see above)

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Visit `http://localhost:3000` to see the chat interface

## Conversation Memory Examples

### Example 1: Name and Location
```
User: "Hi, my name is Sarah and I'm from Seattle"
Sam: "Hey Sarah! Seattle's a great city. What brings you to my site today?"

User: "Tell me about your design work"
Sam: "Sure thing, Sarah! I'm currently leading design at Ladder Life..."
```

### Example 2: Topic Memory
```
User: "What's it like working at Ladder?"
Sam: "It's been really rewarding! I've been there since 2020..."

User: "That sounds interesting"
Sam: "Yeah, it's been a great journey. Since we were just talking about Ladder..."
```

## Rate Limiting

- Default: 100 messages per 24-hour window per IP (when Redis is configured)
- Disabled: If Redis is not configured, rate limiting is disabled for development
- Bypass: Use `x-bypass-token` or `authorization` header with `RATE_LIMIT_BYPASS_TOKEN`

## Architecture

- **Backend**: Next.js API Routes with Edge Runtime
- **Storage**: Upstash Redis for conversation memory
- **AI**: OpenAI GPT-4 for responses
- **Rate Limiting**: Upstash Rate Limiter
- **Frontend**: React with Tailwind CSS (example included)
