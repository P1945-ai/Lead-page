import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import useSEO from '../lib/useSEO';
import Section, { Reveal } from '../components/site/Section';
import CTAButtons from '../components/site/CTAButtons';

/* ─── Inline SVG icons ─────────────────────────────────────────────────── */

function IconOperator() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="13" r="5" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 34c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" />
      <path d="M30 18l2 2-2 2M34 20h-4" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="33" cy="20" r="3" stroke="var(--accent)" strokeWidth="2" />
    </svg>
  );
}

function IconCalendar() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg">
      <rect x="7" y="10" width="26" height="22" rx="3" stroke="var(--accent)" strokeWidth="2" />
      <path d="M7 17h26" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" />
      <path d="M14 7v6M26 7v6" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" />
      <path d="M13 25l3 3 7-7" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconNetwork() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="4" stroke="var(--accent)" strokeWidth="2" />
      <circle cx="8" cy="14" r="3" stroke="var(--accent)" strokeWidth="2" />
      <circle cx="32" cy="14" r="3" stroke="var(--accent)" strokeWidth="2" />
      <circle cx="20" cy="34" r="3" stroke="var(--accent)" strokeWidth="2" />
      <path d="M11 15.5l6 3M29 15.5l-6 3M20 24v7" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function MapleLeaf() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--accent)" aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2l1.8 4.2 4.5-.6-2.7 3.6 2.4 4-4.2-1.2L12 16l-1.8-3.9-4.2 1.2 2.4-4-2.7-3.6 4.5.6z" />
      <path d="M10.5 16h3v5h-3z" fill="var(--accent)" />
    </svg>
  );
}

/* ─── Founder photo card ────────────────────────────────────────────────── */

function FounderPhoto({ src, alt, initials }) {
  const [errored, setErrored] = useState(false);

  return (
    <div
      style={{
        width: '100%',
        aspectRatio: '4/5',
        borderRadius: '8px',
        overflow: 'hidden',
        background: 'var(--surface-warm)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        boxShadow: 'var(--shadow-md)',
      }}
    >
      {!errored ? (
        <img
          src={src}
          alt={alt}
          onError={() => setErrored(true)}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center top',
            display: 'block',
          }}
        />
      ) : (
        <span
          style={{
            fontFamily: '"Geist Variable", sans-serif',
            fontSize: '2.5rem',
            fontWeight: 700,
            color: 'var(--text-muted)',
            letterSpacing: '-0.02em',
          }}
        >
          {initials}
        </span>
      )}
    </div>
  );
}

/* ─── Animated gradient-mesh blobs ─────────────────────────────────────── */

