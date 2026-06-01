import { motion } from 'framer-motion';
import useSEO from '../../lib/useSEO';
import Section, { Reveal } from '../../components/site/Section';
import CTAButtons from '../../components/site/CTAButtons';
import Chips from '../../components/site/Chips';
import { CaseHero, BuiltTile, Swatches } from '../../components/site/CaseStudy';
import StatCounter from '../../components/visuals/StatCounter';
import ProcessFlow from '../../components/visuals/ProcessFlow';
import { RoadReadyIllustration } from '../../components/visuals/CaseIllustrations';

// ─── inline SVG illustrations for "What We Built" tiles ──────────────────────

function DarkLandingIllustration() {
  return (
    <svg
      viewBox="0 0 320 180"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid meet"
      aria-label="Dark luxury landing page layout"
      role="img"
    >
      {/* dark background */}
      <rect width="320" height="180" fill="#0A0A0A" rx="6" />
      {/* nav bar */}
      <rect x="20" y="16" width="280" height="20" fill="#161412" rx="4" />
      <rect x="28" y="22" width="48" height="8" fill="#D4AF37" rx="2" />
      <rect x="216" y="22" width="36" height="8" fill="#333" rx="2" />
      <rect x="258" y="22" width="34" height="8" fill="#D4AF37" rx="3" />
      {/* hero headline bar */}
      <rect x="60" y="52" width="200" height="12" fill="#D4AF37" rx="2" opacity="0.9" />
      <rect x="80" y="70" width="160" height="8" fill="#4A4A4A" rx="2" />
      <rect x="100" y="84" width="120" height="8" fill="#3A3A3A" rx="2" />
      {/* gold CTA button */}
      <rect x="110" y="104" width="100" height="28" fill="#D4AF37" rx="4" />
      <rect x="128" y="113" width="64" height="8" fill="#0A0A0A" rx="2" />
      {/* bottom decorative line */}
      <line x1="60" y1="148" x2="260" y2="148" stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.3" />
      <rect x="100" y="155" width="120" height="6" fill="#222" rx="2" />
    </svg>
  );
}

function GalleryIllustration() {
  const tiles = [
    { x: 24, y: 28 },
    { x: 162, y: 28 },
    { x: 24, y: 110 },
    { x: 162, y: 110 },
  ];
  return (
    <svg
      viewBox="0 0 320 180"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid meet"
      aria-label="Photography-led gallery"
      role="img"
    >
      <rect width="320" height="180" fill="#111" rx="6" />
      {tiles.map((t, i) => (
        <g key={i}>
          {/* tile bg */}
          <rect x={t.x} y={t.y} width="130" height="70" fill="#1A1812" rx="4" />
          {/* gold frame */}
          <rect x={t.x} y={t.y} width="130" height="70" fill="none" stroke="#C79A3B" strokeWidth="1.2" rx="4" strokeOpacity="0.7" />
          {/* interior detail lines simulating photo */}
          <rect x={t.x + 8} y={t.y + 8} width="114" height="54" fill="#0D0D0B" rx="2" />
          <line
            x1={t.x + 8}
            y1={t.y + 35}
            x2={t.x + 122}
            y2={t.y + 35}
            stroke="#C79A3B"
            strokeOpacity="0.15"
          />
          <ellipse cx={t.x + 65} cy={t.y + 35} rx="18" ry="14" fill="#1E1A12" />
          <path
            d={`M${t.x + 50} ${t.y + 35} L${t.x + 60} ${t.y + 28} L${t.x + 80} ${t.y + 35} L${t.x + 60} ${t.y + 42}Z`}
            fill="#C79A3B"
            opacity="0.35"
          />
        </g>
      ))}
    </svg>
  );
}

