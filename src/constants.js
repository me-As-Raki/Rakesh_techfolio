// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';

import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';



 // ✅ or .jpg, .svg — match the actual file

import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';

import netlifyLogo from './assets/tech_logo/netlify.png';
import renderLogo from './assets/tech_logo/renderLogo.svg';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';

import intellijLogo from './assets/tech_logo/intellij.svg';
import sqliteLogo from './assets/tech_logo/sqlite.svg';
import googleCloudLogo from './assets/tech_logo/googlecloud.svg';

import swaggerLogo from './assets/tech_logo/swagger.svg';

import androidLogo from './assets/tech_logo/android.svg';

// Experience Section Logo's 
import nextWaveLogo from "./assets/company_logo/nextWaveLogo.png";
import futureInternsLogo from "./assets/company_logo/future_interns_logo.png"
import miteCrestLogo from "./assets/company_logo/mite_codecrest.jpg"; 
import promptWarsLogo from "./assets/company_logo/promptWarsLogo.jpg";


// Education Section Logo's
import smsLogo from './assets/education_logo/smsLogo.png';
import miteLogo from './assets/education_logo/mite.jpg';

// Certification Section Logos
import springBoard from "./assets/certifications_logo/springBoard.jpg";
import nptelLogo from "./assets/certifications_logo/nptel.png"; // ✅ fixed extension from .jpg to .png
import powerBiLogo from "./assets/certifications_logo/powerbi_workshop_logo.jpg";
import simplilearnLogo from "./assets/certifications_logo/simplilearn_logo.jpg"; // ✅ updated path and extension




// Project Section Logo's

import geminiLogo from "./assets/project_logo/geminiLogo.png";
import portfolioLogo from "./assets/project_logo/portfolioLogo.png";
import nikeAiEcomLogo from "./assets/project_logo/nikeAiEcomLogo.png";
import swapInsightLogo from "./assets/project_logo/swapInsightLogo.png";
import resumeScreenerLogo from "./assets/project_logo/resumeScreenerLogo.png";
import teamNestLogo from "./assets/project_logo/teamNestLogo.png";
import codePilotImg from "./assets/project_logo/codePilotImg.png";
import shopEasyImg from "./assets/project_logo/shopEasyImg.png";




export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Next.js', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Backend & Database',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'MySQL', logo: mysqlLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'C', logo: cLogo },
      { name: 'SQL (MySQL)', logo: mysqlLogo },
    ],
  },
  {
    title: 'Developer Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Android Studio', logo: androidLogo }, // Add androidLogo if you have it
    ],
  },
  {
    title: 'Backend & Database',
    skills: [
     
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
    ],
  },
  {
    title: 'Languages & Cloud',
    skills: [
      { name: 'JavaScript', logo: javascriptLogo },
      
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'C', logo: cLogo },
      { name: 'Netlify', logo: netlifyLogo },
      {name:'Render', logo:renderLogo},
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'GCP', logo: googleCloudLogo },
      { name: 'Vercel', logo: vercelLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'IntelliJ', logo: intellijLogo },,
      { name: 'SQLite', logo: sqliteLogo },
      { name: 'Swagger', logo: swaggerLogo },
    ],
  },
];

