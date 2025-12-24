
export interface SocialNetwork {
  network: string;
  username: string;
  url: string;
}

export interface CustomConnection {
  fontawesome_icon: string;
  placeholder: string;
  url: string;
}

export interface Project {
  title: string;
  description: { en: string; es: string };
  tags: string[];
  github_url?: string;
  live_url?: string;
  category: 'Game' | 'Software' | 'Tool';
}

export interface Experience {
  company: string;
  position: string | { en: string; es: string };
  location: string;
  start_date: string;
  end_date: string | { en: string; es: string };
  highlights: string[] | { en: string[]; es: string[] };
}

export interface Education {
  institution: string;
  area: string | { en: string; es: string };
  degree: string | { en: string; es: string };
  location: string;
  start_date: string;
  end_date: string | { en: string; es: string };
}

export interface Skill {
  label: { en: string; es: string };
  details: string;
}

export interface CVData {
  name: string;
  headline: { en: string; es: string };
  location: string;
  email: string;
  social_networks: SocialNetwork[];
  custom_connections: CustomConnection[];
  professional_summary: { en: string[]; es: string[] };
  experience: Experience[];
  education: Education[];
  skills: Skill[];
  projects: Project[];
}

export enum CareerPath {
  GAME_DEV = 'GAME_DEV',
  BACKEND = 'BACKEND',
  DESIGN = 'DESIGN',
  EDITING = 'EDITING'
}
