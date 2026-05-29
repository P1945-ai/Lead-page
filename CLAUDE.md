# Revenue Engine Limited — Claude Code Protocol

## SESSION HANDOFF PROTOCOL (PERMANENT)

After ANY response that modifies code, config, content, or the database, end the response
with a SESSION HANDOFF block inside a markdown code block (triple backticks).

Also append the same block to /docs/session-log.md with a UTC timestamp (never overwrite).

### Required handoff format:

```
=== SESSION HANDOFF — [YYYY-MM-DD HH:MM UTC] ===

TASK: [one-line description]

CHANGES MADE:
- [file/component]: [what changed and why]

FILES TOUCHED:
- exact/path/to/file.jsx

NEW DEPENDENCIES:
- [package@version] — [why]
(or "none")

BREAKING CHANGES:
- [what breaks + migration]
(or "none")

TESTING DONE:
- [what + result]

KNOWN ISSUES:
- [anything broken, deferred, risky, or skipped]
(or "none")

DEVIATIONS FROM BRIEF:
- [anything done differently + why]
(or "none")

NEXT LOGICAL STEPS:
1.
2.
3.

DO NOT TOUCH:
- Auth / JWT / login flow
- Stripe integration
- Email service mocks
- Backend /api routes
- Database schemas
- Admin routes
- Any locked sections per PROJECT_BRIEF.md

ENV / CREDENTIALS NEEDED:
- [variables]
(or "none")

DEPLOY STATUS:
- [pushed / pending / failed + branch]

=== END HANDOFF ===
```

### Rules:
- Single markdown code block per handoff (copy in one click)
- Each bullet under 20 words
- No marketing language, no praise, no emojis
- Empty sections: write "none"
- Block goes at the very END of every task response

---

## DESIGN SYSTEM (locked — do not deviate)

### Colors (CSS custom properties in :root)
- `--bg: #0A0A0F`
- `--surface: #15151B`
- `--surface-elevated: #1E1E26`
- `--border: #27272F`
- `--text-primary: #FFFFFF`
- `--text-secondary: #A0A0AB`
- `--text-muted: #6B6B75`
- `--accent: #5B6CFF`
- `--accent-glow: #7B8AFF`
- `--success: #10B981`

### Typography
- Headlines: Geist Variable (600-700)
- Body: Inter (400-500)
- Mono accents, eyebrows, code: Geist Mono Variable

### Fonts (loaded via @fontsource-variable in main.jsx + Inter via Google Fonts)

### Spacing
- 8px grid
- Section padding: 120px desktop / 80px mobile
- Container max-width: 1280px
- Hero max-width: 960px

### Radius
- Cards: 12px
- Buttons: 8px
- Pills: 999px

### Shadows
- sm: 0 1px 2px rgba(0,0,0,0.4)
- md: 0 4px 12px rgba(0,0,0,0.5)
- glow: 0 0 40px rgba(91,108,255,0.25)

### Animations
- All respect prefers-reduced-motion
- Scroll reveals: opacity 0→1 + y 16px→0, 600ms ease-out
- Stagger: max 80ms
- Hover: 200ms cubic-bezier(0.4,0,0.2,1)
- NO bouncing, NO scale beyond 1.02x
- NO matrix rain, NO particle systems
- Hero: subtle mesh gradient only

---

## DO NOT TOUCH (ever)
- Backend / API routes
- Database schemas
- Auth / JWT
- Stripe / email mocks
- Admin routes
- /docs files (except session-log.md append)

---

## Tech Stack
- React 18 + Vite 5
- Tailwind CSS v3 (JIT)
- Framer Motion
- Lucide React
- @fontsource-variable/geist + geist-mono
- TypeScript design tokens at /src/lib/design-tokens.ts

## Branch
Development: `claude/revenue-engine-portfolio-oDFKP`
