import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import useSEO from '../../lib/useSEO';
import Section, { Reveal } from '../../components/site/Section';
import CTAButtons from '../../components/site/CTAButtons';
import Chips from '../../components/site/Chips';
import { CaseHero, BuiltTile, Swatches } from '../../components/site/CaseStudy';
import StatCounter from '../../components/visuals/StatCounter';
import { OmadIllustration } from '../../components/visuals/CaseIllustrations';

/* ─── Inline SVG illustrations for BuiltTile cards ─── */

function BrowserFrameIllustration() {
  return (
    <svg viewBox="0 0 280 158" width="100%" height="100%" aria-label="Multi-page website browser frame">
      <rect width="280" height="158" fill="#F0EBE1" />
      {/* browser chrome */}
      <rect x="16" y="16" width="248" height="126" rx="6" fill="#FFFFFF" stroke="#E5E1D8" strokeWidth="1" />
      {/* toolbar */}
      <rect x="16" y="16" width="248" height="24" rx="6" fill="#F5F0E8" />
      <rect x="16" y="28" width="248" height="12" fill="#F5F0E8" />
      {/* dots */}
      <circle cx="31" cy="28" r="4" fill="#C79A3B" opacity="0.7" />
      <circle cx="45" cy="28" r="4" fill="#C79A3B" opacity="0.4" />
      <circle cx="59" cy="28" r="4" fill="#C79A3B" opacity="0.25" />
      {/* address bar */}
      <rect x="72" y="22" width="140" height="12" rx="6" fill="#E5E1D8" />
      {/* hero block */}
      <rect x="28" y="48" width="224" height="40" rx="4" fill="#C79A3B" opacity="0.18" />
      <rect x="60" y="56" width="120" height="8" rx="3" fill="#C79A3B" opacity="0.55" />
      <rect x="84" y="70" width="72" height="6" rx="3" fill="#8A8580" opacity="0.4" />
      {/* content row */}
      <rect x="28" y="98" width="66" height="32" rx="4" fill="#E5E1D8" />
      <rect x="104" y="98" width="66" height="32" rx="4" fill="#E5E1D8" />
      <rect x="180" y="98" width="72" height="32" rx="4" fill="#E5E1D8" />
      {/* text lines */}
      <rect x="34" y="104" width="42" height="5" rx="2" fill="#8A8580" opacity="0.5" />
      <rect x="34" y="114" width="32" height="4" rx="2" fill="#8A8580" opacity="0.3" />
    </svg>
  );
}

function BrandIdentityIllustration() {
  const colors = ['#C79A3B', '#1A1A1A', '#F5F0E8', '#4A4A4A', '#E5E1D8'];
  return (
    <svg viewBox="0 0 280 158" width="100%" height="100%" aria-label="Brand identity color swatches and letterform">
      <rect width="280" height="158" fill="#F0EBE1" />
      {/* swatch row */}
      {colors.map((c, i) => (
        <circle key={c} cx={56 + i * 40} cy={62} r={20} fill={c} stroke="#fff" strokeWidth="2" />
      ))}
      {/* letterform "Aa" */}
      <text
        x="140" y="126"
        textAnchor="middle"
        fontFamily='"Geist Variable", sans-serif'
        fontWeight="700"
        fontSize="40"
        fill="#C79A3B"
        letterSpacing="-1"
      >
        Aa
      </text>
      {/* baseline */}
      <line x1="60" y1="134" x2="220" y2="134" stroke="#C79A3B" strokeWidth="1.5" opacity="0.35" />
    </svg>
  );
}

