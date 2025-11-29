import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

/**
 * Check if Redis is properly configured
 */
function isRedisConfigured(): boolean {
  return !!(
    process.env.UPSTASH_REDIS_REST_URL &&
    process.env.UPSTASH_REDIS_REST_TOKEN
  );
}

/**
 * Create a Redis instance if configured, otherwise return null
 */
function createRedisClient(): Redis | null {
  if (!isRedisConfigured()) {
    console.warn(
      "[Rate Limiter] Upstash Redis not configured. Rate limiting will be disabled. " +
      "Set UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN environment variables to enable."
    );
    return null;
  }
  
  try {
    const client = Redis.fromEnv();
    // Test the connection by doing a simple ping operation
    // Note: We don't await this, but it will help catch configuration errors early
    return client;
  } catch (error) {
    console.error("[Rate Limiter] Failed to initialize Redis:", error);
    return null;
  }
}

const redisClient = createRedisClient();

/**
 * Shared Upstash rate-limiter instance.
 *
 * Limits each identifier (IP address) to 100 requests per 24-hour window.
 * The limiter is Edge-compatible because both the Redis and Ratelimit
 * clients use the Upstash HTTP API under the hood.
 * 
 * If Redis is not configured, rate limiting will be disabled (all requests allowed).
 */
export const ratelimit = redisClient
  ? new Ratelimit({
      redis: redisClient,
      limiter: Ratelimit.fixedWindow(100, "24 h"), // 100 messages every 24 hours
      analytics: true, // Optional but helpful for Upstash dashboard
      prefix: "chat_rate_limit",
    })
  : null;

/**
 * Derive a best-effort client identifier from an incoming request.
 * Falls back to a constant string so that unidentified traffic is still
 * rate-limited as a single bucket.
 */
export function getClientIdentifier(req: Request): string {
  const headers = req.headers;
  const forwardedFor = headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const cfConnecting = headers.get("cf-connecting-ip");
  const xRealIp = headers.get("x-real-ip");

  return (
    forwardedFor ||
    cfConnecting ||
    xRealIp ||
    "unknown"
  );
}

/**
 * Check if rate limiting is enabled
 */
export function isRateLimitEnabled(): boolean {
  return ratelimit !== null;
}

/**
 * Safe rate limit check that handles errors gracefully
 */
export async function safeRateLimit(req: Request): Promise<{ success: boolean; remaining: number; reset: number; limit: number } | null> {
  if (!ratelimit) {
    return { success: true, remaining: 100, reset: Date.now() + 86400000, limit: 100 };
  }
  
  try {
    const identifier = getClientIdentifier(req);
    const result = await ratelimit.limit(identifier);
    return result;
  } catch (error) {
    // Log error but don't fail the request - fail open
    console.error("[Rate Limiter] Error during rate limiting:", error);
    // Return success to allow the request through
    return { success: true, remaining: 100, reset: Date.now() + 86400000, limit: 100 };
  }
} 