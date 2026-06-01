import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

/**
 * Dual CTA used across service + case-study pages.
 * Primary scrolls to the home contact section; secondary to the voice demo.
 * Works from any route (navigates home first when needed).
 */
export function useGoToSection() {
  const navigate = useNavigate();
  const location = useLocation();
  return (id) => {
    if (location.pathname !== '/') navigate('/', { state: { scrollTo: id } });
    else document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
}

export default function CTAButtons({
  primaryLabel = 'Book a call',
  secondaryLabel = 'Talk to Ella',
  primarySection = 'contact',
  secondarySection = 'voice-demo',
  center = false,
}) {
  const go = useGoToSection();
  return (
    <div className={`flex flex-col sm:flex-row gap-3 ${center ? 'justify-center' : ''}`}>
      <button onClick={() => go(primarySection)} className="btn-primary">
        {primaryLabel}
        <ArrowRight size={16} />
      </button>
      {secondaryLabel && (
        <button onClick={() => go(secondarySection)} className="btn-secondary">
          {secondaryLabel}
        </button>
      )}
    </div>
  );
}
