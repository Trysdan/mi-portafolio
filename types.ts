
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

export interface Experience {
  company: string;
  position: string;
  location: string;
  start_date: string;
  end_date: string;
  highlights: string[];
}

export interface Education {
  institution: string;
  area: string;
  degree: string;
  location: string;
  start_date: string;
  end_date: string;
}

export interface Skill {
  label: string;
  details: string;
}

export interface CVData {
  name: string;
  headline: string;
  location: string;
  email: string;
  social_networks: SocialNetwork[];
  custom_connections: CustomConnection[];
  professional_summary: string[];
  experience: Experience[];
  education: Education[];
  skills: Skill[];
}

export enum CareerPath {
  GAME_DEV = 'Desarrollo de Videojuegos',
  BACKEND = 'Desarrollo Backend',
  DESIGN = 'Diseño Digital',
  EDITING = 'Edición de Contenido'
}
