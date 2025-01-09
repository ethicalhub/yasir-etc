import { FaReact, FaUserCheck, FaEthereum } from "react-icons/fa";
import { GoProjectRoadmap } from "react-icons/go";
import { IoLogoJavascript } from "react-icons/io5";
import { MdTrendingUp, MdExplore } from "react-icons/md";
import { LuBookOpenCheck } from "react-icons/lu";

export const workExperience = [
  {
    company: "Panther Protocol",
    location: "Remote",
    role: "Frontend Web Developer",
    duration: "December 2021 – Present",
    responsibilities: [
      "Developed scalable React components with Next.js for user-friendly interfaces.",
      "Contributed to backend logic with Solidity, enhancing Web3 integrations.",
      "Gained Solidity expertise to assist in smart contract development.",
      "Promoted zero-knowledge technology and conducted crash courses within the ZK Monk community.",
    ],
  },
  {
    company: "Antino Labs",
    location: "Noida, India",
    role: "MERN Developer",
    duration: "June 2021 – December 2021",
    projects: [
      {
        name: "Begig.io",
        details:
          "Developed the entire frontend, including authentication logic, state management, dashboard, custom filters for search and tables, ensuring seamless user experience.",
      },
      {
        name: "FindingDoc.io",
        details:
          "Developed from scratch using plain JavaScript with features like infinite scroll, multi-step patient forms, and API testing using Postman.",
      },
    ],
  },
  {
    company: "Ethica Invest",
    location: "WFH",
    role: "ReactJS Intern",
    duration: "December 2020 – June 2021",
    responsibilities: [
      "Created a new React-based web application with reusable components, stock charts, and live data integration using the Trading View API.",
      "Implemented user registration APIs using Node.js and MongoDB.",
    ],
  },
];
export const programmingSkills = [
  "ReactJS",
  "NextJS",
  "JavaScript (ES6+)",
  "TypeScript",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Solidity",
  "Smart Contracts",
];
export const tools = [
  "Visual Studio Code (VSCode)",
  "Git",
  "GitHub",
  "Docker",
  "Postman",
  "Figma",
  "AWS",
  "Vercel",
  "ERC-20",
];
export const blogs = [
  {
    id: 1,
    title: "Introduction to JavaScript",
    link: "https://medium.com/",
    author: "John Doe",
    date: "2025-01-09",
    tags: ["JavaScript", "Programming", "Web Development"],
    content:
      "JavaScript is a versatile programming language used for web development...",
    imageUrl: "/images/3dImage.jpg",
  },
  {
    id: 2,
    title: "Introduction to JavaScript",
    link: "https://medium.com/",
    author: "John Doe",
    date: "2025-01-09",
    tags: ["JavaScript", "Programming", "Web Development"],
    content:
      "JavaScript is a versatile programming language used for web development...",
    imageUrl: "/images/3dImage.jpg",
  },
  {
    id: 3,
    title: "Introduction to JavaScript",
    link: "https://medium.com/",
    author: "John Doe",
    date: "2025-01-09",
    tags: ["JavaScript", "Programming", "Web Development"],
    content:
      "JavaScript is a versatile programming language used for web development...",
    imageUrl: "/images/3dImage.jpg",
  },
  {
    id: 4,
    title: "Introduction to JavaScript",
    link: "https://medium.com/",
    author: "John Doe",
    date: "2025-01-09",
    tags: ["JavaScript", "Programming", "Web Development"],
    content:
      "JavaScript is a versatile programming language used for web development...",
    imageUrl: "/images/3dImage.jpg",
  },
];
export const projectData = [
  {
    project: "BrightBells",
    description:
      "An e-learning platform connecting students with expert tutors for personalized subject-specific needs. Worked on client-side development and implemented Stripe payment integration.",
    technologiesUsed: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "AuthJS",
      "React Hook Form",
      "Zod",
      "Context",
    ],
    links: {
      github: "https://github.com/ethicalhub/education_next",
      liveDemo: "https://www.brightbells.com/",
    },
    image: "/images/3dImage.jpg",
  },
  {
    project: "Micro-blogging Platform (In progress)",
    description:
      "Developing a dynamic community space using Next.js, TypeScript, MongoDB and Node.js, featuring NSFW filtration, private groups, and category-based feeds. AI Powered chatbot.",
    technologiesUsed: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Express.js",
      "MongoDB",
      "Stripe",
      "Docker",
      "AuthJS",
      "Metamask",
      "Socket.io",
    ],
    links: {
      github: "https://github.com/ethicalhub/yasir-etc",
      liveDemo: "https://www.ethicals-lab.com/",
    },
    image: "/images/3dImage.jpg",
  },
];
export const myNotesData = [
  {
    id: 1,
    title: "React-etc",
    icon: <FaReact />,
    link: "/notes/react-etc",
    description: "Comprehensive notes on React concepts, hooks, and patterns.",
    tags: ["React", "Frontend", "JavaScript"],
  },
  {
    id: 2,
    title: "DSA-etc",
    icon: <GoProjectRoadmap />,
    link: "/notes/dsa-etc",
    description:
      "Data Structures and Algorithms for problem-solving and interviews.",
    tags: ["DSA", "Algorithms", "Coding"],
  },
  {
    id: 3,
    title: "JavaScript-etc",
    icon: <IoLogoJavascript />,
    link: "/notes/javascript-etc",
    description:
      "In-depth JavaScript notes, including ES6+ features and best practices.",
    tags: ["JavaScript", "Frontend", "Programming"],
  },
  {
    id: 4,
    title: "Blockchain-etc",
    icon: <FaEthereum />,
    link: "/notes/blockchain-etc",
    description:
      "Notes on Blockchain, smart contracts, decentralized applications, and emerging trends.",
    tags: ["Blockchain", "DeFi", "Smart Contracts", "Web3"],
  },
  {
    id: 5,
    title: "Interview Preparation",
    icon: <FaUserCheck />,
    link: "/notes/interview-preparation",
    description:
      "Key notes and tips for technical and behavioral interview rounds.",
    tags: ["Interview", "Preparation", "Career"],
  },

  {
    id: 6,
    title: "Interactive Quizzes",
    icon: <MdTrendingUp />,
    link: "/notes/interactive-quizzes",
    description:
      "Engaging quizzes to test your knowledge on various tech topics.",
    tags: ["Quizzes", "Testing", "Learning"],
  },
  {
    id: 7,
    title: "Open Source ",
    icon: <LuBookOpenCheck />,
    link: "/notes/open-source-contribution",
    description:
      "Notes on contributing to open source projects, best practices, and resources.",
    tags: ["Open Source", "Contribution", "Community"],
  },
  {
    id: 8,
    title: "Explore Feed",
    icon: <MdExplore />,
    link: "/notes/explore-feed",
    description: "Discover new topics and insights from various feeds.",
    tags: ["Explore", "Feeds", "Discovery"],
  },
];
