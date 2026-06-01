import { motion } from 'framer-motion';
import useSEO from '../../lib/useSEO';
import Section, { Reveal } from '../../components/site/Section';
import CTAButtons from '../../components/site/CTAButtons';
import Chips from '../../components/site/Chips';
import { CaseHero, BuiltTile } from '../../components/site/CaseStudy';
import StatCounter from '../../components/visuals/StatCounter';
import AnimatedDashboard from '../../components/visuals/AnimatedDashboard';
import MapPackVisualization from '../../components/visuals/MapPackVisualization';
import ComparisonSlider from '../../components/visuals/ComparisonSlider';
import { LocalBoostIllustration } from '../../components/visuals/CaseIllustrations';

const ACCENT = 'var(--accent)';

/* ─── Score dial SVG illustration ─── */
function ScoreDialIllustration() {
  const score = 72;
  const maxScore = 100;
  const radius = 54;
  const cx = 80;
  const cy = 82;
  const startAngle = -210;
  const endAngle = 30;
  const totalDeg = endAngle - startAngle;
  const filledDeg = (score / maxScore) * totalDeg;

  const toXY = (angleDeg, r) => {
    const rad = (angleDeg * Math.PI) / 180;
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
  };

  const arcPath = (startDeg, endDeg, r) => {
    const s = toXY(startDeg, r);
    const e = toXY(endDeg, r);
    const large = endDeg - startDeg > 180 ? 1 : 0;
    return `M ${s.x} ${s.y} A ${r} ${r} 0 ${large} 1 ${e.x} ${e.y}`;
  };

  const needleAngle = startAngle + filledDeg;
  const needleTip = toXY(needleAngle, radius - 10);

  return (
    <svg viewBox="0 0 160 110" width="100%" height="100%" aria-label="Visibility audit score dial showing 72 out of 100">
      <rect width="160" height="110" fill="#FFF8F3" />
      {/* track */}
      <path d={arcPath(startAngle, endAngle, radius)} fill="none" stroke="#E5E1D8" strokeWidth="10" strokeLinecap="round" />
      {/* filled arc */}
      <motion.path
        d={arcPath(startAngle, needleAngle, radius)}
        fill="none"
        stroke="#FF4F00"
        strokeWidth="10"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      />
      {/* needle */}
      <motion.line
        x1={cx} y1={cy}
        x2={needleTip.x} y2={needleTip.y}
        stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round"
        initial={{ rotate: startAngle - needleAngle, originX: cx, originY: cy }}
        whileInView={{ rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        style={{ transformOrigin: `${cx}px ${cy}px` }}
      />
      <circle cx={cx} cy={cy} r="4.5" fill="#1A1A1A" />
      {/* labels */}
      <text x={cx} y={cy + 22} textAnchor="middle" fontFamily='"Geist Variable", sans-serif' fontSize="22" fontWeight="700" fill="#FF4F00">{score}</text>
      <text x={cx} y={cy + 34} textAnchor="middle" fontFamily='"Geist Mono Variable", monospace' fontSize="8" fill="#8A8580" letterSpacing="0.08em">VISIBILITY SCORE</text>
      <text x={cx - radius - 6} y={cy + 6} textAnchor="middle" fontFamily='"Geist Mono Variable", monospace' fontSize="8" fill="#8A8580">0</text>
      <text x={cx + radius + 6} y={cy + 6} textAnchor="middle" fontFamily='"Geist Mono Variable", monospace' fontSize="8" fill="#8A8580">100</text>
    </svg>
  );
}

/* ─── Listing card panels for ComparisonSlider ─── */
function BeforePanel() {
  return (
    <div style={{
      width: '100%', height: '100%',
      background: '#F5F5F5',
      padding: '20px',
      display: 'flex', flexDirection: 'column', gap: '10px',
    }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
        <div style={{ width: '44px', height: '44px', borderRadius: '6px', background: '#D5D5D5', flexShrink: 0 }} />
        <div style={{ flex: 1 }}>
          <div style={{ height: '12px', width: '60%', background: '#C8C8C8', borderRadius: '4px', marginBottom: '6px' }} />
          <div style={{ height: '10px', width: '40%', background: '#DCDCDC', borderRadius: '4px' }} />
        </div>
      </div>
      {/* stars */}
      <div style={{ display: 'flex', gap: '3px', alignItems: 'center' }}>
        {[1, 2, 3].map((i) => (
          <span key={i} style={{ color: '#BDBDBD', fontSize: '14px' }}>★</span>
        ))}
        {[4, 5].map((i) => (
          <span key={i} style={{ color: '#E0E0E0', fontSize: '14px' }}>★</span>
        ))}
        <span style={{ fontSize: '11px', color: '#ADADAD', marginLeft: '4px' }}>3.1 (4 reviews)</span>
      </div>
      {/* missing fields */}
      <div style={{ background: '#EBEBEB', borderRadius: '6px', padding: '10px' }}>
        <div style={{ fontSize: '11px', color: '#ADADAD', fontFamily: '"Geist Mono Variable", monospace', marginBottom: '6px' }}>BUSINESS INFO</div>
        <div style={{ height: '9px', width: '45%', background: '#DCDCDC', borderRadius: '3px', marginBottom: '5px' }} />
        <div style={{ fontSize: '10px', color: '#C0B8B0', fontStyle: 'italic' }}>No hours listed</div>
        <div style={{ fontSize: '10px', color: '#C0B8B0', fontStyle: 'italic', marginTop: '3px' }}>No website linked</div>
        <div style={{ fontSize: '10px', color: '#C0B8B0', fontStyle: 'italic', marginTop: '3px' }}>No description</div>
      </div>
      <div style={{ background: '#EBEBEB', borderRadius: '6px', padding: '8px 10px' }}>
        <div style={{ height: '8px', width: '80%', background: '#DCDCDC', borderRadius: '3px', marginBottom: '4px' }} />
        <div style={{ height: '8px', width: '55%', background: '#DCDCDC', borderRadius: '3px' }} />
      </div>
      <div style={{
        marginTop: 'auto',
        display: 'inline-block',
        padding: '6px 14px',
        borderRadius: '6px',
        border: '1px solid #D0D0D0',
        color: '#ADADAD',
        fontSize: '12px',
        fontWeight: 600,
        width: 'fit-content',
      }}>
        Rank #8 locally
      </div>
    </div>
  );
}

function AfterPanel() {
  return (
    <div style={{
      width: '100%', height: '100%',
      background: '#FFFAF7',
      padding: '20px',
      display: 'flex', flexDirection: 'column', gap: '10px',
    }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
        <div style={{ width: '44px', height: '44px', borderRadius: '6px', background: 'rgba(255,79,0,0.12)', border: '1.5px solid #FF4F00', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontSize: '18px' }}>🔧</span>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ height: '12px', width: '72%', background: 'rgba(255,79,0,0.2)', borderRadius: '4px', marginBottom: '6px' }} />
          <div style={{ fontSize: '10px', color: '#FF4F00', fontFamily: '"Geist Mono Variable", monospace', letterSpacing: '0.05em' }}>VERIFIED · OPTIMIZED</div>
        </div>
      </div>
      {/* stars */}
      <div style={{ display: 'flex', gap: '3px', alignItems: 'center' }}>
        {[1, 2, 3, 4, 5].map((i) => (
          <span key={i} style={{ color: '#FF4F00', fontSize: '14px' }}>★</span>
        ))}
        <span style={{ fontSize: '11px', color: '#4A4A4A', marginLeft: '4px', fontWeight: 600 }}>4.9 (87 reviews)</span>
      </div>
      {/* complete fields */}
      <div style={{ background: 'rgba(255,79,0,0.06)', border: '1px solid rgba(255,79,0,0.18)', borderRadius: '6px', padding: '10px' }}>
        <div style={{ fontSize: '11px', color: '#FF4F00', fontFamily: '"Geist Mono Variable", monospace', marginBottom: '6px' }}>BUSINESS INFO</div>
        <div style={{ fontSize: '11px', color: '#4A4A4A', marginBottom: '3px' }}>Mon–Sat · 7 am – 6 pm</div>
        <div style={{ fontSize: '11px', color: '#4A4A4A', marginBottom: '3px' }}>website linked · photos added</div>
        <div style={{ fontSize: '11px', color: '#4A4A4A' }}>Full description + keywords</div>
      </div>
      <div style={{ background: 'rgba(255,79,0,0.04)', border: '1px solid rgba(255,79,0,0.12)', borderRadius: '6px', padding: '8px 10px' }}>
        <div style={{ height: '8px', width: '90%', background: 'rgba(255,79,0,0.15)', borderRadius: '3px', marginBottom: '4px' }} />
        <div style={{ height: '8px', width: '65%', background: 'rgba(255,79,0,0.1)', borderRadius: '3px' }} />
      </div>
      <div style={{
        marginTop: 'auto',
        display: 'inline-block',
        padding: '6px 14px',
        borderRadius: '6px',
        background: '#FF4F00',
        color: '#fff',
        fontSize: '12px',
        fontWeight: 700,
        width: 'fit-content',
      }}>
        Rank #1 locally
      </div>
    </div>
  );
}

/* ─── Page ─── */
export default function LocalBoost() {
  useSEO({
    title: 'LocalBoost — Case Study',
    description:
      'How Revenue Engine built LocalBoost — an AI-powered local-business visibility audit and lead-generation platform that helps service businesses rank higher, capture more leads, and demonstrate measurable ROI.',
  });

  const leadMetrics = [
    { label: 'Leads Captured', value: 212, icon: 'users' },
    { label: 'Audit Score Avg', value: 78, suffix: '/100', icon: 'trend' },
    { label: 'Calls Booked', value: 34, icon: 'zap' },
  ];

  const leadNotifs = [
    'New audit completed — Mike D. · HVAC Toronto',
    'Lead captured — Jenny R. · Plumbing Ottawa',
    'Call booked — Alex M. · Thu 10am',
    'Score improved 18pts — Roofer · Hamilton',
    'New referral lead — Car Detailing · Mississauga',
  ];

  return (
    <main style={{ background: 'var(--bg)', minHeight: '100vh' }}>

      {/* ── Hero ── */}
      <CaseHero
        eyebrow="AI PLATFORM · LEAD GENERATION"
        headline="An AI-powered visibility platform built for local service businesses."
        sub="LocalBoost audits a business's digital footprint in real-time, benchmarks it against local competitors, and converts that insight into a consulting engagement — all in one seamless experience."
        accent={ACCENT}
        visual={
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <MapPackVisualization accent={ACCENT} />
            <AnimatedDashboard
              title="LocalBoost · Live"
              accent={ACCENT}
              metrics={[
                { label: 'Leads This Week', value: 54, icon: 'users' },
                { label: 'Avg Audit Score', value: 71, suffix: '/100', icon: 'trend' },
                { label: 'Calls Booked', value: 12, icon: 'zap' },
              ]}
              notifications={leadNotifs}
            />
          </div>
        }
      />

      {/* ── Section A: The Client ── */}
      <Section
        id="client"
        eyebrow="THE CLIENT"
        title="Revenue Engine Assessment Lab"
        center={false}
        maxWidth="800px"
      >
        <Reveal>
          <p style={{ fontSize: '18px', lineHeight: 1.65, color: 'var(--text-secondary)', marginBottom: '20px' }}>
            LocalBoost is an internal product built and operated by Revenue Engine — launched as a free tool for local service businesses to audit their digital visibility. It was designed to solve a real problem we kept encountering: trades and service operators who had no clear picture of how they ranked locally, what their competitors were doing better, or how much revenue they were leaving on the table through an underoptimised online presence.
          </p>
          <p style={{ fontSize: '18px', lineHeight: 1.65, color: 'var(--text-secondary)' }}>
            Rather than build it as a pure internal tool, we opened it to the market — free, fully functional, no sign-up friction. It runs live audits, compares local rankings, and delivers personalised recommendations in under two minutes. For us, it also serves as the top of our consulting funnel.
          </p>
        </Reveal>
      </Section>

      {/* ── Section B: The Challenge ── */}
      <Section
        id="challenge"
        bg="var(--surface-warm)"
        eyebrow="THE CHALLENGE"
        title="Genuine value, qualified leads, and an AI proof point — in one tool."
        center={false}
        maxWidth="800px"
        divider
      >
        <Reveal>
          <p style={{ fontSize: '18px', lineHeight: 1.65, color: 'var(--text-secondary)', marginBottom: '20px' }}>
            The brief was deceptively difficult: build a tool that delivers genuine, verifiable value to a local business owner in real-time — not a "request a report" form or a vague score — while simultaneously capturing their contact information and warming them toward a paid consulting engagement. The tool had to earn trust before asking for anything.
          </p>
          <p style={{ fontSize: '18px', lineHeight: 1.65, color: 'var(--text-secondary)' }}>
            Equally important, it needed to demonstrate AI capability in a way that was tangible rather than abstract. Local operators don't respond to buzzwords. They respond to seeing their business ranked #8 behind competitors and being shown exactly why — and what it would cost them to fix it. The platform had to speak that language fluently.
          </p>
        </Reveal>
      </Section>

      {/* ── Section C: What We Built ── */}
      <Section
        id="built"
        eyebrow="WHAT WE BUILT"
        title="Five systems. One seamless platform."
        subtitle="Each component delivers standalone value and feeds into the next stage of the lead journey."
        center
        maxWidth="1100px"
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>

          {/* 1. Visibility audit engine */}
          <div>
            <Reveal>
              <p style={{
                fontFamily: '"Geist Variable", sans-serif',
                fontSize: '13px', fontWeight: 700, letterSpacing: '0.08em',
                textTransform: 'uppercase', color: 'var(--text-muted)',
                marginBottom: '16px',
              }}>
                Visibility audit engine
              </p>
            </Reveal>
            <div style={{ maxWidth: '680px' }}>
              <BuiltTile
                title="Real-time visibility scoring"
                desc="The audit engine pulls live data from Google Places, aggregates a composite visibility score, and presents it against a calibrated 0–100 dial. Each dimension — reviews, keywords, NAP consistency, photo coverage — is broken down individually so operators know exactly what to fix."
                accent={ACCENT}
              >
                <ScoreDialIllustration />
              </BuiltTile>
            </div>
          </div>

          {/* 2. AI competitor comparison */}
          <div>
            <Reveal>
              <p style={{
                fontFamily: '"Geist Variable", sans-serif',
                fontSize: '13px', fontWeight: 700, letterSpacing: '0.08em',
                textTransform: 'uppercase', color: 'var(--text-muted)',
                marginBottom: '16px',
              }}>
                AI competitor comparison
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <ComparisonSlider
                height={300}
                beforeLabel="Your listing"
                afterLabel="Optimized"
                accent={ACCENT}
                before={<BeforePanel />}
                after={<AfterPanel />}
              />
            </Reveal>
          </div>

          {/* 3. Lead tracking dashboard */}
          <div>
            <Reveal>
              <p style={{
                fontFamily: '"Geist Variable", sans-serif',
                fontSize: '13px', fontWeight: 700, letterSpacing: '0.08em',
                textTransform: 'uppercase', color: 'var(--text-muted)',
                marginBottom: '16px',
              }}>
                Real-time lead tracking dashboard
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <AnimatedDashboard
                title="Lead Tracking · Live"
                accent={ACCENT}
                metrics={leadMetrics}
                notifications={leadNotifs}
              />
            </Reveal>
          </div>

          {/* 4. Industry playbooks */}
          <div>
            <Reveal>
              <p style={{
                fontFamily: '"Geist Variable", sans-serif',
                fontSize: '13px', fontWeight: 700, letterSpacing: '0.08em',
                textTransform: 'uppercase', color: 'var(--text-muted)',
                marginBottom: '16px',
              }}>
                Industry playbooks
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <p style={{ fontSize: '16px', lineHeight: 1.6, color: 'var(--text-secondary)', marginBottom: '20px', maxWidth: '640px' }}>
                Pre-built audit templates and competitive benchmarks tailored to each trade vertical — so the insights are immediately relevant, not generic.
              </p>
              <Chips
                accent={ACCENT}
                items={[
                  'Plumbers',
                  'HVAC',
                  'Electricians',
                  'Roofers',
                  'Painters',
                  'Car Detailing',
                  'Garage Doors',
                  'Windows & Doors',
                  'Med Spas',
                  'Service Contractors',
                ]}
              />
            </Reveal>
          </div>

          {/* 5. Before / After Map Pack */}
          <div>
            <Reveal>
              <p style={{
                fontFamily: '"Geist Variable", sans-serif',
                fontSize: '13px', fontWeight: 700, letterSpacing: '0.08em',
                textTransform: 'uppercase', color: 'var(--text-muted)',
                marginBottom: '16px',
              }}>
                Before / After Map Pack
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <p style={{ fontSize: '16px', lineHeight: 1.6, color: 'var(--text-secondary)', marginBottom: '20px', maxWidth: '640px' }}>
                An interactive before/after toggle showing how a business's map-pack ranking shifts after full optimisation — the most visceral demonstration of what's at stake.
              </p>
              <MapPackVisualization accent={ACCENT} />
            </Reveal>
          </div>

        </div>
      </Section>

      {/* ── Section D: The Impact ── */}
      <Section
        id="impact"
        bg="var(--surface-warm)"
        eyebrow="THE IMPACT"
        title="From free tool to consulting engine."
        subtitle="Results since launch — and growing."
        center
        maxWidth="800px"
        divider
      >
        <div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '32px' }}
          className="sm:grid-cols-2"
        >
          <Reveal delay={0}>
            <div style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              padding: '32px 28px 28px',
              boxShadow: 'var(--shadow-sm)',
            }}>
              <StatCounter
                value={200}
                suffix="+"
                label="Local operators using it"
                color={ACCENT}
                align="left"
              />
              <p style={{ fontSize: '14px', lineHeight: 1.55, color: 'var(--text-secondary)', marginTop: '12px' }}>
                Local trades and service businesses across Canada have completed a visibility audit — each one a warm consulting prospect.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              padding: '32px 28px 28px',
              boxShadow: 'var(--shadow-sm)',
            }}>
              <StatCounter
                value="Direct"
                label="Consulting lead source"
                color={ACCENT}
                align="left"
              />
              <p style={{ fontSize: '14px', lineHeight: 1.55, color: 'var(--text-secondary)', marginTop: '12px' }}>
                LocalBoost is now our primary inbound channel — converting tool users into paid consulting engagements without cold outreach.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ── Section E: Tech ── */}
      <Section
        id="tech"
        eyebrow="TECH"
        title="How it was built."
        center
        maxWidth="760px"
      >
        <Chips
          mono
          accent={ACCENT}
          items={['React + Vite', 'AI orchestration', 'Google Places API', 'MongoDB']}
        />
      </Section>

      {/* ── Final CTA ── */}
      <section style={{
        background: 'var(--surface-warm)',
        borderTop: '1px solid var(--border)',
        padding: '96px 24px',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <Reveal>
            <h2 style={{
              fontFamily: '"Geist Variable", sans-serif',
              fontSize: 'clamp(28px, 4.5vw, 48px)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              color: 'var(--text-primary)',
              marginBottom: '16px',
            }}>
              Want a platform like this for your business?
            </h2>
            <p style={{
              fontSize: '17px',
              color: 'var(--text-secondary)',
              lineHeight: 1.55,
              marginBottom: '36px',
            }}>
              We build AI-powered tools that generate leads, demonstrate expertise, and run 24/7 — without a sales team.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <CTAButtons primaryLabel="Book a call" center />
          </Reveal>
        </div>
      </section>

    </main>
  );
}
