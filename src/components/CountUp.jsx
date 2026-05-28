import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

export default function CountUp({
  to,
  duration = 1800,
  decimals = 0,
  prefix = '',
  suffix = '',
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const start = performance.now();

    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      // Quartic ease-out for snappy finish
      const eased = 1 - Math.pow(1 - t, 4);
      setVal(+(eased * to).toFixed(decimals));
      if (t < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [isInView, to, duration, decimals]);

  return (
    <span ref={ref}>
      {prefix}
      {val.toLocaleString()}
      {suffix}
    </span>
  );
}
