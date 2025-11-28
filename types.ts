import { LucideIcon } from 'lucide-react';

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  size: 'small' | 'large' | 'tall';
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

export interface NavLink {
  name: string;
  href: string;
}