function BriefingIllustration() {
  return (
    <svg viewBox="0 0 280 158" width="100%" height="100%" aria-label="Stacked strategic briefing documents">
      <rect width="280" height="158" fill="#F0EBE1" />
      {/* back sheet */}
      <rect x="70" y="30" width="148" height="104" rx="4" fill="#E5E1D8" transform="rotate(-4 144 82)" />
      {/* mid sheet */}
      <rect x="70" y="30" width="148" height="104" rx="4" fill="#EDE8DE" transform="rotate(-1.5 144 82)" />
      {/* front sheet */}
      <rect x="68" y="28" width="148" height="104" rx="4" fill="#FFFFFF" stroke="#E5E1D8" strokeWidth="1" />
      {/* header bar */}
      <rect x="68" y="28" width="148" height="14" rx="4" fill="#C79A3B" opacity="0.85" />
      <rect x="68" y="35" width="148" height="7" fill="#C79A3B" opacity="0.85" />
      {/* text lines */}
      <rect x="82" y="54" width="96" height="6" rx="2" fill="#1A1A1A" opacity="0.4" />
      <rect x="82" y="66" width="112" height="5" rx="2" fill="#8A8580" opacity="0.4" />
      <rect x="82" y="76" width="104" height="5" rx="2" fill="#8A8580" opacity="0.4" />
      <rect x="82" y="86" width="80" height="5" rx="2" fill="#8A8580" opacity="0.4" />
      {/* divider */}
      <line x1="82" y1="100" x2="200" y2="100" stroke="#E5E1D8" strokeWidth="1" />
      <rect x="82" y="108" width="56" height="5" rx="2" fill="#C79A3B" opacity="0.5" />
    </svg>
  );
}

function BrochureIllustration() {
  return (
    <svg viewBox="0 0 280 158" width="100%" height="100%" aria-label="Open brochure spread">
      <rect width="280" height="158" fill="#F0EBE1" />
      {/* drop shadow */}
      <rect x="26" y="34" width="228" height="100" rx="4" fill="#000" opacity="0.06" transform="translate(3 4)" />
      {/* brochure body */}
      <rect x="26" y="30" width="228" height="100" rx="4" fill="#FFFFFF" stroke="#E5E1D8" strokeWidth="1" />
      {/* spine */}
      <line x1="140" y1="30" x2="140" y2="130" stroke="#E5E1D8" strokeWidth="1.5" />
      {/* left panel – cover */}
      <rect x="34" y="38" width="96" height="84" rx="2" fill="#C79A3B" opacity="0.12" />
      <rect x="50" y="52" width="64" height="8" rx="3" fill="#C79A3B" opacity="0.6" />
      <rect x="58" y="64" width="48" height="5" rx="2" fill="#8A8580" opacity="0.4" />
      {/* right panel – content */}
      <rect x="152" y="44" width="88" height="6" rx="2" fill="#1A1A1A" opacity="0.35" />
      <rect x="152" y="56" width="80" height="5" rx="2" fill="#8A8580" opacity="0.35" />
      <rect x="152" y="66" width="72" height="5" rx="2" fill="#8A8580" opacity="0.35" />
      <rect x="152" y="82" width="40" height="28" rx="2" fill="#C79A3B" opacity="0.2" />
      <rect x="198" y="82" width="40" height="28" rx="2" fill="#E5E1D8" />
    </svg>
  );
}

