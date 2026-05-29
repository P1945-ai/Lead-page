// Voice demo quota check — /api/voice/check-quota
//
// Returns: { allowed: boolean, retry_after: number (epoch ms) }
//
// NOTE (MVP): True per-IP rate limiting requires a persistent store
// (e.g. Netlify Blobs, Upstash Redis, or a KV table). This stub returns
// allowed:true and the client enforces the 1-try-per-day limit via
// localStorage. When a KV store is wired in, replace the body below with:
//   1. read client IP from event.headers['x-nf-client-connection-ip']
//   2. look up last-session timestamp for that IP
//   3. if within 24h, return { allowed:false, retry_after: last + 86400000 }
//   4. otherwise record now() and return { allowed:true }
export async function handler() {
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
    body: JSON.stringify({ allowed: true, retry_after: 0 }),
  };
}
