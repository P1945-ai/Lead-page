import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import FeaturedProjects from './components/FeaturedProjects';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Founder from './components/Founder';
import Contact from './components/Contact';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div style={{ background: 'var(--bg)', color: 'var(--text-primary)', minHeight: '100vh' }}>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <FeaturedProjects />
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
