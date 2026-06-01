import { Link } from 'react-router-dom';
import ServicePageTemplate from '../../components/site/ServicePageTemplate';
import AnimatedDashboard from '../../components/visuals/AnimatedDashboard';
import { OmadIllustration, LocalBoostIllustration } from '../../components/visuals/CaseIllustrations';

const CrossLink = ({ to, Illustration, label, sub }) => (
  <Link to={to} style={{ textDecoration: 'none', flex: 1, minWidth: '220px', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border)', background: 'var(--surface)', boxShadow: 'var(--shadow-sm)' }}>
    <div style={{ aspectRatio: '16/9' }}><Illustration /></div>
    <div style={{ padding: '16px' }}>
      <div style={{ fontFamily: '"Geist Variable", sans-serif', fontSize: '17px', fontWeight: 700, color: 'var(--text-primary)' }}>{label} →</div>
      <div style={{ fontSize: '13px', color: 'var(--text-secondary)', marginTop: '4px' }}>{sub}</div>
    </div>
  </Link>
);

const data = {
  accent: '#5B6CFF',
  seo: {
    title: 'Custom AI Apps & SaaS Builds',
    description: 'Production-ready custom software in 2–4 weeks. React + FastAPI + MongoDB, deployed and yours — with full IP ownership.',
  },
  hero: {
    eyebrow: 'CUSTOM AI APPS & SAAS',
    headline: 'When off-the-shelf doesn’t fit, we build it.',
    subhead: 'Custom AI tools, dashboards, and full SaaS products — scoped, built, and deployed in weeks. Production-ready code you own outright, no in-house dev team required.',
  },
  heroVisual: (
    <AnimatedDashboard
      title="Custom Build · Preview"
      accent="#5B6CFF"
      metrics={[
        { label: 'Active Users', value: 1240, icon: 'users' },
        { label: 'Uptime', value: 99.9, decimals: 1, suffix: '%', icon: 'trend' },
        { label: 'API Calls/min', value: 318, icon: 'zap' },
      ]}
      notifications={[
        'Deploy succeeded — production',
        'New user onboarded',
        'Webhook processed — Stripe',
        'AI job completed — 1.2s',
      ]}
    />
  ),
  problem: {
    title: 'Generic tools force you to work their way.',
    points: [
      { title: 'Nothing quite fits', desc: 'You stitch together five SaaS tools and still don’t get the workflow you actually need.' },
      { title: 'No dev team', desc: 'You have the idea and the business case — but no one to build production software.' },
      { title: 'Agencies overbuild', desc: 'Six-month timelines and bloated quotes for something that should ship in weeks.' },
    ],
  },
  process: {
    title: 'Idea to production in weeks.',
    steps: [
      { title: 'Discovery & scoping', desc: 'We map the workflow, the data, and the edge cases.' },
      { title: 'Build', desc: 'React + FastAPI + MongoDB, built to production standard.' },
      { title: 'Deploy', desc: 'Shipped to Vercel or Netlify, live and monitored.' },
      { title: 'Train & optimize', desc: 'We hand over, train your team, and keep improving.' },
    ],
  },
  included: {
    title: 'A real product, not a prototype.',
    items: [
      'Discovery & technical scoping',
      'React + Vite front end',
      'FastAPI back end',
      'MongoDB data layer',
      'AI / LLM orchestration',
      'Vercel / Netlify deployment',
      'Team training & documentation',
      'Full IP ownership',
      'Ongoing optimization',
    ],
  },
  demo: {
    title: 'We’ve built these for real businesses.',
    subhead: 'Two custom builds shipped end-to-end — explore the case studies.',
    node: (
      <div className="flex flex-col gap-6">
        <AnimatedDashboard title="Custom Build · Preview" accent="#5B6CFF" />
        <div className="flex flex-wrap gap-4">
          <CrossLink to="/work/omad" Illustration={OmadIllustration} label="OMAD International" sub="Cross-border trade infrastructure & platform" />
          <CrossLink to="/work/localboost" Illustration={LocalBoostIllustration} label="LocalBoost" sub="AI visibility platform with live lead tracking" />
        </div>
      </div>
    ),
  },
  industries: {
    title: 'For operators with a specific problem to solve.',
    chips: ['Trade & Logistics', 'Local Services', 'Marketplaces', 'Internal Tools', 'AI Products', 'Lead-Gen Platforms'],
  },
  results: {
    title: 'Production software, operator speed.',
    narrative: [
      'We build custom software the way an operator would — focused on the workflow that actually moves revenue, shipped fast, and owned by you.',
      'From internal AI tools to full customer-facing SaaS, our builds run on a modern, maintainable stack: React, FastAPI, MongoDB, and LLM orchestration where it adds real value.',
      'You get production-ready code, deployed and documented, with full IP ownership — and a partner who keeps optimizing it after launch.',
    ],
    stats: [
      { value: '2–4 wks', label: 'Typical build time' },
      { value: 'Production', label: 'Ready code, not a demo' },
      { value: '100%', label: 'IP ownership' },
    ],
  },
  faq: [
    { q: 'Do I own the code?', a: 'Completely. You get full IP ownership and the repository — no lock-in.' },
    { q: 'What stack do you build on?', a: 'React + Vite, FastAPI, MongoDB, and AI orchestration, deployed to Vercel or Netlify.' },
    { q: 'Can you integrate AI / Ella?', a: 'Yes. Many builds embed AI agents or LLM workflows where they add genuine value.' },
    { q: 'What happens after launch?', a: 'We train your team, hand over documentation, and offer ongoing optimization.' },
  ],
  finalCTA: {
    headline: 'Have something custom in mind?',
    sub: 'Book a scoping call and we’ll map the build.',
  },
};

export default function CustomBuilds() {
  return <ServicePageTemplate data={data} />;
}
