import { motion } from 'framer-motion';
import { Zap, Github, Twitter, Linkedin, ArrowUp } from 'lucide-react';

const footerLinks = {
  Company: [
    { label: 'Projects', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'About', href: '#about' },
  ],
  Build: [
    { label: 'AI App Development', href: '#services' },
    { label: 'SaaS MVP Builds', href: '#services' },
    { label: 'Lead-Gen Systems', href: '#services' },
    { label: 'Business Automation', href: '#services' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Contact', href: '#contact' },
  ],
};

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Twitter, href: '#', label: 'Twitter/X' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const handleNavClick = (href) => {
    if (href.startsWith('#')) {
      const el = document.getElementById(href.slice(1));
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative pt-16 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-white/[0.06]">
      {/* Subtle top gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="absolute inset-0 bg-navy-900/50 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Top row */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center shadow-lg">
                <Zap className="text-white" size={18} />
              </div>
              <div>
                <div className="text-white font-bold text-sm">Revenue Engine</div>
                <div className="text-slate-500 text-xs tracking-wider">LIMITED</div>
              </div>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs mb-6">
              AI-powered digital systems, apps, automation, and growth platforms for businesses that
              want to scale intelligently.
            </p>

            {/* Social */}
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 rounded-lg glass-card border border-white/[0.07] flex items-center justify-center text-slate-500 hover:text-blue-400 hover:border-blue-500/30 transition-all duration-200"
                  >
                    <Icon size={15} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">
                {group}
              </div>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent mb-6" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-slate-600 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Revenue Engine Limited. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-600 text-xs">Built with AI · Designed for Growth</span>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-lg glass-card border border-white/[0.07] flex items-center justify-center text-slate-500 hover:text-blue-400 hover:border-blue-500/30 transition-all"
              aria-label="Scroll to top"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
