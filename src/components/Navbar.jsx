import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const navLinks = [
  { label: 'Home',     to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Work',     to: '/work' },
  { label: 'About',    to: '/about' },
  { label: 'Contact',  to: '/', hash: 'contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // Close the mobile menu whenever the route changes.
  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  // Navigate to a section on the home page (works from any route).
  const goToSection = (id) => {
    setMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isActive = (link) => !link.hash && (link.to === '/' ? location.pathname === '/' : location.pathname.startsWith(link.to));

  return (
    <>
      <header
        className="sticky top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(250,250,245,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        }}
      >
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-1.5 flex-shrink-0" aria-label="Revenue Engine Ltd home">
              <ArrowUpRight size={16} style={{ color: 'var(--accent)' }} strokeWidth={2.5} />
              <span style={{ fontFamily: '"Geist Mono Variable", monospace', fontSize: '13px', fontWeight: 600, letterSpacing: '0.04em', color: 'var(--text-primary)' }}>
                REVENUE ENGINE
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                link.hash ? (
                  <button
                    key={link.label}
                    onClick={() => goToSection(link.hash)}
                    className="nav-link"
                    style={navStyle(false)}
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link
                    key={link.label}
                    to={link.to}
                    className="nav-link"
                    style={navStyle(isActive(link))}
                  >
                    {link.label}
                  </Link>
                )
              ))}
            </nav>

            {/* Right CTA + hamburger */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => goToSection('voice-demo')}
                className="hidden sm:flex btn-primary"
                style={{ padding: '9px 18px', fontSize: '14px', borderRadius: '999px', minHeight: '40px' }}
              >
                Talk to Ella
              </button>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden p-2 rounded-lg"
                style={{ color: 'var(--text-primary)', border: '1px solid var(--border)' }}
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
              >
                {menuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden flex flex-col"
            style={{ background: 'var(--bg)', paddingTop: '64px' }}
          >
            <div className="flex-1 flex flex-col px-6 pt-8 gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  {link.hash ? (
                    <button onClick={() => goToSection(link.hash)} className="w-full text-left px-4 py-4" style={mobileStyle(false)}>
                      {link.label}
                    </button>
                  ) : (
                    <Link to={link.to} className="block px-4 py-4" style={mobileStyle(isActive(link))}>
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
            <div className="px-6 pb-12">
              <button onClick={() => goToSection('voice-demo')} className="btn-primary w-full" style={{ padding: '16px', fontSize: '16px' }}>
                Talk to Ella
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

const navStyle = (active) => ({
  padding: '6px 14px', borderRadius: '6px', fontSize: '15px', fontWeight: 500,
  color: active ? 'var(--accent)' : 'var(--text-secondary)',
  background: 'transparent', transition: 'color 200ms', border: 'none', cursor: 'pointer',
  textDecoration: 'none',
});

const mobileStyle = (active) => ({
  fontFamily: '"Geist Variable", sans-serif', fontSize: '24px', fontWeight: 600,
  color: active ? 'var(--accent)' : 'var(--text-primary)',
  background: 'transparent', border: 'none', cursor: 'pointer', textDecoration: 'none',
});
