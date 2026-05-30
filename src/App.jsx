import { lazy, Suspense } from 'react';
import PromoBar from './components/PromoBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import FeaturedProjects from './components/FeaturedProjects';
import SilentLossDetector from './components/SilentLossDetector';
import Industries from './components/Industries';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Founder from './components/Founder';
import Contact from './components/Contact';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

// Code-split: the ElevenLabs SDK loads as its own async chunk after first paint.
const EllaVoiceDemo = lazy(() => import('./components/EllaVoiceDemo'));

function VoiceDemoFallback() {
  return (
    <section
      id="voice-demo"
      className="py-20 sm:py-30 px-6"
      style={{ background: 'var(--surface-warm)', minHeight: '520px' }}
      aria-busy="true"
    />
  );
}

export default function App() {
  return (
    <div style={{ background: 'var(--bg)', color: 'var(--text-primary)', minHeight: '100vh' }}>
      <PromoBar />
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<VoiceDemoFallback />}>
          <EllaVoiceDemo />
        </Suspense>
        <TrustBar />
        <FeaturedProjects />
        <SilentLossDetector />
        <Industries />
        <HowItWorks />
        <Pricing />
        <Founder />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