function PhoneCTAIllustration() {
  return (
    <svg
      viewBox="0 0 320 180"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid meet"
      aria-label="Direct phone CTA"
      role="img"
    >
      <rect width="320" height="180" fill="#F5F0E8" rx="6" />
      {/* outer pulse rings — static representation */}
      <circle cx="160" cy="90" r="64" fill="none" stroke="#C79A3B" strokeWidth="1" strokeOpacity="0.18" />
      <circle cx="160" cy="90" r="50" fill="none" stroke="#C79A3B" strokeWidth="1" strokeOpacity="0.28" />
      {/* circle background */}
      <circle cx="160" cy="90" r="36" fill="#C79A3B" opacity="0.12" />
      <circle cx="160" cy="90" r="36" fill="none" stroke="#C79A3B" strokeWidth="2" strokeOpacity="0.6" />
      {/* phone handset SVG path */}
      <path
        d="M150 78 C150 74 153 72 156 72 L162 72 C164 72 166 74 166 76 L166 84 C166 86 164 88 162 88 L160 88 C160 88 160 98 168 100 L168 100 C168 100 170 102 168 104 L164 108 C162 110 160 110 158 108 C148 100 146 90 148 82 L148 82 C148 80 149 78 150 78 Z"
        fill="#C79A3B"
      />
      {/* animated pulse ring handled by motion */}
      <motion.circle
        cx="160"
        cy="90"
        r="36"
        fill="none"
        stroke="#C79A3B"
        strokeWidth="2"
        initial={{ r: 36, opacity: 0.6 }}
        animate={{ r: 68, opacity: 0 }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
      />
    </svg>
  );
}

function TrustShieldIllustration() {
  return (
    <svg
      viewBox="0 0 320 180"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid meet"
      aria-label="Trust and positioning"
      role="img"
    >
      <rect width="320" height="180" fill="#0A0A0A" rx="6" />
      {/* subtle grid lines */}
      {[60, 120, 180, 240].map((x) => (
        <line key={x} x1={x} y1="0" x2={x} y2="180" stroke="#C79A3B" strokeOpacity="0.05" />
      ))}
      {[45, 90, 135].map((y) => (
        <line key={y} x1="0" y1={y} x2="320" y2={y} stroke="#C79A3B" strokeOpacity="0.05" />
      ))}
      {/* shield shape */}
      <path
        d="M160 38 L192 52 L192 82 C192 104 176 118 160 126 C144 118 128 104 128 82 L128 52 Z"
        fill="none"
        stroke="#C79A3B"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M160 48 L184 60 L184 82 C184 100 172 112 160 120 C148 112 136 100 136 82 L136 60 Z"
        fill="#C79A3B"
        opacity="0.12"
      />
      {/* checkmark */}
      <path
        d="M148 82 L157 91 L174 70"
        fill="none"
        stroke="#C79A3B"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* stars below */}
      {[-48, -24, 0, 24, 48].map((offset, i) => (
        <path
          key={i}
          d="M0-7 L1.8-2.2 H7L2.9 0.8 L4.3 5.9 L0 3 L-4.3 5.9 L-2.9 0.8 L-7-2.2 H-1.8Z"
          transform={`translate(${160 + offset} 148)`}
          fill="#C79A3B"
          opacity={i === 2 ? 1 : 0.45}
        />
      ))}
      <rect x="60" y="158" width="200" height="6" fill="#1A1812" rx="2" />
    </svg>
  );
}

// ─── component ────────────────────────────────────────────────────────────────

