/**
 * ServiceIcon — custom monoline geometric SVG icons, one per service.
 * Brand-colored, not Lucide defaults.
 *
 * Props:
 *  - name: 'voice' | 'followup' | 'referral' | 'winback' | 'custom' | 'video'
 *  - size: px
 *  - color: stroke color
 */
const paths = {
  // Voice agent — concentric speech / sound
  voice: (
    <>
      <circle cx="24" cy="24" r="6" />
      <path d="M14 24a10 10 0 0 1 20 0" />
      <path d="M9 24a15 15 0 0 1 30 0" />
      <line x1="24" y1="30" x2="24" y2="40" />
    </>
  ),
  // Follow-up — looping arrow cycle
  followup: (
    <>
      <path d="M14 18a12 12 0 1 1-2.5 12" />
      <polyline points="14 10 14 18 22 18" />
      <circle cx="31" cy="31" r="2.5" fill="currentColor" stroke="none" />
    </>
  ),
  // Referral — connected nodes
  referral: (
    <>
      <circle cx="14" cy="24" r="4" />
      <circle cx="34" cy="14" r="4" />
      <circle cx="34" cy="34" r="4" />
      <line x1="17.5" y1="22" x2="30.5" y2="15.5" />
      <line x1="17.5" y1="26" x2="30.5" y2="32.5" />
    </>
  ),
  // Win-back — reverse arrow into circle
  winback: (
    <>
      <circle cx="24" cy="24" r="13" />
      <polyline points="24 17 19 24 24 31" />
      <line x1="19" y1="24" x2="32" y2="24" />
    </>
  ),
  // Custom builds — stacked layers / brackets
  custom: (
    <>
      <polyline points="18 16 10 24 18 32" />
      <polyline points="30 16 38 24 30 32" />
      <line x1="26" y1="13" x2="22" y2="35" />
    </>
  ),
  // Video — play in frame
  video: (
    <>
      <rect x="9" y="13" width="30" height="22" rx="3" />
      <polygon points="21 20 30 24 21 28" fill="currentColor" stroke="none" />
    </>
  ),
};

export default function ServiceIcon({ name, size = 40, color = 'var(--accent)' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name] || paths.custom}
    </svg>
  );
}
