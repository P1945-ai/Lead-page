import { motion } from 'framer-motion';
import { Zap, Github, Twitter, Linkedin, ArrowUp } from 'lucide-react';

const footerLinks = {
  Company: [
    { label: 'Our Projects', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'Our Process', href: '#process' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ],
  Capabilities: [
    { label: 'AI App Development', href: '#services' },
    { label: 'SaaS MVP Builds', href: '#services' },
    { label: 'Lead-Gen Systems', href: '#services' },
    { label: 'Business Automation', href: '#services' },
    { label: 'CRM & Dashboards', href: '#services' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ],
};

const socialLinks = [
  { icon: Github,   href: '#', label: 'GitHub' },
  { icon: Twitter,  href: '#', label: 'Twitter / X' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleNavClick = (href) => {
    if (!href.startsWith('#')) return;
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-14 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-white/[0.06]">
      <div className="absolute inset-0 bg-[#06060F]/70 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-blue-500/25 to-transparent" />

      <div className="relative max-w-7xl mx-auto">

        {/* Main footer grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">

          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center shadow-lg">
                <Zap className="text-white" size={17} />
              </div>
              <div className="leading-none">
                <div className="text-white font-bold text-sm">Revenue Engine</div>
                <div className="text-slate-500 text-[10px] font-semibold tracking-[0.18em] uppercase mt-0.5">Limited</div>
              </div>
            </div>

            <p className="text-slate-500 text-sm leading-relaxed max-w-xs mb-5">
              AI-powered digital systems, apps, automation, and growth platforms — built for
              businesses that need leads, better operations, and scalable infrastructure.
            </p>

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
            <div key={group} className="col-span-1">
              <div className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500 mb-4">
                {group}
              </div>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="text-sm text-slate-400 hover:text-white transition-colors duration-200 text-left"
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
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-slate-600 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Revenue Engine Limited. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-700 text-xs hidden sm:block">
              AI Systems · Built for Scale
            </span>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-lg glass-card border border-white/[0.07] flex items-center justify-center text-slate-500 hover:text-blue-400 hover:border-blue-500/30 transition-all"
              aria-label="Back to top"
            >
              <ArrowUp size={13} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
