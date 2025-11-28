import { Palette, Layers, Monitor, Aperture, Type, Box } from 'lucide-react';
import { Project, Service, TeamMember, NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { name: 'Work', href: '#work' },
  { name: 'Services', href: '#services' },
  { name: 'Team', href: '#team' },
  { name: 'Contact', href: '#contact' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Neon Horizon",
    category: "Brand Identity",
    image: "https://picsum.photos/id/20/800/600",
    size: 'large',
  },
  {
    id: 2,
    title: "Urban Echo",
    category: "Photography Direction",
    image: "https://picsum.photos/id/48/600/800",
    size: 'tall',
  },
  {
    id: 3,
    title: "Vertex Logic",
    category: "UI/UX Design",
    image: "https://picsum.photos/id/180/600/600",
    size: 'small',
  },
  {
    id: 4,
    title: "Prism Flow",
    category: "Motion Graphics",
    image: "https://picsum.photos/id/227/600/600",
    size: 'small',
  },
  {
    id: 5,
    title: "Monolith",
    category: "Packaging",
    image: "https://picsum.photos/id/364/800/600",
    size: 'large',
  },
];

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "Brand Identity",
    description: "We craft distinct visual identities that resonate with audiences and stand the test of time.",
    icon: Palette,
  },
  {
    id: 2,
    title: "Digital Design",
    description: "Websites, apps, and digital interfaces designed with user experience at the core.",
    icon: Monitor,
  },
  {
    id: 3,
    title: "Motion & 3D",
    description: "Bringing brands to life through fluid animation and immersive 3D environments.",
    icon: Layers,
  },
  {
    id: 4,
    title: "Art Direction",
    description: "Guiding the visual language of campaigns, photo shoots, and creative projects.",
    icon: Aperture,
  },
];

export const TEAM: TeamMember[] = [
  {
    id: 1,
    name: "Alex V.",
    role: "Creative Director",
    image: "https://picsum.photos/id/1005/400/400",
  },
  {
    id: 2,
    name: "Sarah J.",
    role: "Lead Designer",
    image: "https://picsum.photos/id/338/400/400",
  },
  {
    id: 3,
    name: "Marcus T.",
    role: "Motion Specialist",
    image: "https://picsum.photos/id/1011/400/400",
  },
  {
    id: 4,
    name: "Elena R.",
    role: "UX Engineer",
    image: "https://picsum.photos/id/64/400/400",
  },
];
