import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import PromoBar from './PromoBar';
import Navbar from './Navbar';
import Footer from './Footer';

/**
 * Scrolls to top on route change. If navigation carried a `scrollTo` state
 * (e.g. nav "Contact" from another page), scroll to that section instead.
 */
function ScrollManager() {
  const location = useLocation();
  useEffect(() => {
    const target = location.state?.scrollTo;
    if (target) {
      // wait for the home page sections to mount
      const t = setTimeout(() => {
        document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
      }, 80);
      return () => clearTimeout(t);
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
  }, [location]);
  return null;
}

export default function Layout() {
  return (
    <div style={{ background: 'var(--bg)', color: 'var(--text-primary)', minHeight: '100vh' }}>
      <ScrollManager />
      <PromoBar />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
