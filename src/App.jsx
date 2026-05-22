import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';
import FeaturedProjects from './components/FeaturedProjects';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-navy-900 text-white">
      <Navbar />
      <main>
        <Hero />
        <WhatWeDo />
        <FeaturedProjects />
        <Services />
        <WhyUs />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
