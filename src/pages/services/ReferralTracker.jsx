import ServicePageTemplate from '../../components/site/ServicePageTemplate';
import AnimatedDashboard from '../../components/visuals/AnimatedDashboard';

const data = {
  accent: '#5B6CFF',
  seo: {
    title: 'Referral Tracker',
    description: 'Unique referral codes, automatic rewards, and a full audit trail. Turn word-of-mouth into predictable, tracked revenue.',
  },
  hero: {
    eyebrow: 'REWARD-BASED GROWTH',
    headline: 'Never lose track of a referral again.',
    subhead: 'Every client gets a unique code. When their friend books, both get rewarded automatically — and you see exactly which customers drive your growth.',
  },
  heroVisual: (
    <AnimatedDashboard
      title="Referral Tracker · Live"
      accent="#5B6CFF"
      metrics={[
        { label: 'Codes Issued', value: 212, icon: 'users' },
        { label: 'Referral Rate', value: 23, suffix: '%', icon: 'trend' },
        { label: 'Rewards Sent', value: 47, icon: 'zap' },
      ]}
      notifications={[
        'Referral booked — code SARAH50',
        'Reward applied — both sides $50',
        'New code issued — Marcus T.',
        'Top referrer — Priya K. · 4 jobs',
      ]}
    />
  ),
  problem: {
    title: 'Referrals are your #1 revenue source — and nothing tracks them.',
    points: [
      { title: 'They happen by accident', desc: 'A happy customer recommends you, but there’s no system to capture or encourage it.' },
      { title: 'Rewards get forgotten', desc: 'You meant to thank them or give a discount — and it slipped, so it stops happening.' },
      { title: 'You can’t see what works', desc: 'No idea which clients drive new business, so you can’t double down on your best advocates.' },
    ],
  },
  process: {
    title: 'Word-of-mouth, turned into a system.',
    steps: [
      { title: 'Every client gets a code', desc: 'A unique referral code is issued automatically after each job.' },
      { title: 'They share it', desc: 'Friends and neighbours book using the code.' },
      { title: 'Rewards fire automatically', desc: 'Both sides get their reward — no manual tracking.' },
      { title: 'You see the data', desc: 'A dashboard shows who refers, what converts, and what it’s worth.' },
    ],
  },
  included: {
    title: 'A complete referral engine.',
    items: [
      'Unique referral codes per client',
      'Automated reward fulfillment',
      'Two-sided rewards (referrer + friend)',
      'Live tracking dashboard',
      'Referral notifications',
      'Full audit trail',
      'Top-referrer leaderboard',
      'Email + SMS sharing',
    ],
  },
  demo: {
    title: 'Watch referrals turn into revenue.',
    subhead: 'Every code, booking, and reward — tracked in one place.',
    node: <AnimatedDashboard title="Referral Tracker · Live" accent="#5B6CFF" />,
  },
  industries: {
    title: 'For any business that grows by word-of-mouth.',
    chips: ['HVAC', 'Plumbers', 'Electricians', 'Detailers', 'Med Spas', 'Landscapers', 'Roofers', 'Contractors'],
  },
  results: {
    title: 'Predictable growth from happy customers.',
    narrative: [
      'Every trades business knows referrals are their best leads — they close faster and cost nothing. But almost nobody has a system to capture and grow them.',
      'The Referral Tracker gives every client a unique code, fulfills rewards automatically when their friend books, and logs every step. Your best customers become a reliable, measurable growth channel.',
      'Instead of hoping word-of-mouth happens, you can see it, reward it, and scale it.',
    ],
    stats: [
      { value: 100, suffix: '%', label: 'Of referrals tracked' },
      { value: 'Automatic', label: 'Reward fulfillment' },
      { value: 'Zero', label: 'Forgotten referrals' },
    ],
  },
  faq: [
    { q: 'How do clients share their code?', a: 'Each client gets a personal code and link they can text, email, or hand out. Bookings are linked back automatically.' },
    { q: 'What kinds of rewards can I offer?', a: 'Discounts, account credit, or cash-style incentives — you set the structure and it fulfills automatically.' },
    { q: 'Can I see who my best referrers are?', a: 'Yes. The dashboard ranks your top advocates and shows the revenue each has driven.' },
    { q: 'Does it integrate with the other engines?', a: 'Yes — it works alongside the Follow-Up Machine so referral asks happen at the perfect moment.' },
  ],
  finalCTA: {
    headline: 'Ready to install the Referral Tracker?',
    sub: 'Make your best marketing channel predictable.',
  },
};

export default function ReferralTracker() {
  return <ServicePageTemplate data={data} />;
}
