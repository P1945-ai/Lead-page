import ServicePageTemplate from '../../components/site/ServicePageTemplate';
import AnimatedDashboard from '../../components/visuals/AnimatedDashboard';

const data = {
  accent: '#10B981',
  seo: {
    title: 'Win-Back Campaign',
    description: 'Upload your old client list and let Ella reactivate dormant customers with AI-personalized messages you approve in one tap.',
  },
  hero: {
    eyebrow: 'REACTIVATE OLD CLIENTS',
    headline: 'Your old client list is a goldmine.',
    subhead: 'Upload your contacts and Ella finds who hasn’t booked in 6, 12, or 18 months — then sends personalized re-engagement messages you approve with one tap.',
  },
  heroVisual: (
    <AnimatedDashboard
      title="Win-Back · Live"
      accent="#10B981"
      metrics={[
        { label: 'Contacts Loaded', value: 412, icon: 'users' },
        { label: 'Reactivation', value: 41, suffix: '%', icon: 'trend' },
        { label: 'Re-booked', value: 36, icon: 'zap' },
      ]}
      notifications={[
        'Dormant 9 mo — message drafted',
        'Approved & sent — 90 contacts',
        'Reply — “yes, book me in”',
        'Re-booked — $480 recovered',
      ]}
    />
  ),
  problem: {
    title: '40% of past clients would come back — if you asked properly.',
    points: [
      { title: 'The list sits idle', desc: 'Years of past customers in QuickBooks or your phone, never contacted again.' },
      { title: 'Manual outreach never happens', desc: 'You know you should reach out, but personalizing hundreds of messages is impossible by hand.' },
      { title: 'Competitors fill the gap', desc: 'Your former customers book someone else simply because that company stayed in touch.' },
    ],
  },
  process: {
    title: 'From cold list to booked jobs.',
    steps: [
      { title: 'Upload your contacts', desc: 'CSV from QuickBooks, your phone, or anywhere.' },
      { title: 'Ella finds the dormant ones', desc: 'She flags who lapsed at 6, 12, and 18 months.' },
      { title: 'She drafts personalized messages', desc: 'Tuned to how long they’ve been gone and what they bought.' },
      { title: 'You approve in one tap', desc: 'Review the batch, approve, and replies hit your calendar.' },
    ],
  },
  included: {
    title: 'Everything to mine your client list.',
    items: [
      'CSV / contact list upload',
      'AI dormancy detection (6 / 12 / 18 mo)',
      'AI-personalized re-engagement messages',
      'One-tap batch approval',
      'Email + SMS delivery',
      'Response tracking & booking',
      'Seasonal campaign templates',
      'Per-campaign reporting',
    ],
  },
  demo: {
    title: 'A dead list, coming back to life.',
    subhead: 'Upload, detect, approve — and watch dormant clients re-book.',
    node: <AnimatedDashboard title="Win-Back · Live" accent="#10B981" />,
  },
  industries: {
    title: 'For any business sitting on past customers.',
    chips: ['Landscapers', 'Auto Detailers', 'HVAC', 'Plumbers', 'Painters', 'Med Spas', 'Roofers', 'Handymen'],
  },
  results: {
    title: 'Revenue recovered from contacts collecting dust.',
    narrative: [
      'Most trades businesses are sitting on a list worth more than any ad campaign — they just have no way to work it. The Win-Back Campaign turns that list into booked jobs.',
      'Ella scans your contacts, identifies who’s gone quiet, and drafts a personalized message for each one based on how long they’ve been away and what they last bought. You approve the batch in a single tap.',
      'A typical campaign reactivates a meaningful share of dormant clients — often recovering a full month of revenue from customers you’d already lost.',
    ],
    stats: [
      { value: 40, suffix: '%', label: 'Reactivation rate' },
      { value: 4400, prefix: '$', label: 'Avg. recovered per campaign' },
      { value: 'One tap', label: 'To approve & launch' },
    ],
  },
  faq: [
    { q: 'Where do I get my contact list?', a: 'Export a CSV from QuickBooks, your CRM, or your phone. We handle the rest of the import.' },
    { q: 'Are the messages actually personalized?', a: 'Yes. Ella drafts each message based on the client’s history and dormancy — not a generic blast.' },
    { q: 'Do I have to approve every message?', a: 'You approve in batches with one tap. You stay in control without doing the work.' },
    { q: 'Is this compliant?', a: 'Messages go to your existing customers with opt-out handling built in, following standard email/SMS practice.' },
  ],
  finalCTA: {
    headline: 'Ready to install your Win-Back Campaign?',
    sub: 'Turn your old client list into next month’s revenue.',
  },
};

export default function WinBack() {
  return <ServicePageTemplate data={data} />;
}
