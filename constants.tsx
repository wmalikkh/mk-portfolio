import React from 'react';
import { Project, Experience } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'macroflow',
    title: 'MacroFlow System',
    role: 'Lead Engineer & Developer',
    category: 'Commercial',
    description: 'Engineered a commercial macropad ecosystem integrating hardware and software functionality. Designed custom PCB and optimized C++ firmware compliant with QMK standards. Developed a desktop application for seamless hardware-to-OS interaction; managed product lifecycle from prototype to market release.',
    tags: ['C++', 'QMK Firmware', 'PCB Design', 'Desktop App'],
    link: 'https://macroflow.info',
    icon: 'microchip'
  },
  {
    id: 'steglens',
    title: 'Steglens',
    role: 'Full Stack Security Developer',
    category: 'Academic',
    description: 'Built a secure web application for concealed data exchange using steganography. Integrated Python scripts with a web interface for encrypted image data processing. Implemented AES-128 encryption and custom steganography algorithms; deployed live via Render.',
    tags: ['Python', 'AES-128', 'Steganography', 'Full Stack'],
    link: 'https://steglens.online',
    icon: 'user-secret'
  },
  {
    id: 'phoenix',
    title: 'Phoenix-Pub',
    role: 'System Architect',
    category: 'Commercial',
    description: 'Designed and deployed a digital publishing platform with a secure Python (Flask) admin interface. Implemented authentication protocols and database logic; managed cloud deployment on Hetzner.',
    tags: ['Python', 'Flask', 'Hetzner', 'Database Design'],
    link: 'https://phoenix-pub.com',
    icon: 'server'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'crystel',
    title: 'Customer Support Representative',
    company: 'CRYSTEL',
    location: 'Amman, Jordan',
    period: 'Feb 2022 – Jun 2022',
    description: 'High-volume problem solving and crisis management for large scale customer inquiries.',
    tags: ['Crisis Management', 'Customer Handling', 'Problem Solving']
  },
  {
    id: 'it-security',
    title: 'Cybersecurity Intern',
    company: 'IT SECURITY C&T',
    location: 'Amman, Jordan',
    period: 'Jun 2025 - Sep 2025',
    description: 'Conducted SOC monitoring and network defense operations. Performed ethical hacking and vulnerability assessments to mitigate security risks. Gained hands-on experience in Digital Forensics and Governance, Risk, and Compliance (GRC).',
    tags: ['SOC Monitoring', 'Ethical Hacking', 'Forensics']
  }
];

export const SKILLS = {
  technical: ['Python', 'Java', 'C++', 'HTML/CSS', 'Ubuntu', 'Wireshark', 'QMK Firmware', 'Kali Linux', 'Splunk SOC'],
  philosophy: ['Team Leadership', 'Problem Solving', 'High-Stress Management', 'Technical Communication', 'System Design', 'Core Human Logic'],
  soft: ['Teamwork & Collaboration', 'High-Volume Problem Solving', 'Working Under Stress', 'Effective Communication', 'Customer Handling']
};

export const MALIK_CONTEXT = `
You are an AI assistant for Malik Khelfah's professional portfolio.
Malik is a System Architect and Cybersecurity Engineer with a BSc in Cybersecurity & Cloud Computing from Applied Science Private University (graduating Jan 2026).
Key focus: Designing secure, scalable systems from hardware to cloud infrastructure.
Key Skills: Python, Java, C++, QMK Firmware, Splunk, SOC Monitoring, Incident Response.
Projects: 
1. MacroFlow: Commercial macropad ecosystem with custom PCB and QMK firmware.
2. Steglens: Secure steganography web application with AES-128 encryption.
3. Phoenix-Pub: Digital publishing platform with secure Flask admin interface.
He is a "results-driven" engineer who bridges the gap between hardware and cloud.
Answer questions about his skills, projects, or background professionally and concisely.
`;