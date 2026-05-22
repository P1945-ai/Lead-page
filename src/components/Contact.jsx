import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MessageSquare, CheckCircle2, Zap } from 'lucide-react';

const budgetOptions = [
  'Under $5,000',
  '$5,000 – $15,000',
  '$15,000 – $30,000',
  '$30,000 – $60,000',
  '$60,000+',
  'Open to Discussion',
];

const timelineOptions = [
  'ASAP / Rush',
  '1 – 2 Months',
  '2 – 4 Months',
  '4 – 6 Months',
  '6+ Months',
  'Not Sure Yet',
];

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'hello@revenueengine.ltd', href: 'mailto:hello@revenueengine.ltd' },
  { icon: Phone, label: 'Phone', value: 'By Appointment', href: '#' },
  { icon: MessageSquare, label: 'Response Time', value: 'Within 24 Hours', href: '#' },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '',
    project: '', budget: '', timeline: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSending(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/15 to-transparent pointer-events-none" />

      {/* Orbs */}
      <div className="orb w-96 h-96 bg-blue-700 -bottom-24 -right-24 opacity-10" />
      <div className="orb w-80 h-80 bg-violet-700 top-0 -left-20 opacity-8" />

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
            Tell us what you want to build. We'll review your request and follow up within 24
            hours with our initial thoughts.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Left info panel */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Company card */}
            <div className="glass-card p-6 border border-white/[0.07]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center">
                  <Zap className="text-white" size={18} />
                </div>
                <div>
                  <div className="text-white font-bold text-sm">Revenue Engine Limited</div>
                  <div className="text-slate-500 text-xs">AI-Powered Digital Systems</div>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                We work with businesses, startups, and investors to design and build AI-powered
                digital platforms, tools, and systems that generate real results.
              </p>
            </div>

            {/* Contact details */}
            <div className="space-y-3">
              {contactInfo.map((info, i) => {
                const Icon = info.icon;
                return (
                  <a
                    key={i}
                    href={info.href}
                    className="glass-card-hover flex items-center gap-4 p-4 group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:border-blue-500/40 transition-colors">
                      <Icon className="text-blue-400" size={16} />
                    </div>
                    <div>
                      <div className="text-slate-500 text-xs font-medium">{info.label}</div>
                      <div className="text-white text-sm font-medium">{info.value}</div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* What to expect */}
            <div className="glass-card p-5 border border-white/[0.07]">
              <div className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-3">What Happens Next</div>
              <div className="space-y-2.5">
                {[
                  'We review your submission within 24 hours',
                  'We send an initial response with questions and thoughts',
                  'We schedule a discovery call if there\'s a fit',
                  'We provide a project outline and estimate',
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm text-slate-400">
                    <span className="text-xs font-bold text-blue-500 w-4 flex-shrink-0 mt-0.5">{i + 1}.</span>
                    {step}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="glass-card border border-emerald-500/20 p-12 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                  className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle2 className="text-emerald-400" size={32} />
                </motion.div>
                <h3 className="text-white text-2xl font-bold mb-2">Message Received</h3>
                <p className="text-slate-400 text-sm leading-relaxed max-w-sm mx-auto">
                  Thank you for reaching out. We'll review your project request and get back to you
                  within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass-card border border-white/[0.07] p-6 sm:p-8 space-y-5"
              >
                {/* Row 1: Name + Company */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5">
                      Full Name <span className="text-blue-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5">
                      Company / Organisation
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Company name (optional)"
                      className="form-input"
                    />
                  </div>
                </div>

                {/* Row 2: Email + Phone */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5">
                      Email Address <span className="text-blue-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5">Phone Number</label>
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

                {/* Project description */}
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">
                    What Do You Want to Build? <span className="text-blue-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="project"
                    value={form.project}
                    onChange={handleChange}
                    required
                    placeholder="Brief description of your project or idea"
                    className="form-input"
                  />
                </div>

                {/* Budget + Timeline */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5">Budget Range</label>
                    <select
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      className="form-input"
                    >
                      <option value="" className="bg-navy-900 text-slate-400">Select budget range</option>
                      {budgetOptions.map((b) => (
                        <option key={b} value={b} className="bg-navy-900">{b}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5">Timeline</label>
                    <select
                      name="timeline"
                      value={form.timeline}
                      onChange={handleChange}
                      className="form-input"
                    >
                      <option value="" className="bg-navy-900 text-slate-400">Select timeline</option>
                      {timelineOptions.map((t) => (
                        <option key={t} value={t} className="bg-navy-900">{t}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">Additional Details</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us more about your goals, challenges, or any specific requirements..."
                    className="form-input resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full btn-primary justify-center py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {sending ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Start a Project Conversation
                      <Send size={16} />
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-slate-600">
                  No spam. No sales calls without your permission. Just a real conversation.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
