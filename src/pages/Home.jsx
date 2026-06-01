import { lazy, Suspense } from 'react';
import useSEO from '../lib/useSEO';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import FeaturedProjects from '../components/FeaturedProjects';
import FeaturedWork from '../components/FeaturedWork';
import SilentLossDetector from '../components/SilentLossDetector';
import Industries from '../components/Industries';
import HowItWorks from '../components/HowItWorks';
import Pricing from '../components/Pricing';
import Founder from '../components/Founder';
import Contact from '../components/Contact';
import FinalCTA from '../components/FinalCTA';

// Code-split: the ElevenLabs SDK loads as its own async chunk after first paint.
const EllaVoiceDemo = lazy(() => import('../components/EllaVoiceDemo'));

function VoiceDemoFallback() {
  return (
    <section id="voice-demo" className="py-20 sm:py-30 px-6" style={{ background: 'var(--surface-warm)', minHeight: '520px' }} aria-busy="true" />
  );
}

export default function Home() {
  useSEO({
    title: 'AI revenue assistant for Canadian trades',
    description: 'Meet Ella — the AI that runs follow-ups, tracks referrals, and wins back old clients automatically. Built for small Canadian trades businesses.',
  });

  return (
    <>
      <Hero />
      <Suspense fallback={<VoiceDemoFallback />}>
        <EllaVoiceDemo />
      </Suspense>
      <TrustBar />
      <FeaturedProjects />
      <FeaturedWork />
      <SilentLossDetector />
      <Industries />
      <HowItWorks />
      <Pricing />
      <Founder />
      <Contact />
      <FinalCTA />
    </>
  );
}
