import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Clock, CheckCircle2, Zap, ArrowRight, MessageSquare } from 'lucide-react';

const budgetOptions = [
  'Under $5,000',
  '$5,000 – $15,000',
  '$15,000 – $30,000',
  '$30,000 – $60,000',
  '$60,000 – $100,000',
  '$100,000+',
  'Open to Discussion',
];

const timelineOptions = [
  'ASAP (within 2 weeks)',
  '1 – 2 Months',
  '2 – 4 Months',
  '4 – 6 Months',
  '6+ Months',
  "Not Sure Yet — Let's Talk",
];

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@revenueengine.ltd',
    href: 'mailto:hello@revenueengine.ltd',
    detail: 'Best for detailed briefs',
  },
  {
    icon: Clock,
    label: 'Response Time',
    value: 'Within 24 Hours',
    href: null,
    detail: 'Mon – Fri',
  },
  {
    icon: MessageSquare,
    label: 'Discovery Call',
    value: 'Scheduled After Intake',
    href: null,
    detail: 'No commitment required',
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '',
    project: '', budget: '', timeline: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1400));
    setSending(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/25 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/[0.12] to-transparent pointer-events-none" />
      <div className="orb w-80 h-80 bg-blue-700 -bottom-20 -right-20 opacity-[0.09]" />
      <div className="orb w-72 h-72 bg-violet-700 top-10 -left-16 opacity-[0.07]" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <div className="section-label">Get In Touch</div>
          <h2 className="section-title">
            Start a Project <span className="gradient-text">Conversation</span>
          </h2>
          <p className="section-subtitle">
            Tell us what you're trying to build or solve. We'll review your brief and respond
            within 24 hours with our honest initial thoughts — no sales pitch, no obligation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-10 items-start">

          {/* Left panel */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            {/* Studio card */}
            <div className="glass-card p-5 sm:p-6 border border-white/[0.07]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center flex-shrink-0">
                  <Zap className="text-white" size={18} />
                </div>
                <div>
                  <div className="text-white font-bold text-sm">Revenue Engine Limited</div>
                  <div className="text-slate-500 text-xs">AI Systems & Digital Growth Studio</div>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                We partner with businesses, founders, and investors to build AI-powered platforms,
                automation systems, and growth tools that generate measurable results from day one.
              </p>
            </div>

            {/* Contact details */}
            <div className="space-y-2">
              {contactInfo.map((info, i) => {
                const Icon = info.icon;
                const Wrapper = info.href ? 'a' : 'div';
                return (
                  <Wrapper
                    key={i}
                    {...(info.href ? { href: info.href } : {})}
                    className="glass-card-hover flex items-center gap-4 p-4 group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:border-blue-500/40 transition-colors">
                      <Icon className="text-blue-400" size={15} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-slate-500 text-[11px] font-medium">{info.label}</div>
                      <div className="text-white text-sm font-medium truncate">{info.value}</div>
                      {info.detail && (
                        <div className="text-slate-600 text-[11px]">{info.detail}</div>
                      )}
                    </div>
                  </Wrapper>
                );
              })}
            </div>

            {/* What happens next */}
            <div className="glass-card p-5 border border-white/[0.07]">
              <div className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                <ArrowRight size={12} className="text-blue-400" />
                What Happens After You Submit
              </div>
              <ol className="space-y-3">
                {[
                  'We review your brief and assess the build scope',
                  'We respond with initial thoughts within 24 hours',
                  'We schedule a discovery call if there\'s a real fit',
                  'We provide a scoped outline and project estimate',
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-blue-500/15 border border-blue-500/25 text-[10px] font-bold text-blue-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-sm text-slate-400 leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card border border-emerald-500/20 p-8 sm:p-12 text-center bg-emerald-950/10"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 220, damping: 16, delay: 0.1 }}
                  className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle2 className="text-emerald-400" size={30} />
                </motion.div>
                <h3 className="text-white text-2xl font-bold mb-2">Brief Received</h3>
                <p className="text-slate-400 text-sm leading-relaxed max-w-sm mx-auto mb-8">
                  We've got your submission and will review it within 24 hours. Expect a
                  thoughtful, direct response — not a template.
                </p>
                <div className="grid grid-cols-2 gap-3 max-w-xs mx-auto">
                  {[
                    { label: '24h', sub: 'Response time' },
                    { label: 'Direct', sub: 'Honest feedback' },
                  ].map((m, i) => (
                    <div key={i} className="glass-card p-3 border border-white/[0.06]">
                      <div className="text-lg font-black gradient-text">{m.label}</div>
                      <div className="text-xs text-slate-500">{m.sub}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass-card border border-white/[0.07] p-5 sm:p-7 space-y-4 sm:space-y-5"
              >
                {/* Name + Company */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-1.5">
                      Full Name <span className="text-blue-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Alex Johnson"
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-1.5">
                      Company / Project Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="e.g. Apex Services Ltd"
                      className="form-input"
                    />
                  </div>
                </div>

                {/* Email + Phone */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-1.5">
                      Email Address <span className="text-blue-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="you@company.com"
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-1.5">
                      Phone (optional)
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="form-input"
                    />
                  </div>
                </div>

                {/* Project */}
                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-1.5">
                    What Do You Want to Build? <span className="text-blue-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="project"
                    value={form.project}
                    onChange={handleChange}
                    required
                    placeholder='e.g. "Lead funnel + CRM for my plumbing business" or "AI chatbot for client onboarding"'
                    className="form-input"
                  />
                </div>

                {/* Budget + Timeline */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-1.5">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      className="form-input"
                    >
                      <option value="">Select a range</option>
                      {budgetOptions.map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-1.5">
                      Target Timeline
                    </label>
                    <select
                      name="timeline"
                      value={form.timeline}
                      onChange={handleChange}
                      className="form-input"
                    >
                      <option value="">Select a timeline</option>
                      {timelineOptions.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-1.5">
                    Additional Context
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about the problem you're trying to solve, your target users, any existing tools you use, or anything that would help us understand the scope..."
                    className="form-input resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full btn-primary py-4 text-base min-h-[52px] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                  {sending ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending your brief...
                    </>
                  ) : (
                    <>
                      Send Project Brief
                      <Send size={16} />
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-slate-600 leading-relaxed">
                  No sales calls without permission. No spam. Just a direct response about whether
                  we can help.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
