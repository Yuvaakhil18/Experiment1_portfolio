/**
 * Personal portfolio content for the Zero University experience.
 *
 * This file is intentionally separate from the original minified runtime.
 * It is a content source for the future integration step; the runtime does
 * not read it yet.
 */
const portfolio = {
  identity: {
    displayName: "Yuvaakhil",
    headline: "Building Software That Turns Ideas Into Experiences",
    positioning:
      "Computer Science student and aspiring Software Development Engineer focused on creative interfaces, AI-assisted development, and interactive software experiences.",
    location: "Visakhapatnam, India",
    status: "Computer Science student",
  },

  about: {
    short:
      "I build AI-assisted applications, creative interfaces, and experimental software experiences while growing toward becoming a software development engineer.",
    extended:
      "I am a Computer Science student exploring how software can feel more human, visual, and interactive. My work spans creative portfolio interfaces, intelligent assistants, and experimental systems built through AI-assisted workflows, iteration, testing, and refinement.",
  },

  education: {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Raghu Engineering College",
    expectedGraduation: 2027,
    cgpa: 7.4,
    coursework: [
      "Data Structures and Algorithms",
      "Database Management Systems",
      "Operating Systems",
    ],
  },

  skills: {
    comfortable: [
      "HTML",
      "CSS",
      "Python",
      "Firebase",
      "Database concepts",
      "Git",
      "GitHub",
      "AI tools and APIs",
      "AI-assisted development",
      "AI systems",
    ],
    developing: ["JavaScript", "Docker"],
    learning: [
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "FastAPI",
      "PostgreSQL",
      "Semantic search",
      "Agentic workflows",
    ],
  },

  projects: [
    {
      name: "Akhil Personal OS",
      stage: 2,
      status: "live",
      url: "https://yuvaakhil18.github.io/akhil-personal-os/",
      summary:
        "A futuristic portfolio presented as an operating system, with dashboard navigation, themed environments, custom visuals, and a playable Snake game.",
      role:
        "Defined the concept, creative direction, interaction model, visual environment, and overall experience through an AI-assisted workflow.",
    },
    {
      name: "AssetBrain AI Assistant",
      stage: 2,
      status: "live",
      url: "https://assetbrain-ai-assistant-ubk5.vercel.app/",
      summary:
        "An AI-assisted operations and asset-reasoning system for organizing documents, relationships, and cited answers.",
      role:
        "Directed the product idea and used AI-assisted development, integration, testing, and refinement to create the working experience.",
    },
    {
      name: "Yunetra",
      stage: 2,
      status: "live",
      url: "https://yunetra-vision-that-unites-potentia.vercel.app/",
      summary:
        "A peer-to-peer learning exchange platform that helps students find people who can teach what they want to learn without monetary exchange.",
      role:
        "Team frontend developer responsible for responsive design, cursor interactions, camera movement, button animations, background animations, navigation, and interactive visual elements.",
    },
    {
      name: "Drift — Life Saver AI Assistant",
      stage: 2,
      status: "case-study",
      summary:
        "An autonomous scheduling and accountability assistant created for the Blocks2Block hackathon, exploring progress tracking, trajectory graphs, efficacy memory, and calendar-aware intervention.",
      role:
        "Independently developed with AI-assisted workflows; the most difficult areas were graph logic, memory control, and Google Calendar integration.",
    },
    {
      name: "Legal Intelligence",
      stage: 2,
      status: "in-progress",
      summary:
        "An in-progress AI-assisted platform for summarizing, explaining, and analyzing legal documents, with security and privacy safeguards still under development.",
      role:
        "Directed the product concept and AI-assisted implementation. It is not a substitute for legal advice.",
    },
    {
      name: "Redrob",
      stage: 2,
      status: "supporting",
      summary:
        "A résumé-ranking decision-support system created for the India.Runs Hackathon using a large dataset of approximately 100,000 résumé records.",
    },
    {
      name: "TerraTrace",
      stage: 2,
      status: "supporting",
      summary:
        "An AI-assisted carbon-footprint tracking and reduction project created for a Google Developers PromptWars challenge.",
    },
  ],

  experience: [
    {
      title: "Virtual Web Development Experience",
      organization: "ApexPlanet Software Pvt. Ltd.",
      period: "18 June 2026 – 17 August 2026",
      mode: "Virtual / online",
      summary:
        "Completed a project-based development program focused on HTML, CSS, JavaScript, assigned development tasks, and practical learning exercises.",
    },
  ],

  achievements: [
    "Top 100 in Google for Developers PromptWars Virtual, Challenge 3; user-reported result: 90th place.",
    "GEN-AI Camp by AlgoUniversity covering Generative AI, multimodal AI systems, and NLP.",
    "TCS iON Career Edge — Young Professional.",
    "Infosys Springboard — Basics of Python.",
    "IBM Web Development and Python certificates.",
    "Accenture Data Analytics and Visualization Job Simulation.",
    "Vibe2Ship hackathon participation with Google for Developers and BlockseBlock.",
  ],

  contact: {
    email: "yuvaakhil2318@gmail.com",
    github: "https://github.com/Yuvaakhil18",
    linkedin: "https://www.linkedin.com/in/c-yuva-akhil2318/",
    resume: {
      mode: "preview-only",
      path: "",
    },
    invitation:
      "Open to freelance work, collaboration, and conversations about creative software and AI-assisted development.",
  },
};

if (typeof module !== "undefined") {
  module.exports = portfolio;
}

