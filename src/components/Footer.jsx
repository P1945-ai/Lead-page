import { Github, Twitter, Linkedin } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const cols = {
  Company: [
    { label: 'Home',     to: '/' },
    { label: 'Services', to: '/services' },
    { label: 'Work',     to: '/work' },
    { label: 'About',    to: '/about' },
    { label: 'Contact',  section: 'contact' },
  ],
  Services: [
    { label: 'AI Voice Agents',     to: '/services/voice-agents' },
    { label: 'Follow-Up Machine',   to: '/services/follow-up-machine' },
    { label: 'Referral Tracker',    to: '/services/referral-tracker' },
    { label: 'Win-Back Campaign',   to: '/services/win-back' },
    { label: 'Custom AI & SaaS',    to: '/services/custom-builds' },
    { label: 'AI Video Creation',   to: '/services/video-creation' },
  ],
  Work: [
    { label: 'OMAD International', to: '/work/omad' },
    { label: 'Road Ready',        to: '/work/road-ready' },
    { label: 'LocalBoost',        to: '/work/localboost' },
  ],
  Connect: [
    { label: 'GitHub',   href: '#', icon: Github },
    { label: 'Twitter',  href: '#', icon: Twitter },
    { label: 'LinkedIn', href: '#', icon: Linkedin },
  ],
};

const linkStyle = {
  fontSize: '14px', color: 'var(--text-secondary)', background: 'none', border: 'none',
  padding: 0, cursor: 'pointer', transition: 'color 200ms', textDecoration: 'none',
  display: 'flex', alignItems: 'center', gap: '8px',
};

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const goSection = (id) => {
    if (location.pathname !== '/') navigate('/', { state: { scrollTo: id } });
    else document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const hoverIn = (e) => { e.currentTarget.style.color = 'var(--accent)'; };
  const hoverOut = (e) => { e.currentTarget.style.color = 'var(--text-secondary)'; };

  return (
    <footer style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', padding: '64px 24px 32px' }}>
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-16">
          {Object.entries(cols).map(([group, links]) => (
            <div key={group}>
              <p className="eyebrow block mb-5" style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{group}</p>
              <ul className="space-y-3">
                {links.map((link) => {
                  const Icon = link.icon;
                  return (
                    <li key={link.label}>
                      {link.to ? (
                        <Link to={link.to} style={linkStyle} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
                          {link.label}
                        </Link>
                      ) : link.section ? (
                        <button onClick={() => goSection(link.section)} style={linkStyle} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
                          {link.label}
                        </button>
                      ) : (
                        <a href={link.href} style={linkStyle} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
                          {Icon && <Icon size={13} />}
                          {link.label}
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="sm:flex-row"
          style={{ borderTop: '1px solid var(--border)', paddingTop: '24px', display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center', justifyContent: 'space-between' }}
        >
          <span style={{ fontFamily: '"Geist Mono Variable", monospace', fontSize: '12px', color: 'var(--text-muted)' }}>
            REVENUE ENGINE LTD · Toronto · Powered by ElevenLabs, OpenAI, Anthropic
          </span>
          <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} Revenue Engine Limited. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