function PodiumIllustration() {
  const bars = [
    { x: 68, h: 32, y: 96 },
    { x: 100, h: 52, y: 76 },
    { x: 132, h: 44, y: 84 },
    { x: 164, h: 68, y: 60 },
    { x: 196, h: 38, y: 90 },
  ];
  return (
    <svg viewBox="0 0 280 158" width="100%" height="100%" aria-label="Conference presentation screen with bar chart">
      <rect width="280" height="158" fill="#F0EBE1" />
      {/* podium / screen */}
      <rect x="32" y="22" width="216" height="118" rx="6" fill="#1A1A1A" />
      <rect x="42" y="30" width="196" height="100" rx="4" fill="#0E1220" />
      {/* bars */}
      {bars.map((b, i) => (
        <motion.rect
          key={i}
          x={b.x}
          y={b.y}
          width="24"
          height={b.h}
          rx="3"
          fill={i === 3 ? '#C79A3B' : '#3B4A6B'}
          initial={{ scaleY: 0, originY: 1 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
          style={{ transformOrigin: `${b.x + 12}px 128px` }}
        />
      ))}
      {/* baseline */}
      <line x1="52" y1="128" x2="228" y2="128" stroke="#3B4A6B" strokeWidth="1" />
    </svg>
  );
}

/* ─── Page component ─── */

export default function Omad() {
  useSEO({
    title: 'OMAD International — Case Study',
    description:
      "How Revenue Engine built the digital infrastructure for OMAD International's cross-border Central Asia–Canada critical-minerals trade operations, including brand system, multi-page website, PDAC conference collateral, and daily strategic briefings.",
  });

  const GOLD = '#C79A3B';

  const builtTiles = [
    {
      title: 'Multi-page website',
      desc: 'A fast, enterprise-grade web presence designed for institutional credibility and international readability.',
      illustration: <BrowserFrameIllustration />,
    },
    {
      title: 'Brand identity system',
      desc: 'Complete visual language: colour palette, typography, mark, and usage guidelines built for print and digital.',
      illustration: <BrandIdentityIllustration />,
    },
    {
      title: 'Daily strategic briefings',
      desc: 'Ongoing intelligence documents synthesising commodity markets, trade policy shifts, and partner intelligence.',
      illustration: <BriefingIllustration />,
    },
    {
      title: 'Conference collateral',
      desc: 'Print-ready brochures, one-pagers, and takeaway materials formatted for international trade events.',
      illustration: <BrochureIllustration />,
    },
    {
      title: 'PDAC presentation materials',
      desc: "Investor-grade slide decks and supporting visuals for OMAD's PDAC 2024 presenter engagement.",
      illustration: <PodiumIllustration />,
    },
    {
      title: 'Investment corridor visualisation',
      desc: 'Animated SVG mapping of the Canada–Central Asia trade arc, used across web and printed assets.',
      illustration: (
        <div style={{ width: '100%', height: '100%' }}>
          <OmadIllustration />
        </div>
      ),
    },
  ];

  const impactStats = [
    {
      value: 'PDAC presenter status',
      label: "Achieved presenter standing at the world's largest mining convention within one engagement cycle.",
    },
    {
      value: 'Government of Canada trade alignment',
      label: 'Materials aligned with Federal critical-minerals strategy and export-promotion frameworks.',
    },
    {
      value: 'Natural Resources Canada partnership',
      label: 'Strategic briefings acknowledged and referenced in NRCan bilateral coordination channels.',
    },
    {
      value: 'TMK Uzbekistan delegation co-presentation',
      label: "Co-presented alongside TMK Uzbekistan's official delegation at international minerals forum.",
    },
  ];

  return (
    <main style={{ background: 'var(--bg)', minHeight: '100vh' }}>

      {/* ── Hero ── */}
      <CaseHero
        eyebrow="ENTERPRISE · CROSS-BORDER TRADE"
        headline="Building the digital infrastructure for Central Asia–Canada trade."
        sub="Revenue Engine delivered a full brand and digital system enabling OMAD International to operate at institutional scale across the Canada–Central Asia critical-minerals corridor."
        link={{ href: 'https://omadgroup.ca', label: 'omadgroup.ca' }}
        accent={GOLD}
        visual={
          <div style={{ aspectRatio: '16/8', borderRadius: '8px', overflow: 'hidden' }}>
            <OmadIllustration />
          </div>
        }
      />

      {/* ── Section A: The Client ── */}
      <Section
        id="client"
        eyebrow="THE CLIENT"
        title="OMAD International Inc."
        center={false}
        maxWidth="800px"
      >
        <Reveal>
          <p style={{ fontSize: '18px', lineHeight: 1.65, color: 'var(--text-secondary)', marginBottom: '20px' }}>
            OMAD International Inc. is a Canadian-incorporated cross-border trade brokerage specialising in the extraction, supply, and facilitation of critical minerals — lithium, tungsten, copper, aluminium, and rare-earth compounds — between Central Asia and Canada. Operating at the intersection of two resource-rich regions, OMAD connects institutional buyers, government procurement bodies, and commodity traders with verified supply chains across Kazakhstan, Uzbekistan, and the wider CIS corridor.
          </p>
          <p style={{ fontSize: '18px', lineHeight: 1.65, color: 'var(--text-secondary)' }}>
            Founded to capitalise on Canada's critical-minerals strategy and the rapid liberalisation of Central Asian export markets, OMAD required infrastructure that matched the ambition and legitimacy of the deals it was brokering — enterprise-grade in every dimension.
          </p>
        </Reveal>
      </Section>

      {/* ── Section B: The Challenge ── */}
      <Section
        id="challenge"
        bg="var(--surface-warm)"
        eyebrow="THE CHALLENGE"
        title="Operating at institutional scale without institutional infrastructure."
        center={false}
        maxWidth="800px"
        divider
      >
        <Reveal>
          <p style={{ fontSize: '18px', lineHeight: 1.65, color: 'var(--text-secondary)', marginBottom: '20px' }}>
            OMAD arrived without a digital footprint capable of withstanding due diligence from the government agencies, sovereign wealth intermediaries, and PDAC conference partners it was engaging. The gap between the quality of relationships being built in-person and the materials supporting them online was becoming a commercial liability. Institutional buyers expect a certain level of polish before conversations advance — and OMAD needed to close that gap fast.
          </p>
          <p style={{ fontSize: '18px', lineHeight: 1.65, color: 'var(--text-secondary)' }}>
            The brief spanned multiple deliverable categories simultaneously: a credible brand system, a multi-page English and Russian-friendly website, daily strategic intelligence briefings to keep leadership informed, conference collateral for PDAC, and investment corridor visualisations that could travel across boardrooms and slide decks without losing fidelity. Revenue Engine was engaged to design, build, and sustain all of it in parallel.
          </p>
        </Reveal>
      </Section>

      {/* ── Section C: What We Built ── */}
      <Section
        id="built"
        eyebrow="WHAT WE BUILT"
        title="Six deliverables. One cohesive system."
        subtitle="Every output aligned to the same brand logic, built to function across digital, print, and presentation contexts."
        center
        maxWidth="1100px"
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(1, 1fr)',
            gap: '20px',
          }}
          className="sm:grid-cols-2 lg:grid-cols-3"
        >
          {builtTiles.map((tile, i) => (
            <motion.div
              key={tile.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.4, 0, 0.2, 1] }}
              style={{ height: '100%' }}
            >
              <BuiltTile
                title={tile.title}
                desc={tile.desc}
                accent={GOLD}
              >
                {tile.illustration}
              </BuiltTile>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── Section D: The Impact ── */}
      <Section
        id="impact"
        bg="var(--surface-warm)"
        eyebrow="THE IMPACT"
        title="Outcomes that opened doors."
        subtitle="Milestones achieved within the first engagement period."
        center
        maxWidth="1000px"
        divider
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(1, 1fr)',
            gap: '40px 32px',
          }}
          className="sm:grid-cols-2"
        >
          {impactStats.map((stat, i) => (
            <Reveal key={stat.value} delay={i * 0.1}>
              <div
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  padding: '28px 28px 24px',
                  boxShadow: 'var(--shadow-sm)',
                  height: '100%',
                }}
              >
                <StatCounter
                  value={stat.value}
                  color={GOLD}
                  align="left"
                />
                <p
                  style={{
                    fontSize: '14px',
                    lineHeight: 1.55,
                    color: 'var(--text-secondary)',
                    marginTop: '12px',
                  }}
                >
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── Section E: Tech & Tools ── */}
      <Section
        id="tech"
        eyebrow="TECH & TOOLS"
        title="How it was made."
        center
        maxWidth="760px"
      >
        <Chips
          mono
          items={[
            'React',
            'Custom CMS',
            'AI-generated strategic visuals',
            'Multi-format publishing',
          ]}
          accent={GOLD}
        />
      </Section>

      {/* ── Final CTA ── */}
      <section
        style={{
          background: 'var(--surface-warm)',
          borderTop: '1px solid var(--border)',
          padding: '96px 24px',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <Reveal>
            <motion.h2
              style={{
                fontFamily: '"Geist Variable", sans-serif',
                fontSize: 'clamp(32px, 5vw, 52px)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
                color: 'var(--text-primary)',
                marginBottom: '12px',
              }}
            >
              Visit OMAD live.
            </motion.h2>
            <p
              style={{
                fontSize: '17px',
                color: 'var(--text-secondary)',
                lineHeight: 1.55,
                marginBottom: '36px',
              }}
            >
              See the full site, brand system, and trade infrastructure in action.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div style={{ marginBottom: '20px' }}>
              <a
                href="https://omadgroup.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ fontSize: '16px', padding: '14px 32px' }}
              >
                omadgroup.ca ↗
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <p
              style={{
                fontSize: '14px',
                color: 'var(--text-muted)',
                marginBottom: '24px',
                letterSpacing: '0.03em',
                textTransform: 'uppercase',
                fontFamily: '"Geist Mono Variable", monospace',
              }}
            >
              Want results like this?
            </p>
            <CTAButtons primaryLabel="Start a project" center />
          </Reveal>
        </div>
      </section>

    </main>
  );
}
