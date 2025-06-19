import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

/**
 * Shared Upstash rate-limiter instance.
 *
 * Limits each identifier (IP address) to 30 requests per 24-hour window.
 * The limiter is Edge-compatible because both the Redis and Ratelimit
 * clients use the Upstash HTTP API under the hood.
 */
export const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.fixedWindow(30, "24 h"), // 30 messages every 24 hours
  analytics: true, // Optional but helpful for Upstash dashboard
  prefix: "chat_rate_limit",
});

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