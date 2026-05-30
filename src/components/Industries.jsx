import { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Paintbrush, Wrench, Wind, Home, Hammer, Car, TreePine, ArrowRight } from 'lucide-react';
import IndustryModal from './IndustryModal';

const SOL = {
  followup: 'Follow-Up Machine',
  referral: 'Referral Tracker',
  winback: 'Win-Back Campaign',
};

const industries = [
  {
    key: 'electrician', icon: Zap, name: 'Electricians',
    desc: 'Quote fast, get the review, win the next job.',
    lossHeadline: 'Electricians lose ~$45,000 a year to slow response and forgotten follow-ups.',
    pains: [
      'Customers call three electricians and book whoever answers first.',
      'Panel upgrades and rewires get quoted, then never followed up on.',
      'Great work earns zero reviews because nobody asks at the right time.',
    ],
    solutions: [
      { engine: SOL.followup, text: 'Auto-asks for a Google review on day 7 and re-engages for the next inspection at 90 days.' },
      { engine: SOL.referral, text: 'Turns every satisfied homeowner into a tracked referral with automatic rewards.' },
      { engine: SOL.winback, text: 'Re-contacts past clients who haven’t booked a safety check in over a year.' },
    ],
    quote: 'We were leaving thousands on the table just from quotes we never chased. Now Ella does it for us.',
  },
  {
    key: 'painter', icon: Paintbrush, name: 'Painters',
    desc: 'Bigger jobs, more referrals, no chasing.',
    lossHeadline: 'Painters lose ~$57,000 a year to unbooked estimates and missed repeat work.',
    pains: [
      'Estimates go out and sit — homeowners go cold without a nudge.',
      'Interior clients never get reminded about the exterior next season.',
      'Word-of-mouth referrals happen but are never captured or rewarded.',
    ],
    solutions: [
      { engine: SOL.followup, text: 'Follows up every estimate automatically and books the review while the paint is fresh.' },
      { engine: SOL.referral, text: 'Gives each client a code so their neighbour’s job is tracked back to them.' },
      { engine: SOL.winback, text: 'Sends seasonal “time for the exterior?” offers to last year’s clients.' },
    ],
    quote: 'Half our work is repeat and referral. Revenue Engine finally makes that predictable instead of luck.',
  },
  {
    key: 'plumber', icon: Wrench, name: 'Plumbers',
    desc: 'Catch every emergency call. Keep every client.',
    lossHeadline: 'Plumbers lose ~$50,000 a year to missed emergency calls and one-and-done customers.',
    pains: [
      'Emergency callers hang up and dial the next plumber in seconds.',
      'A customer you fixed once never hears from you again.',
      'No system to ask happy clients to refer their family and neighbours.',
    ],
    solutions: [
      { engine: SOL.followup, text: 'Instant response and a day-3 check-in so customers stay yours, not the next listing’s.' },
      { engine: SOL.referral, text: 'Rewards clients for sending friends — predictable new work from your best customers.' },
      { engine: SOL.winback, text: 'Reactivates past clients with maintenance and inspection reminders.' },
    ],
    quote: 'Speed wins plumbing. Ella answers before I even reach my phone, and we stopped losing the panic calls.',
  },
  {
    key: 'hvac', icon: Wind, name: 'HVAC',
    desc: 'Seasonal bookings on autopilot.',
    lossHeadline: 'HVAC businesses lose ~$55,000 a year to skipped tune-ups and slow quotes.',
    pains: [
      'Maintenance customers forget to rebook each season.',
      'Install quotes go quiet without consistent follow-up.',
      'Busy season buries the team — follow-ups are first to be dropped.',
    ],
    solutions: [
      { engine: SOL.followup, text: 'Automatic spring and fall tune-up reminders keep the calendar full year-round.' },
      { engine: SOL.referral, text: 'Neighbour referrals tracked and rewarded after every install.' },
      { engine: SOL.winback, text: 'Re-engages homeowners overdue for service before the heat wave or cold snap.' },
    ],
    quote: 'Our shoulder seasons used to be dead. Now Ella refills them with tune-ups we’d have forgotten to chase.',
  },
  {
    key: 'roofer', icon: Home, name: 'Roofers',
    desc: 'High-ticket jobs, none left on the table.',
    lossHeadline: 'Roofers lose ~$108,000 a year when high-value quotes go unfollowed.',
    pains: [
      'A single unfollowed roof quote is thousands of dollars gone.',
      'Storm-season leads pile up faster than anyone can respond.',
      'Past customers’ neighbours need roofs too — but nobody asks.',
    ],
    solutions: [
      { engine: SOL.followup, text: 'Persistently follows up big quotes until you get a yes or a no — never silence.' },
      { engine: SOL.referral, text: 'Whole-street referral tracking from every completed roof.' },
      { engine: SOL.winback, text: 'Re-contacts older jobs for inspections, repairs, and gutter work.' },
    ],
    quote: 'One recovered roof quote pays for the system for a year. We’ve recovered far more than one.',
  },
  {
    key: 'handyman', icon: Hammer, name: 'Handymen',
    desc: 'Turn one job into a regular client.',
    lossHeadline: 'Handymen lose ~$35,000 a year to one-off jobs that never come back.',
    pains: [
      'Customers book once, then forget you exist for the next project.',
      'Small jobs rarely get reviewed, so new customers can’t find you.',
      'Referrals happen by accident, never on purpose.',
    ],
    solutions: [
      { engine: SOL.followup, text: 'Keeps you top-of-mind with check-ins so the next “honey-do” job comes to you.' },
      { engine: SOL.referral, text: 'Makes referrals automatic and rewarded instead of accidental.' },
      { engine: SOL.winback, text: 'Re-engages past customers with seasonal home-maintenance nudges.' },
    ],
    quote: 'I used to be a one-time guy for people. Now half my week is repeat customers Ella brought back.',
  },
  {
    key: 'detailer', icon: Car, name: 'Auto Detailers',
    desc: 'Fill the schedule with rebookings.',
    lossHeadline: 'Auto detailers lose ~$30,000 a year to clients who never rebook.',
    pains: [
      'A detail is a recurring need, but customers forget to come back.',
      'No-shows and quiet weeks because nobody nudges past clients.',
      'Loyal regulars never get asked to refer their friends.',
    ],
    solutions: [
      { engine: SOL.followup, text: 'Auto-reminders at the right interval keep cars — and the schedule — full.' },
      { engine: SOL.referral, text: 'Rewards regulars for bringing friends, filling slow days.' },
      { engine: SOL.winback, text: 'Wins back clients who haven’t detailed in months with a timely offer.' },
    ],
    quote: 'Detailing is all about rebookings. Ella keeps my calendar full without me texting anyone.',
  },
  {
    key: 'landscaper', icon: TreePine, name: 'Landscapers',
    desc: 'Lock in seasonal contracts every year.',
    lossHeadline: 'Landscapers lose ~$31,000 a year to seasonal clients who don’t return.',
    pains: [
      'Last year’s clients don’t automatically rebook for spring.',
      'One-time cleanups never convert into ongoing maintenance.',
      'A neighbourhood full of potential referrals goes untapped.',
    ],
    solutions: [
      { engine: SOL.followup, text: 'Seasonal re-engagement books spring cleanups before competitors call.' },
      { engine: SOL.referral, text: 'Turns one yard on the street into the whole block via tracked referrals.' },
      { engine: SOL.winback, text: 'Reactivates last season’s client list in one approved batch.' },
    ],
    quote: 'Every spring used to start from zero. Now Ella rebooks last year’s clients before I’m even out of the truck.',
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } },
};
const cardAnim = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
};

