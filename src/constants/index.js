import kajalImage from '../images/kajal-narang.jpg';  // Correct relative path
import vanshikaImage from '../images/vanshika-taya.jpg';  // Correct relative path
import littlemove from  '../images/lm.jpeg';  // Correct relative path
import tracyImage from '../images/tracy.png';  // Correct relative path
import uberclone from  '../images/uberclone.png';  // Correct relative path
import tryonme from  '../images/tryonme.png';  // Correct relative path
import idd from  '../images/idd.png';  // Intelligent Data Dictionary
import linkedinExtension from '../images/linkedin.png';  // LinkedIn Auto Connect Extension

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  aws,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "leadership",
    title: "Leadership",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "AI & LLM Integration",
    icon: mobile,
  },
  {
    title: "Backend & API Design",
    icon: backend,
  },
  {
    title: "Cloud & DevOps (AWS)",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Little Move",
    icon: littlemove,
    iconBg: "#383E56",
    date: "July 2025-Aug 2025",
    points: [
      "Led the development of the live tracking system, working across both frontend and backend to deliver real-time vehicle and user location updates.",
      "Built an interactive tracking page using Google Maps API, with live route rendering, dynamic marker updates, and smooth user interactions.",
      "Developed backend APIs and integrated Socket.IO for real-time communication between clients and server, ensuring accurate, low-latency location sync.",
      "Collaborated with cross-functional teams to ensure seamless data flow, responsive UI, and scalable system performance.",
    ],
  },/*
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },*/
];

const testimonials = [
  /*
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },*/
 {
  testimonial:
    "Nikhil onboarded as an AWS Cloud Club Captain in November 2025. His leadership and passion for cloud technology will help him build a thriving cloud community and inspire many students to explore innovation.",
  name: "Tracy Wang",
  designation: "AWS Cloud Club Program",
  company: "Amazon Web Services (AWS)",
  image: tracyImage, // Add Tracy's image here
},
    {
      testimonial:
        "Nikhil's dedication and problem-solving skills are unmatched. His ability to work with new technologies and passion for innovation set him apart as a developer.",
      name: "Kajal Narang",
      designation: "SRE at",
      company: "Cimpress",
      image: kajalImage,  // Using the local image
    },
    {
      testimonial:
        "Nikhil is a talented and dedicated developer with a strong passion for coding. He consistently excels in college projects and comes highly recommended for development work.",
      name: "Vanshika Taya",
      designation: "Batchmate at",
      company: "Dcrust",
      image: vanshikaImage,  // Using the local image
    },
    
  
  
];

const projects = [
  /* 
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  */

  {
    name: "Intelligent Data Dictionary (IDD)",
    description:
      "A production-ready AI-powered data dictionary and natural language SQL generation platform that enables data teams to explore, document, and query complex databases using conversational AI, semantic vector search, and automated data profiling.",
    tags: [
      {
        name: "fastapi",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "postgresql",
        color: "pink-text-gradient",
      },
      {
        name: "pgvector",
        color: "blue-text-gradient",
      },
      {
        name: "docker",
        color: "green-text-gradient",
      },
      {
        name: "redis",
        color: "pink-text-gradient",
      },
      {
        name: "celery",
        color: "blue-text-gradient",
      },
      {
        name: "groq-llm",
        color: "green-text-gradient",
      },
    ],
    image: idd,
    source_code_link: "https://github.com/narang25/intelligent-data-dictionary-agent",
    live_link: "http://50.17.59.55/login",
  },
   {
  name: "Uber Clone — Real-Time Ride Booking System",
  description:
    "A full-stack, production-ready Uber clone featuring real-time ride booking, live GPS tracking, OTP-based ride verification, and captain matching using WebSockets. Built with React, Node.js, MongoDB, and Socket.IO, fully Dockerized and deployed on AWS with Nginx reverse proxy — using 100% free open-source mapping services (OpenStreetMap, Photon, OSRM) without paid APIs.",
  tags: [
    {
      name: "react",
      color: "blue-text-gradient",
    },
    {
      name: "nodejs",
      color: "green-text-gradient",
    },
    {
      name: "mongodb",
      color: "pink-text-gradient",
    },
    {
      name: "socket.io",
      color: "blue-text-gradient",
    },
    {
      name: "docker",
      color: "green-text-gradient",
    },
    {
      name: "nginx",
      color: "pink-text-gradient",
    },
    {
      name: "aws",
      color: "blue-text-gradient",
    },
  ],
  image: uberclone, // Add your project image variable here
  source_code_link: "https://github.com/narang25/Uber_Video",
  live_link: "http://50.17.59.55:8080",
},{
  name: "Try-On Me — Virtual Clothing Try-On Prototype",
  description:
    "A web-based virtual clothing try-on prototype that allows users to upload a front-facing photo and preview how a clothing item would look using image overlay simulation. Includes skin-tone color compatibility checks and outfit pairing suggestions. Built as a proof-of-concept to demonstrate the core idea of AI-powered virtual fashion try-ons.",
  tags: [
    {
      name: "react",
      color: "blue-text-gradient",
    },
    {
      name: "nodejs",
      color: "green-text-gradient",
    },
    {
      name: "express",
      color: "pink-text-gradient",
    },
    {
      name: "tailwind",
      color: "blue-text-gradient",
    },
    {
      name: "multer",
      color: "green-text-gradient",
    },
  ],
  image: tryonme, // Add your project image variable here
  source_code_link: "https://github.com/narang25/tryonme",
},
{
  name: "LinkedIn Auto Connect — Chrome Extension",
  description:
    "A Chrome extension that automates sending LinkedIn connection or follow requests with configurable limits, delays, optional personalized notes, and real-time progress tracking. Built using Manifest V3 with DOM scripting and smart filtering to mimic human interaction patterns. Developed for educational and research purposes.",
  tags: [
    {
      name: "javascript",
      color: "blue-text-gradient",
    },
    {
      name: "chrome-extension",
      color: "green-text-gradient",
    },
    {
      name: "manifest-v3",
      color: "pink-text-gradient",
    },
    {
      name: "dom-automation",
      color: "blue-text-gradient",
    },
    {
      name: "css",
      color: "green-text-gradient",
    },
  ],
  image: linkedinExtension, // Add your project image variable here
  source_code_link: "https://github.com/narang25/linkedin-auto-connect-extension",
},
];

const achievements = [
  {
    title: "AWS Cloud Club Captain",
    organization: "Amazon Web Services (AWS)",
    date: "November 2025 — Present",
    description:
      "Selected as AWS Cloud Club Captain at DCRUST, leading a student community focused on cloud computing, AWS technologies, and hands-on learning. Responsible for organizing events, workshops, and fostering a culture of cloud innovation on campus.",
    icon: aws,
    iconBg: "#232631",
  },
  {
    title: "Amazon ML Summer School",
    organization: "Amazon",
    date: "July — August 2025",
    description:
      "Selected for the competitive Amazon ML Summer School 2025, gaining in-depth knowledge of machine learning fundamentals, supervised and unsupervised learning, deep learning, and practical ML applications through sessions led by Amazon scientists.",
    icon: aws,
    iconBg: "#232631",
  },
];

export { services, technologies, experiences, testimonials, projects, achievements };
