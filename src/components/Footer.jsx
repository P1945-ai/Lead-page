import { Github, Twitter, Linkedin } from 'lucide-react';

const cols = {
  Studio: [
    { label: 'Work',    href: '#projects' },
    { label: 'Process', href: '#process' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ],
  Services: [
    { label: 'AI Voice Agents',     href: '#projects' },
    { label: 'Revenue Automation',  href: '#projects' },
    { label: 'Custom AI Agents',    href: '#projects' },
    { label: 'SaaS MVP Builds',     href: '#projects' },
  ],
  Legal: [
    { label: 'Privacy Policy',   href: '#' },
    { label: 'Terms of Service', href: '#' },
  ],
  Connect: [
    { label: 'GitHub',   href: '#', icon: Github },
    { label: 'Twitter',  href: '#', icon: Twitter },
    { label: 'LinkedIn', href: '#', icon: Linkedin },
  ],
};

const go = (href) => {
  if (!href.startsWith('#') || href === '#') return;
  document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
};

export default function Footer() {
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
                      <button
                        onClick={() => go(link.href)}
                        className="flex items-center gap-2"
                        style={{ fontSize: '14px', color: 'var(--text-secondary)', background: 'none', border: 'none', padding: 0, cursor: 'pointer', transition: 'color 200ms' }}
                        onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; }}
                      >
                        {Icon && <Icon size={13} />}
                        {link.label}
                      </button>
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
            REVENUE ENGINE LTD · Powered by ElevenLabs, OpenAI, Anthropic
          </span>
          <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} Revenue Engine Limited. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