export default function Industries() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <section className="relative py-20 sm:py-30 px-6 lg:px-8 section-top-divider" style={{ background: 'var(--bg)' }}>
        <div className="max-w-screen-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="section-header"
          >
            <span className="section-label">BUILT FOR YOUR TRADE</span>
            <h2 className="section-title">Who Revenue Engine is for.</h2>
            <p className="section-subtitle">
              Tap your trade to see exactly what slow follow-up is costing you — and how
              Ella's three engines fix it.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
          >
            {industries.map((ind) => {
              const Icon = ind.icon;
              return (
                <motion.button
                  key={ind.key}
                  variants={cardAnim}
                  onClick={() => setSelected(ind)}
                  className="text-left"
                  aria-label={`Learn more about Revenue Engine for ${ind.name}`}
                  style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: '12px',
                    padding: '24px',
                    boxShadow: 'var(--shadow-sm)',
                    cursor: 'pointer',
                    transition: 'box-shadow 200ms, transform 200ms',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <span style={{
                    display: 'inline-flex', width: '40px', height: '40px', borderRadius: '10px',
                    background: 'rgba(255,79,0,0.1)', alignItems: 'center', justifyContent: 'center', marginBottom: '16px',
                  }}>
                    <Icon size={20} style={{ color: 'var(--accent)' }} />
                  </span>

                  <h3 style={{
                    fontFamily: '"Geist Variable", "Inter", sans-serif',
                    fontSize: '18px', fontWeight: 600, letterSpacing: '-0.01em',
                    color: 'var(--text-primary)', marginBottom: '6px',
                  }}>
                    {ind.name}
                  </h3>
                  <p style={{ fontSize: '13px', lineHeight: 1.5, color: 'var(--text-secondary)', marginBottom: '14px' }}>
                    {ind.desc}
                  </p>
                  <span className="flex items-center gap-1.5" style={{ fontSize: '13px', fontWeight: 600, color: 'var(--accent)' }}>
                    Learn more
                    <ArrowRight size={14} />
                  </span>
                </motion.button>
              );
            })}
          </motion.div>
        </div>
      </section>

      <IndustryModal industry={selected} onClose={() => setSelected(null)} />
    </>
  );
}
