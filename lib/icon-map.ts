import type { LucideIcon } from 'lucide-react';
import {
  Scale,
  Landmark,
  BarChart3,
  Briefcase,
  GraduationCap,
  Globe2,
  Building2,
  Users,
  Monitor,
  Car,
  Wifi,
  MapPin,
} from 'lucide-react';
import type { IconName } from '@/sanity/icon-field';

export const iconMap: Record<IconName, LucideIcon> = {
  scale: Scale,
  landmark: Landmark,
  barChart3: BarChart3,
  briefcase: Briefcase,
  graduationCap: GraduationCap,
  globe2: Globe2,
  building2: Building2,
  users: Users,
  monitor: Monitor,
  car: Car,
  wifi: Wifi,
  mapPin: MapPin,
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name as IconName] ?? Briefcase;
}
