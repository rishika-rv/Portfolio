import {
  Brain,
  Code2,
  Database,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { config } from "./config";

export const PERSONAL_INFO = {
  name: config.personal.name,
  title: config.personal.title,
  tagline: config.personal.tagline,
  email: config.personal.email,
  github: config.socials.github,
  linkedin: config.socials.linkedin,
  location: config.personal.location,
  resumePath: config.personal.resumePath,
  profileImage: config.personal.profileImage,
} as const;

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: string[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming",
    icon: Code2,
    skills: ["Python", "Java", "JavaScript", "SQL", "HTML5", "CSS3"],
  },
  {
    title: "AI, ML & Data Science",
    icon: Brain,
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Regression",
      "Classification",
      "Time-Series Analysis",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "MLflow",
      "SHAP",
    ],
  },
  {
    title: "Generative AI",
    icon: Brain,
    skills: [
      "Retrieval-Augmented Generation (RAG)",
      "Agentic AI",
      "LLM Integration",
      "Vector Search",
      "Embeddings",
      "Prompt Engineering",
      "NLP",
    ],
  },
  {
    title: "Frontend",
    icon: Code2,
    skills: ["React", "Redux", "Responsive UI Development"],
  },
  {
    title: "Backend",
    icon: Wrench,
    skills: ["FastAPI", "Node.js", "REST APIs"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["SQLite", "MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Development & Delivery",
    icon: Wrench,
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "GitHub Actions",
      "CI/CD",
      "Cloud Deployment",
    ],
  },
  {
    title: "Foundations",
    icon: Code2,
    skills: [
      "Data Structures and Algorithms",
      "OOP",
      "DBMS",
      "Computer Networks",
      "Operating Systems",
    ],
  },
];

export interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
}

export const EXPERIENCES: Experience[] = [
  {
    title: "AI/ML Python Intern",
    company: "Geak Minds",
    period: "July 2026 – Present",
    location: "Chennai, Tamil Nadu (Remote)",
    highlights: [
      "Developing Retrieval-Augmented Generation pipelines with Python, LLM integration, embeddings, and vector search.",
      "Building agentic AI workflows for multi-step task execution with human-in-the-loop review.",
      "Working on machine learning development, evaluation, and deployment using Databricks.",
      "Applying regression, classification, and time-series techniques; using MLflow for experiment tracking and SHAP for interpretability.",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company: "AKSSAI ProjExel India",
    period: "September 2025 – March 2026",
    location: "Jabalpur, Madhya Pradesh",
    highlights: [
      "Developed React interfaces for enterprise applications and integrated REST APIs for dynamic features and dashboards.",
      "Improved component reuse and state management while implementing responsive UI and API error handling.",
      "Participated in debugging, testing, code reviews, and Agile development.",
    ],
  },
  {
    title: "Software Developer Intern",
    company: "Elevare Technology",
    period: "June 2025 – August 2025",
    location: "Remote",
    highlights: [
      "Developed responsive web modules using HTML, CSS, and JavaScript.",
      "Integrated backend APIs and implemented search and filtering features.",
      "Contributed to testing, code reviews, Git-based collaboration, and software delivery activities.",
    ],
  },
];

export interface Project {
  id: string;
  title: string;
  description: string;
  problem: string;
  details?: string;
  technologies: string[];
  category: string;
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: "baymax",
    title: "BAYMAX — AI-Assisted Mental Wellness Platform",
    description:
      "A full-stack mental wellness platform combining LLM-based conversational assistance with retrieval-augmented contextual responses.",
    problem:
      "Explores how conversational AI can provide more contextual, personalized wellness interactions.",
    details:
      "Built around a FastAPI backend and PostgreSQL data layer, with conversational functionality, user activity and wellness analytics, and NLP-driven personalization. This is an AI-assisted wellness application, not a clinically validated diagnostic or treatment tool.",
    technologies: ["Python", "FastAPI", "PostgreSQL", "LLMs", "RAG", "NLP"],
    category: "AI",
    githubUrl: config.projectLinks.baymax.github,
    liveUrl: config.projectLinks.baymax.live,
    featured: true,
  },
  {
    id: "complaint-management",
    title: "Smart Complaint & Issue Management System",
    description:
      "A full-stack complaint management application for structured issue tracking and role-based workflows.",
    problem:
      "Organizes complaint intake, status tracking, and reporting within a single workflow.",
    details:
      "Connects a React frontend to Node.js REST APIs and a PostgreSQL data layer, supporting complaint status updates and lifecycle management.",
    technologies: ["React", "Node.js", "PostgreSQL", "REST APIs"],
    category: "Full-stack",
    githubUrl: config.projectLinks.complaints.github,
    liveUrl: config.projectLinks.complaints.live,
    featured: true,
  },
  {
    id: "mcp-tool-execution",
    title: "MCP Server and LLM Tool Execution",
    description:
      "A Python MCP server and interactive client demonstrating tool discovery, resource access, prompt retrieval, and LLM-directed tool execution.",
    problem:
      "Demonstrates a structured way for an LLM-powered client to discover and invoke external tools.",
    details:
      "Combines MCP with Groq, SQLite, and SQLAlchemy to explore tool execution and resource access in an interactive workflow.",
    technologies: ["Python", "MCP", "Groq", "SQLite", "SQLAlchemy"],
    category: "Developer Tools",
    githubUrl: config.projectLinks.mcp.github,
    liveUrl: config.projectLinks.mcp.live,
    featured: true,
  },
  {
    id: "docker-python-cicd",
    title: "Dockerized Python Application with CI/CD",
    description:
      "A containerized Python application with an automated CI/CD workflow and deployment verification.",
    problem:
      "Packages a Python application for repeatable delivery through an automated workflow.",
    technologies: ["Docker", "Python", "GitHub Actions", "Docker Hub", "Render"],
    category: "Deployment",
    githubUrl: config.projectLinks.cicd.github,
    liveUrl: config.projectLinks.cicd.live,
    featured: false,
  },
];

