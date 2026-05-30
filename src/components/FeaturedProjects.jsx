import { useState } from 'react';
import { motion } from 'framer-motion';
import { Repeat, Gift, Undo2 } from 'lucide-react';
import CapabilityModal from './CapabilityModal';

// The three automated engines, powered by Ella.
const engines = [
  {
    key: 'followup',
    icon: Repeat,
    tag: 'AUTOMATED CLIENT RETENTION',
    title: 'Every client gets followed up. Without you lifting a finger.',
    short: 'One tap to mark a job complete. Ella sends the thank-you, checks in at day 3, asks for a review at day 7, and re-engages at 90 days. No Mailchimp. No templates. It just runs.',
    bg: '#1e1b4b',
    fg: '#fff',
    detail:
`How it works: The moment you mark a job complete — one tap from your phone — Ella takes over. She sends a branded thank-you within minutes, checks in on day 3 to make sure everything's holding up, asks for a Google review on day 7 while the work is still fresh, and quietly re-engages the client at 90 days with a seasonal tune-up or maintenance offer. No Mailchimp account. No templates to write. No "I'll follow up later" that never happens.

Who it's for: Solo operators and small crews who do great work but lose the back end — the reviews, the repeat bookings, the referrals — because following up is the first thing to fall off a busy week.

For a trades business: A painter finishes a kitchen on Tuesday. By Friday the homeowner has left a 5-star review; 90 days later Ella reminds them about the exterior they mentioned — and books it. Zero admin time, more revenue per client.`,
  },
  {
    key: 'referral',
    icon: Gift,
    tag: 'REWARD-BASED GROWTH',
    title: 'Never lose track of a referral again.',
    short: 'Every client gets a unique referral code. When their friend books, both get rewards automatically. The system remembers what your memory can’t. Referrals become predictable revenue.',
    bg: '#FF4F00',
    fg: '#fff',
    hero: true,
    detail:
`How it works: Every client you complete a job for gets their own unique referral code automatically. When they pass it to a friend and that friend books, the system links the two, applies the reward to both sides, and logs it — without you remembering a single name. You see exactly which clients drive new business and what each referral is worth.

Who it's for: Trades businesses that already get word-of-mouth but have no system to capture, reward, or grow it. If your best marketing is a happy customer's recommendation, this turns that into a repeatable channel.

For a trades business: An HVAC tech installs a furnace. The homeowner refers their neighbour; both get $50 off their next service automatically. Three referrals later, the tech has booked a full week of work from one job — and the system tracked every dollar of it.`,
  },
  {
    key: 'winback',
    icon: Undo2,
    tag: 'REACTIVATE OLD CLIENTS',
    title: 'Your old client list is a goldmine. We dig it for you.',
    short: 'Upload your contacts from QuickBooks, your phone, or anywhere. Ella finds who hasn’t come back in 6, 12, 18 months and sends personalized re-engagement messages. You approve with one tap.',
    bg: '#14532d',
    fg: '#fff',
    detail:
`How it works: Upload your old contacts from QuickBooks, your phone, a spreadsheet — anywhere. Ella scans the list and flags clients who haven't booked in 6, 12, or 18 months, then drafts personalized re-engagement messages tuned to how long they've been gone and what they bought last time. You review the batch and approve with one tap. The ones who reply land straight in your calendar.

Who it's for: Established trades businesses sitting on years of past customers they've lost touch with — a list that's quietly worth more than any ad spend.

For a trades business: A landscaper uploads 400 old clients. Ella identifies 90 who haven't booked since last spring and sends a seasonal clean-up offer. 14 reply, 9 book. That's a month of revenue recovered from contacts that were collecting dust.`,
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const cardAnim = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
};

export default function FeaturedProjects() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <section id="projects" className="relative py-20 sm:py-30 px-6 lg:px-8 section-top-divider" style={{ background: 'var(--bg)' }}>
        <div className="max-w-screen-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="section-header"
          >
            <span className="section-label">WHAT WE BUILD FOR YOU</span>
            <h2 className="section-title">Three engines. One AI running them.</h2>
            <p className="section-subtitle">
              Ella handles the follow-ups, referrals, and win-backs that grow repeat
              revenue — the work that always falls off your plate when you're busy.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-5"
          >
            {engines.map((card) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.key}
                  variants={cardAnim}
                  style={{
                    background: card.bg,
                    borderRadius: '20px',
                    padding: '32px',
                    minHeight: '340px',
                    display: 'flex',
                    flexDirection: 'column',
                    color: card.fg,
                    boxShadow: card.hero ? '0 12px 40px rgba(255,79,0,0.3)' : 'var(--shadow-md)',
                    transition: 'transform 200ms cubic-bezier(0.4,0,0.2,1), box-shadow 200ms',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  <span style={{
                    width: '44px', height: '44px', borderRadius: '12px',
                    background: 'rgba(255,255,255,0.15)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '20px',
                  }}>
                    <Icon size={22} />
                  </span>

                  <span style={{ fontFamily: '"Geist Mono Variable", monospace', fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', opacity: 0.75 }}>
                    {card.tag}
                  </span>

                  <h3 style={{
                    fontFamily: '"Geist Variable", "Inter", sans-serif',
                    fontSize: '23px', fontWeight: 700, letterSpacing: '-0.02em',
                    lineHeight: 1.2, margin: '10px 0 14px',
                  }}>
                    {card.title}
                  </h3>

                  <p style={{ fontSize: '14px', lineHeight: 1.6, opacity: 0.85, marginBottom: '22px', flex: 1 }}>
                    {card.short}
                  </p>

                  <button
                    onClick={() => setSelected(card)}
                    aria-label={`Learn more about ${card.title}`}
                    style={{
                      alignSelf: 'flex-start',
                      display: 'inline-flex', alignItems: 'center', gap: '6px',
                      background: 'rgba(255,255,255,0.16)', color: '#fff',
                      border: 'none', borderRadius: '999px', padding: '9px 18px',
                      fontSize: '14px', fontWeight: 600, cursor: 'pointer',
                      transition: 'background 200ms',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.28)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.16)'; }}
                  >
                    Learn more
                  </button>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <CapabilityModal card={selected} onClose={() => setSelected(null)} />
    </>
  );
}