export default function RoadReady() {
  useSEO({
    title: 'Road Ready — Case Study',
    description:
      'How we built a dark-luxury private aviation detailing site for Road Ready — designed for high-trust conversions across GTA hangars.',
  });

  const GOLD = '#C79A3B';

  return (
    <>
      {/* ── Hero ── */}
      <CaseHero
        eyebrow="PREMIUM SERVICE BUSINESS"
        headline="Luxury detail service site — built for high-trust conversions."
        sub="A conversion-first website for Toronto's premier private jet detailing company, built to win clients at the hangar door."
        visual={
          <div style={{ aspectRatio: '16/8' }}>
            <RoadReadyIllustration />
          </div>
        }
        accent={GOLD}
      />

      {/* ── Section A: The Client ── */}
      <Section
        id="client"
        eyebrow="THE CLIENT"
        title="Private jet detailing — Toronto & GTA"
        center={false}
        maxWidth="780px"
      >
        <Reveal>
          <p style={{ fontSize: '17px', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '24px' }}>
            Road Ready is a Toronto-based private aviation detailing company operating at the region's most
            active aviation facilities — Pearson International, Billy Bishop Toronto City Airport, Buttonville
            Municipal, the Porter terminal, and private GTA hangars. They serve aircraft owners, charter
            operators, and fixed-base operators who expect an immaculate result every time.
          </p>
          <p style={{ fontSize: '17px', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
            With a tight-knit team of experienced detailers and a client list that includes high-net-worth
            individuals and corporate flight departments, Road Ready's reputation for precision is
            unmatched — but their digital presence hadn't caught up.
          </p>
        </Reveal>
      </Section>

      {/* ── Section B: The Challenge ── */}
      <Section
        id="challenge"
        eyebrow="THE CHALLENGE"
        title="Aviation clients expect more than a generic service site."
        bg="var(--surface-warm)"
        divider
        center={false}
        maxWidth="780px"
      >
        <Reveal>
          <p style={{ fontSize: '17px', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '24px' }}>
            Private aviation is a world of discretion, precision, and status. A client who trusts you
            with a multi-million dollar aircraft is not going to book through a template site with stock
            photography. The old site read generic — no visual authority, no clear pricing model, and
            no direct path to booking. It was bleeding credibility.
          </p>
          <p style={{ fontSize: '17px', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
            The brief was clear: build something that matches the aesthetic of the aircraft themselves —
            dark, refined, quietly expensive. Then engineer it for direct-contact bookings, trust-building
            gallery content, and mobile performance for clients browsing at the hangar.
          </p>
        </Reveal>
      </Section>

      {/* ── Section C: What We Built ── */}
      <Section
        id="built"
        eyebrow="WHAT WE BUILT"
        title="Every element earns its place."
        center={false}
        maxWidth="1080px"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5" style={{ marginBottom: '56px' }}>
          <BuiltTile
            title="Dark luxury landing page"
            desc="Obsidian backgrounds, serif display type, and gold accents — the site feels like the aircraft it services."
            accent={GOLD}
          >
            <DarkLandingIllustration />
          </BuiltTile>

          <BuiltTile
            title="Photography-led gallery"
            desc="Gold-framed image sections let the quality of the work speak first, before any copy does."
            accent={GOLD}
          >
            <GalleryIllustration />
          </BuiltTile>

          <BuiltTile
            title="Direct phone CTA system"
            desc="One-tap call-to-action buttons placed at every scroll depth — reducing friction for time-pressured clients."
            accent={GOLD}
          >
            <PhoneCTAIllustration />
          </BuiltTile>

          <BuiltTile
            title="Trust & positioning"
            desc="Airport credentials, operator logos, and a 5-star review trail build confidence before a word of copy is read."
            accent={GOLD}
          >
            <TrustShieldIllustration />
          </BuiltTile>
        </div>

        <Reveal>
          <div
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              padding: '36px 32px',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <div style={{ marginBottom: '32px' }}>
              <span
                style={{
                  fontFamily: '"Geist Mono Variable", monospace',
                  fontSize: '11px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: GOLD,
                  display: 'block',
                  marginBottom: '8px',
                }}
              >
                Booking flow
              </span>
              <h3
                style={{
                  fontFamily: '"Geist Variable", sans-serif',
                  fontSize: '20px',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  margin: 0,
                }}
              >
                The booking flow
              </h3>
            </div>
            <ProcessFlow
              accent={GOLD}
              steps={[
                { title: 'Request', desc: 'Client submits aircraft type and hangar location.' },
                { title: 'Confirm', desc: 'We confirm scope and quote.' },
                { title: 'Schedule', desc: 'Locked into the hangar calendar.' },
                { title: 'Detail', desc: 'White-glove detail, on site.' },
              ]}
            />
          </div>
        </Reveal>
      </Section>

      {/* ── Section D: Design Direction ── */}
      <Section
        id="design"
        eyebrow="DESIGN DIRECTION"
        title="Restrained luxury — every decision intentional."
        bg="var(--surface-warm)"
        divider
        center={false}
        maxWidth="780px"
      >
        <Reveal>
          <Swatches
            colors={[
              { name: 'Obsidian', hex: '#0A0A0A' },
              { name: 'Gold', hex: '#D4AF37' },
              { name: 'Cream', hex: '#F5F5F0' },
            ]}
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div
            style={{
              marginTop: '48px',
              padding: '40px 36px',
              background: '#0A0A0A',
              borderRadius: '8px',
              border: '1px solid #222',
            }}
          >
            <div
              style={{
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontSize: 'clamp(36px, 6vw, 64px)',
                fontWeight: 400,
                color: '#D4AF37',
                letterSpacing: '-0.01em',
                lineHeight: 1.1,
                marginBottom: '16px',
              }}
            >
              Road Ready
            </div>
            <div
              style={{
                fontFamily: '"Geist Mono Variable", monospace',
                fontSize: '12px',
                color: '#6A6560',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              Serif display · luxury positioning
            </div>
          </div>
        </Reveal>
      </Section>

      {/* ── Section E: The Impact ── */}
      <Section
        id="impact"
        eyebrow="THE IMPACT"
        title="Built to perform where it counts."
        maxWidth="960px"
      >
        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-10"
          style={{ marginTop: '8px' }}
        >
          <Reveal delay={0}>
            <StatCounter
              value="Premium aviation positioning"
              label="Credibility in the first 3 seconds"
              color={GOLD}
              align="center"
            />
          </Reveal>
          <Reveal delay={0.08}>
            <StatCounter
              value="Multi-airport coverage"
              label="Pearson · Billy Bishop · Buttonville · Porter"
              color={GOLD}
              align="center"
            />
          </Reveal>
          <Reveal delay={0.16}>
            <StatCounter
              value="Direct booking conversion"
              label="One-tap CTA at every scroll depth"
              color={GOLD}
              align="center"
            />
          </Reveal>
        </div>
      </Section>

      {/* ── Section F: Tech ── */}
      <Section
        id="tech"
        eyebrow="TECH STACK"
        title="Lean, fast, and maintainable."
        bg="var(--surface-warm)"
        divider
        maxWidth="780px"
      >
        <Chips
          mono
          accent={GOLD}
          items={['React', 'Tailwind', 'Custom forms', 'Mobile-optimized']}
        />
      </Section>

      {/* ── Final CTA ── */}
      <Section id="cta" maxWidth="640px">
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h2
              style={{
                fontFamily: '"Geist Variable", sans-serif',
                fontSize: 'clamp(28px, 4vw, 44px)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                lineHeight: 1.12,
                color: 'var(--text-primary)',
                marginBottom: '0',
              }}
            >
              Want a site that converts premium clients?
            </h2>
          </div>
          <CTAButtons primaryLabel="Book a call" center />
        </Reveal>
      </Section>
    </>
  );
}