function MeshBlob({ color, size, top, left, right, duration, xRange, yRange }) {
  return (
    <motion.div
      aria-hidden="true"
      style={{
        position: 'absolute',
        width: size,
        height: size,
        borderRadius: '50%',
        background: color,
        filter: 'blur(90px)',
        opacity: 0.22,
        top,
        left,
        right,
        pointerEvents: 'none',
      }}
      animate={{
        x: [0, xRange, 0],
        y: [0, yRange, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
        repeatType: 'mirror',
      }}
    />
  );
}

/* ─── Principle card ────────────────────────────────────────────────────── */

function PrincipleCard({ icon, title, description, delay }) {
  return (
    <Reveal delay={delay}>
      <div
        style={{
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: '8px',
          padding: '32px 28px',
          boxShadow: 'var(--shadow-sm)',
          height: '100%',
        }}
      >
        <div style={{ marginBottom: '20px' }}>{icon}</div>
        <h3
          style={{
            fontFamily: '"Geist Variable", sans-serif',
            fontSize: '1.05rem',
            fontWeight: 600,
            color: 'var(--text-primary)',
            marginBottom: '10px',
            lineHeight: 1.3,
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.9375rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.65,
            margin: 0,
          }}
        >
          {description}
        </p>
      </div>
    </Reveal>
  );
}

/* ─── Fact item ─────────────────────────────────────────────────────────── */

function FactItem({ label, value }) {
  return (
    <Reveal>
      <div
        style={{
          padding: '24px 20px',
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: '8px',
          boxShadow: 'var(--shadow-sm)',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontFamily: '"Geist Mono Variable", monospace',
            fontSize: '0.7rem',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            marginBottom: '8px',
          }}
        >
          {label}
        </p>
        <p
          style={{
            fontFamily: '"Geist Variable", sans-serif',
            fontSize: '1rem',
            fontWeight: 600,
            color: 'var(--text-primary)',
            margin: 0,
            lineHeight: 1.35,
          }}
        >
          {value}
        </p>
      </div>
    </Reveal>
  );
}

/* ─── Page ──────────────────────────────────────────────────────────────── */

export default function About() {
  useSEO({
    title: 'About',
    description:
      'Revenue Engine Ltd. was founded by two operators who build AI revenue systems for Canadian small business — not enterprise. Real systems. Real results.',
  });

  return (
    <>
      {/* ── HERO ── */}
      <section
        style={{
          position: 'relative',
          background: 'var(--bg)',
          overflow: 'hidden',
          padding: '140px 24px 120px',
          textAlign: 'center',
        }}
      >
        {/* Animated blobs */}
        <MeshBlob
          color="radial-gradient(circle, #FF4F00 0%, transparent 70%)"
          size="520px"
          top="-80px"
          left="-100px"
          duration={18}
          xRange={40}
          yRange={30}
        />
        <MeshBlob
          color="radial-gradient(circle, #5B6CFF 0%, transparent 70%)"
          size="440px"
          top="20px"
          right="-80px"
          duration={22}
          xRange={-35}
          yRange={45}
        />
        <MeshBlob
          color="radial-gradient(circle, #FF4F00 0%, transparent 70%)"
          size="300px"
          top="200px"
          left="40%"
          duration={26}
          xRange={25}
          yRange={-20}
        />

        <div
          style={{
            position: 'relative',
            zIndex: 1,
            maxWidth: '820px',
            margin: '0 auto',
          }}
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              display: 'inline-block',
              fontFamily: '"Geist Mono Variable", monospace',
              fontSize: '0.72rem',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              marginBottom: '24px',
              padding: '5px 14px',
              border: '1px solid rgba(255,79,0,0.3)',
              borderRadius: '999px',
              background: 'rgba(255,79,0,0.06)',
            }}
          >
            About Revenue Engine Ltd.
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
            style={{
              fontFamily: '"Geist Variable", sans-serif',
              fontSize: 'clamp(2.25rem, 5.5vw, 3.75rem)',
              fontWeight: 700,
              color: 'var(--text-primary)',
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              marginBottom: '28px',
            }}
          >
            Built by operators who run real businesses.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(1.0625rem, 2.2vw, 1.25rem)',
              color: 'var(--text-secondary)',
              lineHeight: 1.65,
              maxWidth: '680px',
              margin: '0 auto',
            }}
          >
            Revenue Engine Ltd. was founded by two operators who spent years inside businesses —
            not just building software for them. Every system we ship reflects that perspective.
          </motion.p>
        </div>
      </section>

      {/* ── OUR FOUNDERS ── */}
      <Section
        id="founders"
        eyebrow="OUR FOUNDERS"
        title="Two operators. One mission."
        center={false}
        maxWidth="1080px"
        bg="var(--bg)"
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))',
            gap: '32px',
          }}
        >
          {/* Alex Sadik */}
          <Reveal delay={0}>
            <div
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <div style={{ maxWidth: '340px', margin: '0 auto', padding: '32px 32px 0' }}>
                <FounderPhoto
                  src="/images/founders/alex-sadik.jpg"
                  alt="Alex Sadik, Co-Founder of Revenue Engine Ltd."
                  initials="AS"
                />
              </div>
              <div style={{ padding: '28px 32px 36px' }}>
                <h3
                  style={{
                    fontFamily: '"Geist Variable", sans-serif',
                    fontSize: '1.375rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.02em',
                    margin: '0 0 6px',
                  }}
                >
                  Alex Sadik
                </h3>
                <p
                  style={{
                    fontFamily: '"Geist Mono Variable", monospace',
                    fontSize: '0.78rem',
                    color: 'var(--accent)',
                    fontWeight: 600,
                    letterSpacing: '0.01em',
                    margin: '0 0 22px',
                    lineHeight: 1.5,
                  }}
                >
                  Co-Founder · Operator and business builder · 15+ years across multiple ventures
                </p>
                <p
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.9375rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.7,
                    margin: '0 0 16px',
                  }}
                >
                  Alex has spent more than fifteen years building and operating real businesses across
                  multiple sectors — not consulting for them, not running an agency around them. That
                  distinction matters. He knows what it feels like when the phone stops ringing or a
                  good lead goes cold because no one followed up fast enough.
                </p>
                <p
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.9375rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.7,
                    margin: '0 0 16px',
                  }}
                >
                  He started Revenue Engine after watching too many capable small businesses bleed
                  revenue to slow follow-up, missed referrals, and outdated outreach. The fix wasn't
                  more staff — it was smarter infrastructure. Revenue Engine is that infrastructure,
                  designed specifically for Canadian small business owners who want results, not
                  dashboards.
                </p>
                <p
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.9375rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  His focus is on the Canadian market and cross-border business infrastructure —
                  including international trade and expansion work, such as the{' '}
                  <Link
                    to="/work/omad"
                    style={{
                      color: 'var(--accent)',
                      textDecoration: 'none',
                      fontWeight: 600,
                      borderBottom: '1px solid rgba(255,79,0,0.35)',
                      paddingBottom: '1px',
                      transition: 'border-color 200ms',
                    }}
                  >
                    OMAD International
                  </Link>{' '}
                  project.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Shawan Young */}
          <Reveal delay={0.1}>
            <div
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <div style={{ maxWidth: '340px', margin: '0 auto', padding: '32px 32px 0' }}>
                <FounderPhoto
                  src="/images/founders/shawan-young.jpg"
                  alt="Shawan Young, Co-Founder of Revenue Engine Ltd."
                  initials="SY"
                />
              </div>
              <div style={{ padding: '28px 32px 36px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '6px' }}>
                  <h3
                    style={{
                      fontFamily: '"Geist Variable", sans-serif',
                      fontSize: '1.375rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      letterSpacing: '-0.02em',
                      margin: 0,
                    }}
                  >
                    Shawan Young
                  </h3>
                  <span
                    style={{
                      fontFamily: '"Geist Mono Variable", monospace',
                      fontSize: '0.65rem',
                      fontWeight: 600,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'var(--text-muted)',
                      background: 'var(--surface-warm)',
                      border: '1px solid var(--border)',
                      borderRadius: '999px',
                      padding: '3px 10px',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    Draft Bio — To Be Finalized By Shawan
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: '"Geist Mono Variable", monospace',
                    fontSize: '0.78rem',
                    color: 'var(--accent)',
                    fontWeight: 600,
                    letterSpacing: '0.01em',
                    margin: '0 0 22px',
                    lineHeight: 1.5,
                  }}
                >
                  Co-Founder · AI strategist and growth systems builder
                </p>
                <p
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.9375rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.7,
                    margin: '0 0 16px',
                  }}
                >
                  Shawan brings deep expertise in AI strategy and growth system design, translating
                  complex automation capabilities into practical, revenue-producing workflows that
                  small business owners can actually use every day. His approach is grounded in
                  measurable outcomes — not theoretical frameworks.
                </p>
                <p
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.9375rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  He co-architects the core systems at Revenue Engine — from lead-nurture sequences
                  to voice AI deployment — ensuring every tool shipped reflects real business
                  constraints and real client expectations. [Extended bio to be added by Shawan.]
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ── WHY WE STARTED ── */}
      <Section
        id="why"
        bg="var(--surface-warm)"
        divider
        eyebrow="WHY WE STARTED REVENUE ENGINE"
        title="AI for the businesses that actually drive Canada."
        center
        maxWidth="720px"
      >
        <div style={{ textAlign: 'left' }}>
          <Reveal>
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '1.0625rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.75,
                marginBottom: '20px',
              }}
            >
              There is no shortage of AI tools built for enterprise. Massive budgets, dedicated IT
              teams, multi-year implementation timelines. That isn't most Canadian businesses. The
              trades owner, the import-export operator, the independent professional — these people
              run lean, move fast, and need infrastructure that earns its keep on day one.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '1.0625rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.75,
                marginBottom: '20px',
              }}
            >
              Revenue Engine was built to fill that gap. Every system we offer is priced to make
              sense for a business with five to fifty employees, simple enough that you don't need
              a tech team to run it, and designed to produce a clear, measurable return — not
              just prettier reports.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '1.0625rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              We keep our client roster deliberately small so we can go deep rather than wide.
              When you work with Revenue Engine, you're working with the people who built the
              system — not a support queue. That's the only way we know how to operate.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* ── OUR APPROACH ── */}
      <Section
        id="approach"
        eyebrow="OUR APPROACH"
        title="How we think about the work."
        center
        maxWidth="1080px"
        bg="var(--bg)"
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '20px',
          }}
        >
          <PrincipleCard
            icon={<IconOperator />}
            title="Operator-led, not agency-led"
            description="We've run businesses ourselves. Every recommendation comes from that lens — what works in real operations, not what sounds good in a pitch deck."
            delay={0}
          />
          <PrincipleCard
            icon={<IconCalendar />}
            title="Built for daily use, not demos"
            description="Systems that look impressive in demos but fall apart in week three are useless. We build for the daily grind — reliable, low-maintenance, genuinely useful."
            delay={0.08}
          />
          <PrincipleCard
            icon={<IconNetwork />}
            title="Small client roster, deep relationships"
            description="We cap our active client count deliberately. You get direct access to the founders, fast iteration, and systems that actually fit your business."
            delay={0.16}
          />
        </div>
      </Section>

      {/* ── CANADIAN-BUILT ── */}
      <Section
        id="canadian"
        bg="var(--surface-warm)"
        divider
        eyebrow="CANADIAN-BUILT FOR CANADIAN BUSINESS"
        title="Home-grown infrastructure."
        subtitle="We operate where our clients operate — in Canada, for Canadian business realities."
        center
        maxWidth="1080px"
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
            gap: '16px',
            marginTop: '8px',
          }}
        >
          <FactItem label="Headquarters" value="Toronto, Ontario" />
          <FactItem label="Incorporated" value="Ontario · Est. 2013" />
          <FactItem label="Expansion" value="Grant-funded growth · 2026" />
          <FactItem label="Support" value="Bilingual coming Q2 2026" />
        </div>
        <Reveal delay={0.2}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              marginTop: '40px',
            }}
          >
            <MapleLeaf />
            <span
              style={{
                fontFamily: '"Geist Mono Variable", monospace',
                fontSize: '0.78rem',
                color: 'var(--text-muted)',
                letterSpacing: '0.08em',
                fontWeight: 500,
              }}
            >
              Proudly Canadian · Revenue Engine Ltd.
            </span>
          </div>
        </Reveal>
      </Section>

      {/* ── FINAL CTA ── */}
      <section
        style={{
          background: 'var(--bg)',
          padding: '120px 24px',
          textAlign: 'center',
          borderTop: '1px solid var(--border)',
        }}
      >
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <Reveal>
            <h2
              style={{
                fontFamily: '"Geist Variable", sans-serif',
                fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
                fontWeight: 700,
                color: 'var(--text-primary)',
                letterSpacing: '-0.025em',
                lineHeight: 1.15,
                marginBottom: '16px',
              }}
            >
              Want to talk to a founder directly?
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '1.0625rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.65,
                marginBottom: '36px',
              }}
            >
              No sales team — you talk to the people who build it.
            </p>
          </Reveal>
          <Reveal delay={0.14}>
            <CTAButtons primaryLabel="Book a call" center />
          </Reveal>
        </div>
      </section>
    </>
  );
}
