# Revenue Engine Limited — Landing Site

Warm light-theme marketing site for Revenue Engine Limited, featuring **Ella**,
an AI agent visitors can talk to live via a 60-second voice demo.

## Stack

- React 18 + Vite 5
- Tailwind CSS v3 (JIT)
- Framer Motion
- Lucide React icons
- Geist / Geist Mono (variable) + Inter
- ElevenLabs Conversational AI (`@elevenlabs/react`)

## Local development

```bash
npm install
cp .env.example .env   # then fill in your ElevenLabs agent ID
npm run dev
```

## Ella — Live Voice Demo (ElevenLabs)

The homepage voice demo uses ElevenLabs Conversational AI. To enable it:

1. In the **ElevenLabs dashboard**, create a **Conversational AI agent**.
2. Configure Ella's **voice** and **system prompt** there — the personality
   lives in ElevenLabs, **not** in this codebase.
3. Copy the agent's **Agent ID**.
4. Paste it into `.env`:

   ```
   VITE_ELEVENLABS_AGENT_ID=agent_xxxxxxxxxxxxxxxx
   ```

If no agent ID is set, the voice button renders in a safe "Demo soon"
state and never attempts to connect.

### Limits / cost protection

- **60-second hard cutoff** per session (enforced client-side).
- **1 free try per browser per 24h** (localStorage).
- An endpoint at `/api/voice/check-quota` (Netlify function,
  `netlify/functions/voice-check-quota.js`) is wired for server-side
  per-IP limiting. The MVP stub returns `{ allowed: true }`; to enforce
  real per-IP limits, back it with a KV store (Netlify Blobs / Upstash) —
  see the TODO in that file.

## Build

```bash
npm run build      # outputs to dist/
```

Deployed on Netlify (`netlify.toml`).
