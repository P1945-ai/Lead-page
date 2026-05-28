import {
  Zap,
  Target,
  Moon,
  Globe,
  Car,
  Palette,
  Plane,
  Sparkles,
  Layers,
  ShieldCheck,
  SlidersHorizontal,
  Navigation,
  Rocket,
  Bot,
} from 'lucide-react';

const ICON_MAP = {
  Zap,
  Target,
  Moon,
  Globe,
  Car,
  Palette,
  Plane,
  Sparkles,
  Layers,
  ShieldCheck,
  SlidersHorizontal,
  Navigation,
  Rocket,
  Bot,
};

export function ProjectIcon({ name, size = 28, className = 'text-white' }) {
  const Icon = ICON_MAP[name] || Zap;
  return <Icon size={size} className={className} />;
}
