import ServicePageTemplate from '../../components/site/ServicePageTemplate';
import PhoneMockup from '../../components/visuals/PhoneMockup';
import VoiceWaveform from '../../components/visuals/VoiceWaveform';

const data = {
  accent: 'var(--accent)',
  seo: {
    title: 'AI Voice Agents',
    description: 'Ella answers every call 24/7, qualifies leads, and books jobs straight to your calendar. Never lose another after-hours customer.',
  },
  hero: {
    eyebrow: 'FLAGSHIP · AI VOICE AGENTS',
    headline: 'Ella answers every call. Day or night.',
    subhead: '80% of after-hours calls go unanswered — and most callers never call back. Ella picks up in seconds, qualifies the lead, and books the job while you’re on the tools.',
    primaryLabel: 'Hear Ella live',
  },
  heroVisual: (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
      <PhoneMockup variant="chat" />
      <div style={{ width: '100%', maxWidth: '300px' }}>
        <VoiceWaveform bars={32} height={56} />
      </div>
    </div>
  ),
  problem: {
    title: 'Every missed call is revenue walking to your competitor.',
    points: [
      { title: '80% go unanswered', desc: 'After-hours, on a job, mid-drive — the phone rings out and the customer dials the next listing.' },
      { title: '$2,200 per missed call', desc: 'For most trades, the average job lost to a single unanswered call runs into the thousands.' },
      { title: 'Voicemail doesn’t convert', desc: 'Fewer than 1 in 5 callers leave a message. They want an answer now, not a callback tomorrow.' },
    ],
  },
  process: {
    title: 'Live in days, not months.',
    steps: [
      { title: 'We learn your business', desc: 'Services, pricing, hours, FAQs, and the questions you ask every caller.' },
      { title: 'We build Ella’s voice', desc: 'A natural voice agent tuned to your tone, trained on your business.' },
      { title: 'We connect your calendar', desc: 'Ella books straight into your scheduling tool and CRM.' },
      { title: 'She answers 24/7', desc: 'Every call picked up, qualified, and logged — with reports to you.' },
    ],
  },
  included: {
    title: 'Everything you need to never miss a call.',
    items: [
      'Custom AI voice agent trained on your business',
      '24/7 inbound call answering',
      'Lead qualification & intake questions',
      'Calendar booking & appointment scheduling',
      'CRM integration & contact logging',
      'Call transcripts & summaries',
      'Spam & robocall filtering',
      'Monthly performance reports',
    ],
  },
  demo: {
    title: 'A real conversation, handled.',
    subhead: 'This is Ella qualifying and booking an after-hours emergency — no human involved.',
    node: (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <PhoneMockup variant="chat" />
      </div>
    ),
  },
  industries: {
    title: 'Built for businesses where the phone is the front door.',
    chips: ['Plumbers', 'Electricians', 'HVAC', 'Roofers', 'Auto Detailers', 'Med Spas', 'Garage Doors', 'Contractors'],
  },
  results: {
    title: 'What 24/7 answering actually does.',
    narrative: [
      'Most trades businesses lose more revenue to missed calls than to any marketing problem. The work is there — it just rings out while you’re under a sink or up a ladder.',
      'With Ella answering, every caller gets a real conversation in under fifteen seconds. She captures the job details, answers the common questions, and books the appointment before the customer has a chance to call anyone else.',
      'The result is simple: the leads you were already paying for actually convert, and your evenings and weekends stop leaking money.',
    ],
    stats: [
      { value: 2200, prefix: '$', label: 'Avg. revenue per missed call recovered' },
      { value: 'Under 15s', label: 'Average response time' },
      { value: '24/7', label: 'Always answering' },
    ],
  },
  faq: [
    { q: 'Does it sound robotic?', a: 'No. Ella uses ElevenLabs conversational voice — natural pacing, real intonation. Most callers don’t realize they’re speaking with an AI.' },
    { q: 'What if Ella can’t answer something?', a: 'She captures the details and routes the call or a summary to you immediately, so nothing falls through the cracks.' },
    { q: 'Can it book into my existing calendar?', a: 'Yes — Ella integrates with common scheduling tools and your CRM to book directly and log every contact.' },
    { q: 'How long until it’s live?', a: 'Most voice agents are configured, tested, and answering within a week.' },
    { q: 'Can I keep my existing number?', a: 'Yes. We forward your line to Ella so customers call the same number they always have.' },
  ],
  finalCTA: {
    headline: 'Ready to install your AI voice agent?',
    sub: 'Book a call and hear Ella handle your exact use case.',
  },
};

export default function VoiceAgents() {
  return <ServicePageTemplate data={data} />;
}
