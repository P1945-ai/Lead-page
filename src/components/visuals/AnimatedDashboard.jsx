import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { LineChart, Line, ResponsiveContainer, Tooltip, YAxis, CartesianGrid } from 'recharts';
import { TrendingUp, Bell, Users, Zap } from 'lucide-react';

/**
 * AnimatedDashboard — a live-feeling mock CRM panel built entirely in React.
 * No screenshots. Metrics tick, a line chart animates, and fake new-lead
 * notifications slide in on a timer.
 *
 * Props:
 *  - title: panel title
 *  - metrics: [{ label, value, suffix, prefix, icon }]
 *  - notifications: string[] (cycled)
 *  - accent: line/accent color
 */
const DEFAULT_METRICS = [
  { label: 'Leads This Week', value: 128, icon: 'users' },
  { label: 'Conversion Rate', value: 18.6, suffix: '%', icon: 'trend' },
  { label: 'Avg Response', value: 12, suffix: 's', icon: 'zap' },
];

const DEFAULT_NOTIFS = [
  'New lead — Sarah M. · Kitchen repaint',
  'Booking confirmed — Dave R. · Tue 2pm',
  '5-star review posted — Priya K.',
  'Referral booked — +$50 reward',
  'Win-back reply — client re-engaged',
];

const seedData = () =>
  Array.from({ length: 12 }, (_, i) => ({ x: i, v: 40 + Math.round(Math.sin(i / 1.6) * 16 + i * 3 + Math.random() * 8) }));

const ICONS = { users: Users, trend: TrendingUp, zap: Zap };

export default function AnimatedDashboard({
  title = 'Revenue Engine · Live',
  metrics = DEFAULT_METRICS,
  notifications = DEFAULT_NOTIFS,
  accent = 'var(--accent)',
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: '-40px' });
  const [data, setData] = useState(seedData);
  const [ticked, setTicked] = useState(metrics.map((m) => m.value));
  const [notifIdx, setNotifIdx] = useState(0);

  // Tick the chart + metrics while in view.
  useEffect(() => {
    if (!inView) return;
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    const id = setInterval(() => {
      setData((d) => {
        const next = d.slice(1);
        const last = d[d.length - 1].v;
        next.push({ x: d[d.length - 1].x + 1, v: Math.max(20, Math.min(120, last + Math.round((Math.random() - 0.4) * 14))) });
        return next;
      });
      setTicked((t) => t.map((v, i) => {
        const base = metrics[i].value;
        const jitter = (Math.random() - 0.5) * (base > 50 ? 2 : 0.4);
        return Math.max(0, +(v + jitter).toFixed(metrics[i].suffix === '%' ? 1 : 0));
      }));
    }, 2200);
    return () => clearInterval(id);
  }, [inView, metrics]);

  // Cycle notifications.
  useEffect(() => {
    if (!inView) return;
    const id = setInterval(() => setNotifIdx((i) => (i + 1) % notifications.length), 2600);
    return () => clearInterval(id);
  }, [inView, notifications.length]);

  return (
    <div
      ref={ref}
      style={{
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: '8px',
        boxShadow: 'var(--shadow-lg)',
        overflow: 'hidden',
        width: '100%',
      }}
    >
      {/* title bar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 16px', borderBottom: '1px solid var(--border)', background: 'var(--surface-warm)' }}>
        <span style={{ display: 'flex', gap: '5px' }}>
          {['#FF5F56', '#FFBD2E', '#27C93F'].map((c) => (
            <span key={c} style={{ width: '9px', height: '9px', borderRadius: '50%', background: c }} />
          ))}
        </span>
        <span style={{ fontFamily: '"Geist Mono Variable", monospace', fontSize: '12px', color: 'var(--text-muted)', letterSpacing: '0.04em' }}>
          {title}
        </span>
        <span style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '5px', fontSize: '11px', color: 'var(--success)', fontFamily: '"Geist Mono Variable", monospace' }}>
          <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--success)', boxShadow: '0 0 0 3px rgba(16,185,129,0.18)' }} />
          LIVE
        </span>
      </div>

      <div style={{ padding: '18px' }}>
        {/* metric cards */}
        <div className="grid grid-cols-3 gap-3" style={{ marginBottom: '16px' }}>
          {metrics.map((m, i) => {
            const Icon = ICONS[m.icon] || Users;
            const val = ticked[i];
            return (
              <div key={m.label} style={{ background: 'var(--surface-warm)', borderRadius: '8px', padding: '14px' }}>
                <Icon size={15} style={{ color: accent, marginBottom: '8px' }} />
                <div style={{ fontFamily: '"Geist Variable", sans-serif', fontWeight: 700, fontSize: 'clamp(18px,2.4vw,24px)', color: 'var(--text-primary)', letterSpacing: '-0.01em' }}>
                  {m.prefix || ''}{typeof val === 'number' ? val.toLocaleString('en-CA') : val}{m.suffix || ''}
                </div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '2px' }}>{m.label}</div>
              </div>
            );
          })}
        </div>

        {/* chart */}
        <div style={{ height: '140px', marginBottom: '14px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 6, right: 6, bottom: 0, left: 0 }}>
              <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" vertical={false} />
              <YAxis hide domain={[0, 130]} />
              <Tooltip
                contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '8px', fontSize: '12px' }}
                labelFormatter={() => ''}
                formatter={(v) => [`${v} leads`, '']}
              />
              <Line type="monotone" dataKey="v" stroke={accent} strokeWidth={2.5} dot={false} isAnimationActive />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* sliding notification */}
        <div style={{ height: '46px', position: 'relative' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={notifIdx}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.35 }}
              style={{
                position: 'absolute', inset: 0,
                display: 'flex', alignItems: 'center', gap: '10px',
                background: `color-mix(in srgb, ${accent} 8%, var(--surface))`,
                border: `1px solid color-mix(in srgb, ${accent} 25%, transparent)`,
                borderRadius: '8px', padding: '0 14px',
              }}
            >
              <Bell size={14} style={{ color: accent, flexShrink: 0 }} />
              <span style={{ fontSize: '13px', color: 'var(--text-primary)', fontWeight: 500 }}>
                {notifications[notifIdx]}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
