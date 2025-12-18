import kajalImage from '../images/kajal-narang.jpg';  // Correct relative path
import vanshikaImage from '../images/vanshika-taya.jpg';  // Correct relative path
import littlemove from  '../images/lm.jpeg';  // Correct relative path
import uberclone from  '../images/uberclone.png';  // Correct relative path
import tryonme from  '../images/tryonme.png';  // Correct relative path

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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Problem Solver",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Cloud Native",
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
    name: "3D Developer Portfolio",
    description:
      "An interactive 3D developer portfolio showcasing my skills and projects with immersive experiences, utilizing technologies like React, Three.js, and GLTF models.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "green-text-gradient",
      },
      {
        name: "glTF",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide, 
    //source_code_link: "your_live_demo_url", 
  },
   {
    name: "Uber Clone",
description:
  "A full-stack ride-hailing web application that allows users to book rides in real time, track drivers live on the map, calculate fares dynamically, and manage authentication securely, replicating core functionalities of Uber.",
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
    color: "green-text-gradient",
  },
  {
    name: "socket.io",
    color: "pink-text-gradient",
  },
  {
    name: "google-maps-api",
    color: "blue-text-gradient",
  },
],
image: uberclone,
source_code_link: "https://github.com/narang25/Uber_Video",

  },{
    name: "Try-On-Me",
description:
  "A smart virtual try-on web application that allows users to visualize how different outfits look based on their skin tone and appearance. The system dynamically changes clothing styles and colors to help users choose what suits them best before purchasing.",
tags: [
  {
    name: "react",
    color: "blue-text-gradient",
  },
  {
    name: "three.js",
    color: "green-text-gradient",
  },
  {
    name: "nodejs",
    color: "green-text-gradient",
  },
  {
    name: "tailwind",
    color: "pink-text-gradient",
  },
  
],
image: tryonme,
source_code_link: "https://github.com/narang25/tryonme",

  },
];


export { services, technologies, experiences, testimonials, projects };
