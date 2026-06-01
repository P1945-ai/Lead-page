import ServicePageTemplate from '../../components/site/ServicePageTemplate';
import AnimatedDashboard from '../../components/visuals/AnimatedDashboard';

const data = {
  accent: 'var(--accent)',
  seo: {
    title: 'Follow-Up Machine',
    description: 'Automated client follow-up: thank-you, review request, and 90-day re-engagement. No Mailchimp, no templates — it just runs.',
  },
  hero: {
    eyebrow: 'AUTOMATED CLIENT RETENTION',
    headline: 'Every client followed up. Automatically.',
    subhead: 'One tap to mark a job complete. Ella sends the thank-you, asks for the review, and re-engages at 90 days — turning every job into repeat revenue.',
  },
  heroVisual: (
    <AnimatedDashboard
      title="Follow-Up Machine · Live"
      metrics={[
        { label: 'Active Sequences', value: 64, icon: 'users' },
        { label: 'Review Rate', value: 71, suffix: '%', icon: 'trend' },
        { label: 'Re-engaged', value: 28, icon: 'zap' },
      ]}
      notifications={[
        'Thank-you sent — Dave R.',
        'Review request — day 7 · Priya K.',
        '★★★★★ review posted — Marcus T.',
        '90-day re-engagement — Sarah M.',
      ]}
    />
  ),
  problem: {
    title: '60% of trades businesses never follow up. That’s where the money is.',
    points: [
      { title: 'The follow-up never happens', desc: 'You finish the job, move to the next one, and the thank-you and review request never get sent.' },
      { title: 'Reviews don’t get asked for', desc: 'Great work earns zero new reviews because nobody asks at the moment the customer is happiest.' },
      { title: 'Repeat work walks away', desc: 'Clients forget you exist by the time they need you again — so they Google someone else.' },
    ],
  },
  process: {
    title: 'Set it once. It runs forever.',
    steps: [
      { title: 'Mark the job done', desc: 'One tap from your phone when the work is complete.' },
      { title: 'Ella thanks them', desc: 'A branded thank-you goes out within minutes.' },
      { title: 'She asks for the review', desc: 'A review request on day 7, while the work is fresh.' },
      { title: 'She re-engages at 90 days', desc: 'A seasonal check-in that books the next job.' },
    ],
  },
  included: {
    title: 'A complete retention system — no marketing tools required.',
    items: [
      'Automated 7-day client sequence',
      'Branded thank-you messages',
      'Timed Google review requests',
      '90-day re-engagement campaigns',
      'Email + SMS delivery',
      'No Mailchimp or templates to manage',
      'Per-client timeline tracking',
      'Performance reporting',
    ],
  },
  demo: {
    title: 'Your retention pipeline, running live.',
    subhead: 'Every completed job flows through the same automatic sequence.',
    node: <AnimatedDashboard title="Follow-Up Machine · Live" />,
  },
  industries: {
    title: 'For any business with repeat customers.',
    chips: ['Painters', 'Plumbers', 'HVAC', 'Electricians', 'Landscapers', 'Handymen', 'Auto Detailers', 'Roofers'],
  },
  results: {
    title: 'Repeat revenue, on autopilot.',
    narrative: [
      'The difference between a one-time customer and a lifetime client is usually a single follow-up that never got sent. The Follow-Up Machine closes that gap completely.',
      'Every job you complete enters an automatic sequence — thank-you, review request, and a 90-day re-engagement — without you writing a message or remembering a name.',
      'The result is more reviews, more repeat bookings, and more referrals, all from customers you’ve already earned. Zero added headcount.',
    ],
    stats: [
      { value: 60, suffix: '%', label: 'Follow-up gap closed' },
      { value: 40, suffix: '%', label: 'Increase in repeat clients' },
      { value: '$0', label: 'Added headcount' },
    ],
  },
  faq: [
    { q: 'Do I need Mailchimp or another tool?', a: 'No. The Follow-Up Machine handles email and SMS itself — there’s nothing extra to set up or manage.' },
    { q: 'Can I customize the messages?', a: 'Yes. Messages are branded to your business and you can adjust tone and timing.' },
    { q: 'How do I mark a job complete?', a: 'One tap from your phone, or automatically when you close a job in your connected tool.' },
    { q: 'What if a client replies?', a: 'Replies route to you (or Ella) so a real conversation can happen when it matters.' },
  ],
  finalCTA: {
    headline: 'Ready to install the Follow-Up Machine?',
    sub: 'Turn every completed job into your next one.',
  },
};

export default function FollowUpMachine() {
  return <ServicePageTemplate data={data} />;
}