export interface Certification {
  title: string;
  issuer?: string;
  description: string;
}

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Java and Data Structures & Algorithms",
    description: "Certification in Java programming and data structures and algorithms.",
  },
  {
    title: "Full Stack Web Development",
    issuer: "Apna College",
    description: "Full-stack web development coursework.",
  },
];

export interface Achievement {
  title: string;
  description: string;
  icon: string;
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "150+ DSA problems solved",
    description: "Problem-solving practice on LeetCode and HackerRank.",
    icon: "award",
  },
];

export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Problem Solving", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export interface Command {
  label: string;
  shortcut?: string;
  action: string;
  section: string;
}

export const COMMANDS: Command[] = [
  { label: "Home", shortcut: "H", action: "#hero", section: "Navigation" },
  { label: "About", shortcut: "A", action: "#about", section: "Navigation" },
  { label: "Skills", shortcut: "S", action: "#skills", section: "Navigation" },
  {
    label: "Experience",
    shortcut: "E",
    action: "#experience",
    section: "Navigation",
  },
  {
    label: "Projects",
    shortcut: "P",
    action: "#projects",
    section: "Navigation",
  },
  {
    label: "Certifications",
    shortcut: "C",
    action: "#certifications",
    section: "Navigation",
  },
  {
    label: "Problem Solving",
    shortcut: "D",
    action: "#achievements",
    section: "Navigation",
  },
  {
    label: "Contact",
    shortcut: "K",
    action: "#contact",
    section: "Navigation",
  },
  {
    label: "Download Resume",
    shortcut: "R",
    action: "resume",
    section: "Actions",
  },
  { label: "Toggle Theme", shortcut: "T", action: "theme", section: "Actions" },
  { label: "Go to GitHub", shortcut: "G", action: "github", section: "Links" },
  {
    label: "Go to LinkedIn",
    shortcut: "L",
    action: "linkedin",
    section: "Links",
  },
];
