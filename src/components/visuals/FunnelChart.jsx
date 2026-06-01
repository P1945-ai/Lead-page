import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { FunnelChart as ReFunnel, Funnel, LabelList, ResponsiveContainer, Tooltip, Cell } from 'recharts';

/**
 * FunnelChart — conversion funnel in brand colors, animates on scroll.
 * Props:
 *  - stages: [{ name, value }]
 *  - colors: optional color array
 */
const DEFAULT_COLORS = ['#FF4F00', '#FF7A3C', '#5B6CFF', '#7E8BFF', '#10B981'];

export default function FunnelChart({
  stages = [
    { name: 'Leads captured', value: 1000 },
    { name: 'Contacted', value: 720 },
    { name: 'Qualified', value: 410 },
    { name: 'Booked', value: 240 },
    { name: 'Closed', value: 138 },
  ],
  colors = DEFAULT_COLORS,
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const data = stages.map((s, i) => ({ ...s, fill: colors[i % colors.length] }));

  return (
    <div ref={ref} style={{ width: '100%', height: '320px' }}>
      {inView && (
        <ResponsiveContainer width="100%" height="100%">
          <ReFunnel>
            <Tooltip
              contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '8px', fontSize: '12px' }}
              formatter={(v, n, p) => [`${v.toLocaleString('en-CA')}`, p?.payload?.name]}
            />
            <Funnel dataKey="value" data={data} isAnimationActive animationDuration={900}>
              <LabelList
                position="right"
                dataKey="name"
                stroke="none"
                fill="var(--text-primary)"
                style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 600 }}
              />
              <LabelList
                position="center"
                dataKey="value"
                stroke="none"
                fill="#fff"
                style={{ fontFamily: '"Geist Mono Variable", monospace', fontSize: '13px' }}
                formatter={(v) => v.toLocaleString('en-CA')}
              />
              {data.map((d, i) => <Cell key={i} fill={d.fill} />)}
            </Funnel>
          </ReFunnel>
        </ResponsiveContainer>
      )}
    </div>
  );
}