export const certifications = [
  {
    id: 1,
    title: "Programming in Java",
    issuer: "NPTEL",
    date: "May 2024",
    desc: "Completed an NPTEL-certified course on Java programming, gaining in-depth knowledge of OOPs, exception handling, multithreading, and Java libraries.",
    skills: ["Java", "OOP", "Exception Handling", "Multithreading"],
    keywords: ["NPTEL", "Certified", "Java SE"],
    image: nptelLogo,
    certificateLink: "https://archive.nptel.ac.in/content/noc/NOC24/SEM1/Ecertificates/106/noc24-cs43/Course/NPTEL24CS43S96140045230656963.pdf",
    downloadLink: "/certificates/nptel.jpg", // ✅ This is in your public folder
  },
  {
    id: 2,
    title: "Practical HTML CSS",
    issuer: "SpringBoard / Wingspan",
    date: "Jan 2023",
    desc: "Completed a hands-on HTML & CSS course covering the fundamentals of web design, layout, and responsive styling through practical application.",
    skills: ["HTML", "CSS", "Responsive Design"],
    keywords: ["SpringBoard", "HTML", "CSS", "Frontend"],
    image: springBoard,
    certificateLink: "https://drive.google.com/file/d/10-OJ9Djfsf5aWmQgU5YCc_37RH4FuPVm/view?usp=sharing",
    downloadLink: "/certificates/springBoard.pdf",
  },
  {
    id: 3,
    title: "PowerBI Workshop",
    issuer: "OfficeMaster / Unstop",
    date: "Jul 2025",
    desc: "Completed hands-on workshop on creating AI-powered interactive dashboards using PowerBI in under 30 minutes.",
    skills: ["PowerBI", "AI Dashboards", "Data Visualization"],
    keywords: ["PowerBI", "Dashboard", "Workshop"],
    image: powerBiLogo,
    certificateLink: "https://unstop.com/workshops/powerbi-ai-dashboard",
    downloadLink: "/certificates/PowerBi_Certificate.pdf",
  },
  {
  id: 4,
  title: "JavaScript for Beginners",
  issuer: "Simplilearn SkillUp",
  date: "Nov 2023",
  desc: "Completed a beginner-friendly JavaScript course covering fundamentals such as variables, functions, DOM manipulation, and event handling.",
  skills: ["JavaScript", "DOM", "Functions", "Variables"],
  keywords: ["Frontend", "JavaScript", "Simplilearn"],
  image: simplilearnLogo,
  certificateLink: "https://drive.google.com/file/d/124BafpzjQGZNezC4omVm9MgbX3gppHVc/view", // Replace with actual link if available
  downloadLink: "/certificates/simplilearn_logo.jpg", // Add PDF file in public/certificates/
},
];


export const experiences = [
  {
    id: 0,
    title: "Full Stack Web Dev Intern",
    company: "Future Interns",
    date: "July 2025",
    image: futureInternsLogo,
    desc: "Completed 3 projects: portfolio site, e-commerce app with OTP login, and AI-powered website rebrand.",
    skills: [
      "React", "Next.js", "Tailwind CSS", "Firebase",
      "EmailJS", "UI/UX", "OTP Auth", "SEO"
    ],
  },
  {
    id: 1,
    title: "Participant – Generative AI Workshop",
    company: "NxtWave Disruptive Technologies",
    date: "Aug 2024",
    image: nextWaveLogo,
    desc: "Explored real-world AI applications with ChatGPT, DALL·E, and code assistants. Built low-code AI-powered tools during the workshop.",
    skills: ["Generative AI", "Prompt Engineering", "No-code/Low-code Tools"],
  },
    {
    id: 2,
    title: "Participant – CODE CREST Coding Event",
    company: "MITE, CYBOTIC (CSE IoT & Cyber Security Dept.)",
    date: "April 2025",
    image: miteCrestLogo,
    desc: "Participated in CODE CREST – a national-level coding contest held at MITE. Enhanced problem-solving, coding efficiency, and technical thinking through challenges conducted on April 25–26, 2025.",
    skills: ["Problem Solving", "Coding", "Programming Logic", "Competitive Events"],
  },
  {
  id: 3,
  title: "Participant – PROMPT WARS AI Challenge",
  company: "CORE, CSI & Crypton Club – MITE",
  date: "May 2024",
  image: promptWarsLogo, // Place and import your logo/image properly
  desc: "Participated in PROMPT WARS – an AI-focused prompt engineering challenge hosted by CSI and CORE Club at MITE. Gained hands-on experience in crafting optimized prompts for generative AI tools.",
  skills: ["Prompt Engineering", "AI Creativity", "Problem Solving", "Hackathon"],
},

];



export const education = [
  {
    id: 0,
    school: "Mangalore Institute Of Technology And Engineering College, Moodbidre",
    date: "Dec 2022 – Present",
    grade: "",
    desc: "Currently pursuing Bachelor of Engineering in Computer Science.",
    degree: "B.E. in Computer Science",
    img: miteLogo, 
  },
  {
    id: 1,
    school: "SMS Pre-University College, Brahmavar",
    date: "Jun 2020 – May 2022",
    grade: "95.7%",
    desc: "Completed Pre-University education in PCMC.",
    degree: "PUC – PCMC Stream",
    img: smsLogo,
  },
   {
    id: 2,
    school: "Government Pre-University College, Brahmavar",
    date: "June 2015 – May 2020",
    grade: "96.5%",
    desc: "Completed SSLC with strong academic performance in core subjects like Science and Mathematics.",
    degree: "SSLC (Secondary School Leaving Certificate)",
    img: "",
  },
];


