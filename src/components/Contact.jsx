import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Clock, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';

const budgetOptions = [
  'Under $5,000', '$5,000 – $15,000', '$15,000 – $30,000',
  '$30,000 – $60,000', '$60,000 – $100,000', '$100,000+', 'Open to Discussion',
];

const timelineOptions = [
  'ASAP (within 2 weeks)', '1 – 2 Months', '2 – 4 Months',
  '4 – 6 Months', '6+ Months', "Not Sure Yet — Let's Talk",
];

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'hello@revenueengine.ltd', href: 'mailto:hello@revenueengine.ltd', detail: 'Best for detailed briefs' },
  { icon: Clock, label: 'Response Time', value: 'Within 24 Hours', href: null, detail: 'Mon – Fri' },
  { icon: MessageSquare, label: 'Discovery Call', value: 'Scheduled After Intake', href: null, detail: 'No commitment required' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', project: '', budget: '', timeline: '', message: '', industry: '' });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  // Pre-fill from the industry modals ("See How It Works For [Industry]").
  useEffect(() => {
    const onPrefill = (e) => {
      const { industry = '', project = '' } = e.detail || {};
      setForm((f) => ({ ...f, industry, project: project || f.project }));
      setSubmitted(false);
    };
    window.addEventListener('prefill-contact', onPrefill);
    return () => window.removeEventListener('prefill-contact', onPrefill);
  }, []);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1400));
    setSending(false);
    setSubmitted(true);
  };

  const labelStyle = { display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '6px' };

  return (
    <section id="contact" className="relative py-20 sm:py-30 px-6 lg:px-8 section-top-divider" style={{ background: 'var(--surface-warm)' }}>
      <div className="relative max-w-screen-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <span className="section-label">GET IN TOUCH</span>
          <h2 className="section-title">Start a project conversation.</h2>
          <p className="section-subtitle">
            Tell us what you're trying to build or solve. We'll review your brief and respond
            within 24 hours — no sales pitch, no obligation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-3"
          >
            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              const Wrapper = info.href ? 'a' : 'div';
              return (
                <Wrapper key={i} {...(info.href ? { href: info.href } : {})} className="glass-card-hover flex items-center gap-4 p-4" style={{ textDecoration: 'none' }}>
                  <span style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(255,79,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={16} style={{ color: 'var(--accent)' }} />
                  </span>
                  <div className="min-w-0">
                    <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 500 }}>{info.label}</div>
                    <div style={{ fontSize: '14px', color: 'var(--text-primary)', fontWeight: 600 }}>{info.value}</div>
                    {info.detail && <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{info.detail}</div>}
                  </div>
                </Wrapper>
              );
            })}

            <div className="glass-card p-5">
              <p className="eyebrow block mb-4" style={{ fontSize: '11px', color: 'var(--text-muted)' }}>What happens next</p>
              <ol className="space-y-3">
                {[
                  'We review your brief and assess the build scope',
                  'We respond with initial thoughts within 24 hours',
                  "We schedule a discovery call if there's a real fit",
                  'We provide a scoped outline and project estimate',
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span style={{ width: '20px', height: '20px', borderRadius: '999px', background: 'rgba(255,79,0,0.12)', color: 'var(--accent)', fontSize: '11px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                      {i + 1}
                    </span>
                    <span style={{ fontSize: '14px', lineHeight: 1.5, color: 'var(--text-secondary)' }}>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} className="glass-card p-8 sm:p-12 text-center">
                <span style={{ width: '64px', height: '64px', borderRadius: '999px', background: 'rgba(16,185,129,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                  <CheckCircle2 size={30} style={{ color: 'var(--success)' }} />
                </span>
                <h3 style={{ fontFamily: '"Geist Variable", sans-serif', fontSize: '24px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '8px' }}>Brief received</h3>
                <p style={{ fontSize: '15px', lineHeight: 1.6, color: 'var(--text-secondary)', maxWidth: '360px', margin: '0 auto' }}>
                  We've got your submission and will review it within 24 hours. Expect a thoughtful, direct response — not a template.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card p-5 sm:p-7 space-y-4">
                {form.industry && (
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,79,0,0.1)', color: 'var(--accent)', borderRadius: '999px', padding: '6px 14px', fontSize: '13px', fontWeight: 600 }}>
                    Industry: {form.industry}
                  </div>
                )}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label style={labelStyle}>Full Name <span style={{ color: 'var(--accent)' }}>*</span></label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="e.g. Alex Johnson" className="form-input" />
                  </div>
                  <div>
                    <label style={labelStyle}>Company / Project</label>
                    <input type="text" name="company" value={form.company} onChange={handleChange} placeholder="e.g. Apex Services Ltd" className="form-input" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label style={labelStyle}>Email Address <span style={{ color: 'var(--accent)' }}>*</span></label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="you@company.com" className="form-input" />
                  </div>
                  <div>
                    <label style={labelStyle}>Phone (optional)</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" className="form-input" />
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>What do you want to build? <span style={{ color: 'var(--accent)' }}>*</span></label>
                  <input type="text" name="project" value={form.project} onChange={handleChange} required placeholder='e.g. "AI voice agent for my plumbing business"' className="form-input" />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label style={labelStyle}>Budget Range</label>
                    <select name="budget" value={form.budget} onChange={handleChange} className="form-input">
                      <option value="">Select a range</option>
                      {budgetOptions.map((b) => <option key={b} value={b}>{b}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Target Timeline</label>
                    <select name="timeline" value={form.timeline} onChange={handleChange} className="form-input">
                      <option value="">Select a timeline</option>
                      {timelineOptions.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Additional Context</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Tell us about the problem you're solving, your users, and any tools you already use..." className="form-input resize-none" />
                </div>

                <button type="submit" disabled={sending} className="w-full btn-primary" style={{ minHeight: '52px' }}>
                  {sending ? (
                    <>
                      <span style={{ width: '16px', height: '16px', border: '2px solid rgba(255,255,255,0.4)', borderTopColor: '#fff', borderRadius: '50%', display: 'inline-block', animation: 'spin 0.8s linear infinite' }} />
                      Sending your brief...
                    </>
                  ) : (
                    <>Send project brief <Send size={16} /></>
                  )}
                </button>

                <p style={{ textAlign: 'center', fontSize: '12px', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  No sales calls without permission. No spam. Just a direct response about whether we can help.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
