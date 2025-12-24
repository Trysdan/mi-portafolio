
import { CVData } from '../types';

export const cvData: CVData = {
  name: "Jesús Daniel Díaz Pérez",
  headline: {
    en: "Software Engineer & Game Developer",
    es: "Ingeniero de Software y Desarrollador de Videojuegos"
  },
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
  professional_summary: {
    en: [
      "Systems Engineering student with a passion for software architecture and interactive development.",
      "Expert in programming (C++, C#, Python), game development with Unity3D, technical support, and multimedia design."
    ],
    es: [
      "Ingeniero de Sistemas en formación con pasión por la arquitectura de software y el desarrollo interactivo.",
      "Experto en programación (C++, C#, Python), desarrollo de videojuegos con Unity3D, soporte técnico y diseño multimedia."
    ]
  },
  experience: [
    {
      company: "Dazlab",
      position: { en: "Game Developer", es: "Desarrollador de Videojuegos" },
      location: "Remote",
      start_date: "Dec 2024",
      end_date: { en: "Jun 2025", es: "Jun 2025" },
      highlights: {
        en: [
          "Tools: Unity3D, C#, Git",
          "Development of modular systems and gameplay mechanics.",
          "Technical documentation writing (GDD)."
        ],
        es: [
          "Herramientas: Unity3D, C#, Git",
          "Desarrollo de sistemas modulares y mecánicas de juego.",
          "Redacción de documentación técnica (GDD)."
        ]
      }
    },
    {
      company: "Universidad de Los Andes (ULA)",
      position: { en: "Academic Assistant – Programming I & II", es: "Asistente Académico – Programación I & II" },
      location: "Mérida, Venezuela",
      start_date: "Jan 2025",
      end_date: { en: "Present", es: "Presente" },
      highlights: {
        en: ["Theoretical and practical programming classes teaching."],
        es: ["Impartición de clases teóricas y prácticas de programación."]
      }
    },
    {
      company: "Freelance",
      position: { en: "Social Media Designer & Content Creator", es: "Diseñador para Redes Sociales y Creador de Contenido" },
      location: "Mérida, Venezuela",
      start_date: "Jun 2019",
      end_date: { en: "Present", es: "Presente" },
      highlights: {
        en: [
          "Visual identity and branding design for various commercial brands.",
          "Production and editing of short-form video content (Reels/TikTok) using CapCut and Premiere.",
          "Social media ad design and engagement-focused visual storytelling."
        ],
        es: [
          "Diseño de identidad visual y branding para diversas marcas comerciales.",
          "Producción y edición de contenido en video de formato corto (Reels/TikTok) con CapCut y Premiere.",
          "Diseño de publicidad para redes sociales y storytelling visual enfocado en el engagement."
        ]
      }
    },
    {
      company: "Freelance",
      position: { en: "IT Support Specialist", es: "Especialista en Soporte IT" },
      location: "Mérida, Venezuela",
      start_date: "Jan 2018",
      end_date: { en: "Present", es: "Presente" },
      highlights: {
        en: ["Hardware/software troubleshooting and LAN/Wi-Fi network configuration."],
        es: ["Resolución de problemas de hardware/software y configuración de redes LAN/Wi-Fi."]
      }
    }
  ],
  projects: [
    {
      title: "Modular Gameplay System",
      category: "Game",
      description: {
        en: "A C# architectural pattern for Unity3D that allows rapid prototyping of RPG abilities using scriptable objects.",
        es: "Un patrón de arquitectura en C# para Unity3D que permite el prototipado rápido de habilidades RPG usando scriptable objects."
      },
      tags: ["Unity3D", "C#", "Software Architecture"],
      github_url: "https://github.com/Trysdan"
    },
    {
      title: "Network Diagnostics Tool",
      category: "Tool",
      description: {
        en: "Automation script built in Python for scanning and reporting LAN network vulnerabilities and performance bottlenecks.",
        es: "Script de automatización en Python para escanear e informar vulnerabilidades de red LAN y cuellos de botella."
      },
      tags: ["Python", "Networking", "Automation"],
      github_url: "https://github.com/Trysdan"
    }
  ],
  education: [
    {
      institution: "Universidad de Los Andes",
      area: { en: "Systems Engineering", es: "Ingeniería de Sistemas" },
      degree: { en: "Bachelor's Degree (Ongoing)", es: "Licenciatura (en curso)" },
      location: "Mérida, Venezuela",
      start_date: "Jun 2024",
      end_date: { en: "Present", es: "Presente" }
    },
    {
      institution: "UPTM Núcleo Bailadores",
      area: { en: "Informatics Engineering (PNF)", es: "Ingeniería Informática (PNF)" },
      degree: { en: "Associate Degree (TSU)", es: "TSU" },
      location: "Mérida, Venezuela",
      start_date: "Jan 2018",
      end_date: "Jan 2021"
    }
  ],
  skills: [
    { 
      label: { en: "Programming Languages", es: "Lenguajes de Programación" }, 
      details: "C, C++, C#, Python, Lua" 
    },
    { 
      label: { en: "Tools", es: "Herramientas" }, 
      details: "Unity3D, SFML, Love2D, PyGame, Git, GitHub, JSON, Excel, Photoshop, CapCut" 
    },
    { 
      label: { en: "Soft Skills", es: "Habilidades Blandas" }, 
      details: "Communication, Empathy, Adaptability, Teamwork" 
    }
  ]
};
