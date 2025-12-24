
import { CVData } from '../types';

export const cvData: CVData = {
  name: "Jesús Daniel Díaz Pérez",
  headline: "Software Engineer & Game Developer",
  location: "Mérida, Venezuela",
  email: "jesusdiaz.developer@gmail.com",
  social_networks: [
    { network: "LinkedIn", username: "jdanieldp99", url: "https://www.linkedin.com/in/jdanieldp99/" },
    { network: "GitHub", username: "Trysdan", url: "https://github.com/Trysdan" }
  ],
  custom_connections: [
    { fontawesome_icon: "behance", placeholder: "jessddazp", url: "https://www.behance.net/jessddazp" },
    { fontawesome_icon: "discord", placeholder: "jesus.vzla", url: "https://discord.com/" }
  ],
  professional_summary: [
    "Ingeniero de Sistemas en formación con pasión por la arquitectura de software y el desarrollo interactivo.",
    "Experto en programación (C++, C#, Python), desarrollo de videojuegos con Unity3D, soporte técnico y diseño multimedia."
  ],
  experience: [
    {
      company: "Dazlab",
      position: "Desarrollador de Videojuegos",
      location: "Remoto",
      start_date: "Dic 2024",
      end_date: "Jun 2025",
      highlights: [
        "Herramientas: Unity3D, C#, Git",
        "Desarrollo de sistemas modulares y mecánicas de juego.",
        "Redacción de documentación técnica (GDD)."
      ]
    },
    {
      company: "Universidad de Los Andes (ULA)",
      position: "Asistente Académico – Programación I & II",
      location: "Mérida, Venezuela",
      start_date: "Ene 2025",
      end_date: "Presente",
      highlights: [
        "Impartición de clases teóricas y prácticas de programación."
      ]
    },
    {
      company: "Freelance",
      position: "Especialista en Soporte IT",
      location: "Mérida, Venezuela",
      start_date: "Ene 2018",
      end_date: "Presente",
      highlights: [
        "Resolución de problemas de hardware/software y configuración de redes LAN/Wi-Fi."
      ]
    },
    {
      company: "Freelance",
      position: "Creador de Contenido Digital",
      location: "Remoto",
      start_date: "Dic 2022",
      end_date: "Presente",
      highlights: [
        "Herramientas: Photoshop, Illustrator, CapCut",
        "Producción de material visual y videos para redes sociales.",
        "Portafolio: https://www.behance.net/gallery/183360679/Social-Media-Fitness"
      ]
    }
  ],
  education: [
    {
      institution: "Universidad de Los Andes",
      area: "Ingeniería de Sistemas",
      degree: "Licenciatura (en curso)",
      location: "Mérida, Venezuela",
      start_date: "Jun 2024",
      end_date: "Presente"
    },
    {
      institution: "UPTM Núcleo Bailadores",
      area: "Ingeniería Informática (PNF)",
      degree: "TSU",
      location: "Mérida, Venezuela",
      start_date: "Ene 2018",
      end_date: "Ene 2021"
    }
  ],
  skills: [
    { label: "Lenguajes de Programación", details: "C, C++, C#, Python, Lua" },
    { label: "Herramientas", details: "Unity3D, SFML, Love2D, PyGame, Git, GitHub, JSON, Excel, Photoshop, CapCut" },
    { label: "Habilidades Blandas", details: "Comunicación, empatía, adaptabilidad, trabajo en equipo" }
  ]
};