export const projects = [
{
  id: 1,
  title: "Gemini Clone — AI Chat UI",
  description:
    "A minimal and responsive Gemini-style AI chat clone built using React and Tailwind CSS. Mimics Google Gemini's sleek UI for experimenting with AI chat interfaces.",
  tags: ["React", "Tailwind CSS", "Responsive UI", "Chat UI"],
  github: "https://github.com/me-As-Raki/Gemini-Clone",
  webapp: "https://gemini-clone-tb3b.vercel.app",
  image: geminiLogo,
}
,
  {
    id: 2,
    title: "Personal Portfolio",
    description:
      "A sleek and interactive personal portfolio website showcasing my projects, skills, certifications, and resume. Built using modern frontend technologies with smooth animations and responsive design.",
    tags: ["React", "Tailwind CSS", "Framer Motion", "Responsive Design"],
    github: "https://github.com/Rahul-B47/personal_portfolio",
    webapp: "https://rahulworks-dev.onrender.com",
    image: portfolioLogo,
  },
  {
    id: 3,
    title: "Nike AI – Fullstack Ecommerce with Firebase + AI",
    description:
      "A complete Nike ecommerce platform built with Next.js 14, Firebase, and a FastAPI OTP backend. Features include AI chatbot (Gemini), OTP authentication, admin panel, cart, and dynamic product filters.",
    tags: ["Next.js 14", "Firebase", "FastAPI", "Tailwind CSS", "Gemini AI", "Fullstack"],
    github: "https://github.com/me-As-Raki/NikeAccessX",
    webapp: "https://nikeaccessx.onrender.com",
    image: nikeAiEcomLogo,
  },
  {
    id: 4,
    title: "Swap Insight – Flutter App for Smart Swapping",
    description:
      "A modern Flutter + Firebase app that allows users to securely swap items in categories like furniture, toys, and electronics. Features include Gmail-based login, real-time Firestore sync, profile management, image uploads, and responsive UI.",
    tags: ["Flutter", "Firebase", "Firestore", "Firebase Storage", "Mobile App"],
    github: "https://github.com/me-As-Raki/Swap-Insight",
    image: swapInsightLogo,
    apk: "https://drive.google.com/file/d/1JbocndHNbS-z-sKtiIBRRj11ZLH5U1Tz/view?usp=sharing",
  },
  {
    id: 5,
    title: "Resume Screener — JD Matcher with AI Suggestions",
    description:
      "A Flask-based web app for resume screening using Gemini AI. It compares resumes to job descriptions, generates match scores, provides AI-driven suggestions, extracts contact info, and offers role-based login with OTP authentication and dark mode UI.",
    tags: ["Flask", "Python", "AI", "Gemini API", "SQLite", "Bootstrap", "Chart.js"],
    github: "https://github.com/me-As-Raki/resume-screener",
    webapp: "https://resume-screener-5.onrender.com",
    image: resumeScreenerLogo,
  },
  {
    id: 6,
    title: "TeamNest — Dept-Wise Employee Manager",
    description:
      "A Node.js and MySQL-based employee management system with full CRUD operations. Manage employees by department with a responsive Bootstrap + EJS interface. Includes live demo and example SQL schema for quick setup.",
    tags: ["Node.js", "Express", "MySQL", "Bootstrap", "EJS"],
    github: "https://github.com/me-As-Raki/Employee_DB_App",
    webapp: "https://employee-db-app.onrender.com",
    image: teamNestLogo,
  },
  {
    id: 7,
    title: "CodePilot-AI – RAG-Powered Code Assistant",
    description:
      "A RAG-based assistant for C/C++ codebases using FastAPI and Streamlit. Upload code, parse into semantically meaningful chunks, embed them, and ask queries powered by Gemini or GPT. Visual file logs, semantic search, dark/light mode, and query logs included.",
    tags: ["FastAPI", "Streamlit", "Gemini", "RAG", "LLM", "Python"],
    github: "https://github.com/me-As-Raki/CodePilot-AI",
    webapp: "",
    image: codePilotImg,
  },
  {
    id: 8,
    title: "ShopEasy – Modern E-Commerce App",
    description:
      "A clean, responsive e-commerce platform built with Next.js 15, Firebase, and Tailwind CSS. Supports user authentication, shopping cart, product filters, order history, admin panel, and dark/light themes with Firebase-powered backend and instant feedback UX.",
    tags: ["Next.js", "Firebase", "Tailwind CSS", "E-Commerce", "React"],
    github: "https://github.com/me-As-Raki/ShopEasy",
    webapp: "https://shopeasy-2we6.onrender.com",
    image: shopEasyImg,
  }
];
