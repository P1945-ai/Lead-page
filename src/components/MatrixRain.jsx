import { useEffect, useRef } from 'react';

const CHARS =
  'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホ0123456789ABCDEF<>{}[]/|\\ΔΩΣ░▒▓';

export default function MatrixRain() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const FONT = 14;
    let drops = [];
    let rafId;
    let lastTs = 0;

    const init = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      const cols = Math.ceil(canvas.width / FONT);
      drops = Array.from({ length: cols }, () =>
        Math.floor(Math.random() * -(canvas.height / FONT))
      );
    };

    init();
    const ro = new ResizeObserver(init);
    ro.observe(canvas);

    const draw = (ts) => {
      rafId = requestAnimationFrame(draw);
      if (ts - lastTs < 55) return; // ~18 fps
      lastTs = ts;

      // Fade trail — low alpha = longer tail
      ctx.fillStyle = 'rgba(6, 6, 15, 0.07)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${FONT}px "Courier New", monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)];
        const x = i * FONT;
        const y = drops[i] * FONT;

        const rnd = Math.random();
        if (rnd > 0.97) {
          // Bright head — near-white with cyan glow
          ctx.shadowColor = 'rgba(6, 182, 212, 0.9)';
          ctx.shadowBlur = 10;
          ctx.fillStyle = 'rgba(224, 242, 254, 0.95)';
        } else if (rnd > 0.85) {
          // Mid-brightness cyan
          ctx.shadowBlur = 0;
          ctx.fillStyle = `rgba(6, 182, 212, ${0.35 + Math.random() * 0.35})`;
        } else {
          // Standard blue trail
          ctx.shadowBlur = 0;
          ctx.fillStyle = `rgba(59, 130, 246, ${0.08 + Math.random() * 0.2})`;
        }

        ctx.fillText(char, x, y);

        // Reset column when it falls off the bottom
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = Math.floor(Math.random() * -25);
        }
        drops[i]++;
      }

      ctx.shadowBlur = 0;
    };

    rafId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none select-none"
      style={{ opacity: 0.32, mixBlendMode: 'screen' }}
      aria-hidden="true"
    />
  );
}
