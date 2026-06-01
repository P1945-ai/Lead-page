import ServicePageTemplate from '../../components/site/ServicePageTemplate';
import PhoneMockup from '../../components/visuals/PhoneMockup';

const data = {
  accent: 'var(--accent)',
  seo: {
    title: 'AI Video Creation',
    description: 'Studio-quality AI video at a fraction of the cost. HeyGen avatars, scripted production, multi-language, social-ready — on a monthly package.',
  },
  hero: {
    eyebrow: 'AI VIDEO CREATION · HEYGEN PARTNER',
    headline: 'Studio-quality video. Without the studio.',
    subhead: 'Professional video costs $5K–$20K per asset. We produce branded, multi-language AI video — scripted, polished, and social-ready — at a fraction of the cost and 10× the volume.',
  },
  heroVisual: (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <PhoneMockup variant="video" badge="HEYGEN PARTNER" />
    </div>
  ),
  problem: {
    title: 'Great video is expensive, slow, and easy to skip.',
    points: [
      { title: '$5K–$20K per asset', desc: 'Traditional production costs put consistent video out of reach for most small businesses.' },
      { title: 'Competitors dominate content', desc: 'The businesses winning attention are publishing video constantly — and you’re not in the feed.' },
      { title: 'No time to produce', desc: 'Scripts, filming, editing, formats — it never makes it to the top of the list.' },
    ],
  },
  process: {
    title: 'From script to social in days.',
    steps: [
      { title: 'Avatar & brand setup', desc: 'We build your HeyGen avatar and brand kit.' },
      { title: 'Scripted production', desc: 'We write and produce on-message scripts.' },
      { title: 'Polish & format', desc: 'Branded, captioned, and cut for every platform.' },
      { title: 'Monthly delivery', desc: 'A steady stream of video on a predictable package.' },
    ],
  },
  included: {
    title: 'A full video team, productized.',
    items: [
      'HeyGen avatar setup',
      'Scripted video production',
      'Custom branding & captions',
      'Multi-language versions',
      'Social formats (9:16, 1:1, 16:9)',
      'Monthly content packages',
      'Hook & messaging strategy',
      'Revisions included',
    ],
  },
  demo: {
    title: 'Your brand, on camera, on repeat.',
    subhead: 'AI avatars deliver your message in any language — produced as a HeyGen partner.',
    node: (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <PhoneMockup variant="video" badge="HEYGEN PARTNER" />
      </div>
    ),
  },
  industries: {
    title: 'For any business that needs to be seen.',
    chips: ['Trades', 'Local Services', 'Real Estate', 'Med Spas', 'E-commerce', 'Coaches', 'Agencies', 'Startups'],
  },
  results: {
    title: 'More content, more reach, less cost.',
    narrative: [
      'Video is the fastest way to build trust and stay in front of customers — but the cost and effort of traditional production keep most small businesses on the sidelines.',
      'As a HeyGen partner, we produce branded AI video at a fraction of studio cost: your avatar, your script, your message, delivered in multiple languages and formats every month.',
      'You get the volume and consistency that wins attention online — without a film crew, a studio, or five-figure invoices.',
    ],
    stats: [
      { value: '$5K–$20K', label: 'Saved per video' },
      { value: 'Multi-language', label: 'Ready out of the box' },
      { value: '10×', label: 'Output volume' },
    ],
  },
  faq: [
    { q: 'What is HeyGen?', a: 'HeyGen is a leading AI video platform. As a partner, we use it to produce realistic avatar-led video for your brand.' },
    { q: 'Will it look like my brand?', a: 'Yes. We build a custom avatar and brand kit so every video is on-brand and captioned.' },
    { q: 'Can I get videos in other languages?', a: 'Yes — the same script can be delivered in multiple languages from one production.' },
    { q: 'How many videos per month?', a: 'Packages scale to your needs, from a handful of social clips to a full content calendar.' },
  ],
  finalCTA: {
    headline: 'Ready to install AI video?',
    sub: 'Book a call and we’ll plan your first month of content.',
  },
};

export default function VideoCreation() {
  return <ServicePageTemplate data={data} />;
}
