import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaGithub,
} from "react-icons/fa";
import { FiFileText, FiExternalLink } from "react-icons/fi";
// Projects
import Movix from "./assets/Movix2.png";
import CodeZone from "./assets/Code Zone.png";
import Bondi from "./assets/Bondi.png";
import Pixel from "./assets/Pixel.png";
import TwitterClone from "./assets/TwitterClone.png";
import Crud from "./assets/Crud.png";
import Kasper from "./assets/Kasper.png";
import starbucks from "./assets/Starbuks.png";
import Todo from "./assets/Todo.png";
import YumDash from "./assets/Screenshot (44).png";
import Zakat from "./assets/Screenshot (6).png";
// Theme
import Theme1 from "./assets/blue-circle-png-8.png";
import Theme2 from "./assets/Green.png";
import Theme3 from "./assets/orange.png";
import Theme4 from "./assets/Red.png";
import Theme5 from "./assets/gold.png";
import Theme6 from "./assets/Bink.png";
import Theme7 from "./assets/Purple.png";
import Theme8 from "./assets/Purple2.png";
// Skills
import Html from "./assets/html_ph9Z0PP.png";
import Js from "./assets/Js.webp";
import Css from "./assets/css.webp";
import React from "./assets/React.webp";
import Redux from "./assets/Redux.png";
import Git from "./assets/git_nnrA35B.png";
import Github from "./assets/code_LmikzpY.png";
import Firease from "./assets/Firbase.webp";
import Bootsrap from "./assets/Bootstrap.png";
import sass from "./assets/sass.svg";
import Google from "./assets/search_v42JcMU.png";
import Api from "./assets/api_jWHrF5L.png";
import Deploy from "./assets/rocket.png";
import Vscode from "./assets/visual-studio_PvbYL6E.png";
import Gpt from "./assets/chatbot_hKae2Xk.png";
import Agile from "./assets/Agile.png";
// Status
import Experience from "./assets/Sucsess.png";
import Sucsess from "./assets/experiance.png";
import Comment from "./assets/Comment.png";

export const personalInfo = [
  {
    id: 1,
    title: "First Name : ",
    description: "Belal",
  },

  {
    id: 2,
    title: "Last Name : ",
    description: "Hesham",
  },

  {
    id: 3,
    title: "Age : ",
    description: "19 Years",
  },

  {
    id: 4,
    title: "Nationality : ",
    description: "Egyption",
  },

  {
    id: 5,
    title: "Freelance : ",
    description: "Available",
  },

  {
    id: 6,
    title: "Address : ",
    description: "Egypt",
  },

  {
    id: 7,
    title: "Phone : ",
    description: "01060074246",
  },

  {
    id: 8,
    title: "Email : ",
    description: "balalaboseada@gmail.com",
  },
  {
    id: 10,
    title: "Langages : ",
    description: "swahili, English ,Germany",
  },
];

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Portfolio",
    icon: <FaUser className="nav__icon" />,
    path: "/portfolio",
  },

  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/contact",
  },
];

export const stats = [
  {
    id: 1,
    no: "+1",
    img: Experience,
    title: "Year of Experience",
  },

  {
    id: 2,
    no: "+10",
    img: Sucsess,
    title: "Completed Project",
  },

  {
    id: 3,
    no: "",
    img: Comment,
    title: "Be The First Comment",
  },
];
// skills
export const skills = [
  {
    id: 1,
    title: "Html",
    img: Html,
    Cat: "Skills",
  },

  {
    id: 2,
    title: "Javascript",
    img: Js,
    Cat: "Skills",
  },

  {
    id: 3,
    title: "Css",
    img: Css,
    Cat: "Skills",
  },

  {
    id: 4,
    title: "React",
    img: React,
    Cat: "Skills",
  },
  {
    id: 5,
    title: "Redux",
    img: Redux,
    Cat: "Skills",
  },

  {
    id: 6,
    title: "Firease",
    img: Firease,
    Cat: "Tools",
  },

  {
    id: 7,
    title: "git",
    img: Git,
    Cat: "Tools",
  },

  {
    id: 8,
    title: "GitHub",
    img: Github,
    Cat: "Tools",
  },
  {
    id: 9,
    title: "G(Search)",
    img: Google,
    Cat: "Tools",
  },
  {
    id: 10,
    title: "sass",
    img: sass,
    Cat: "Skills",
  },
  {
    id: 11,
    title: "Bootstrap",
    img: Bootsrap,
    Cat: "Skills",
  },
  {
    id: 12,
    title: "Api",
    img: Api,
    Cat: "Skills",
  },
  {
    id: 13,
    title: "Deploy",
    img: Deploy,
    Cat: "Skills",
  },
  {
    id: 14,
    title: "VS Code",
    img: Vscode,
    Cat: "Tools",
  },
  {
    id: 15,
    title: "ChatGpt",
    img: Gpt,
    Cat: "Tools",
  },
  {
    id: 15,
    title: "Agile(Scrum)",
    img: Agile,
    Cat: "Skills",
  },
];

// portfolio
export const portfolioData = [
  {
    id: 1,
    img: Movix,
    title: "Movix",
    category: "React",
    desc: "Movie App",
    details: [
      {
        icon: <FaGithub />,
        title: "Repo : ",
        desc: {
          title: "https://github.com/BelalAboSeada/Movix.git",
          link: "https://github.com/BelalAboSeada/Movix.git",
        },
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: {
          title: "https://movix-tau-three.vercel.app/",
          link: "https://movix-tau-three.vercel.app/",
        },
      },
    ],
    Overview: [
      "Movie App for Watching Trailer, description, rating and more about movies",
      "Built using React, React-Router, Redux, and Redux-thunk",

      "Consumed the movie db API to fetch movie data",
      "Responsive design with smooth animations",
    ],
  },
  {
    id: 2,
    img: CodeZone,
    title: "Code Zone",
    category: "JS",
    desc: "Landing Page",
    details: [
      {
        icon: <FaGithub />,
        title: "Repo : ",
        desc: {
          title: "https://github.com/BelalAboSeada/code-zone.git",
          link: "https://github.com/BelalAboSeada/code-zone.git",
        },
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: {
          title: "https://code-zone-belal.vercel.app/",
          link: "https://code-zone-belal.vercel.app/",
        },
      },
    ],
    Overview: [
      "Modern landing page for a coding education platform",
      "Responsive design with smooth animations",
    ],
  },
  {
    id: 3,
    img: YumDash,
    title: "Yum Dash",
    category: "React",
    desc: "Food delivery E-commerce App",
    details: [
      {
        icon: <FaGithub />,
        title: "Repo : ",
        desc: {
          title: "https://github.com/BelalAboSeada/Yum-Dash.git",
          link: "https://github.com/BelalAboSeada/Yum-Dash.git",
        },
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: {
          title: "https://yum-dash-belal.vercel.app/",
          link: "https://yum-dash-belal.vercel.app/",
        },
      },
    ],
    Overview: [
      "Food ordering platform with real-time cart management",
      "Integrated with Firebase to manage the data",
      "Responsive design with smooth animations",
    ],
  },
  {
    id: 4,
    img: Zakat,
    title: "Zakat App",
    category: "React",
    desc: "Calculator for Zakat",
    details: [
      {
        icon: <FaGithub />,
        title: "Repo : ",
        desc: {
          title: "https://github.com/BelalAboSeada/zakat-app.git",
          link: "https://github.com/BelalAboSeada/zakat-app.git",
        },
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: {
          title: "https://zakat-app-belal.vercel.app/",
          link: "https://zakat-app-belal.vercel.app/",
        },
      },
    ],
    Overview: [
      "Islamic financial calculator for Zakat obligations",
      "Supports multiple asset types and currencies",
    ],
  },
  {
    id: 5,
    img: Bondi,
    title: "Bondi",
    category: "HTML & CSS",
    desc: "Landing Page",
    details: [
      {
        icon: <FaGithub />,
        title: "Repo : ",
        desc: {
          title: "https://github.com/BelalAboSeada/bondi.git",
          link: "https://github.com/BelalAboSeada/bondi.git",
        },
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: {
          title: "https://belalaboseada.github.io/bondi/",
          link: "https://belalaboseada.github.io/bondi/",
        },
      },
    ],
    Overview: [
      "Modern responsive landing page",
      "Built with pure HTML5 and CSS3",
    ],
  },
  {
    id: 6,
    img: Pixel,
    title: "Pixel",
    category: "JS",
    desc: "Image Editor",
    details: [
      {
        icon: <FaGithub />,
        title: "Repo : ",
        desc: {
          title: "https://github.com/BelalAboSeada/Pixel.git",
          link: "https://github.com/BelalAboSeada/Pixel.git",
        },
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: {
          title: "https://belalaboseada.github.io/pixel/",
          link: "https://belalaboseada.github.io/pixel/",
        },
      },
    ],
    Overview: [
      "Browser-based image manipulation tool",
      "Supports basic filters and transformations",
    ],
  },
  {
    id: 7,
    img: TwitterClone,
    title: "Twitter Clone",
    category: "HTML & CSS",
    desc: "App Clone",
    details: [
      {
        icon: <FaGithub />,
        title: "Repo : ",
        desc: {
          title: "https://github.com/BelalAboSeada/twitter-clone.git",
          link: "https://github.com/BelalAboSeada/twitter-clone.git",
        },
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: {
          title: "https://belalaboseada.github.io/twitter-clone/",
          link: "https://belalaboseada.github.io/twitter-clone/",
        },
      },
    ],
    Overview: [
      "Static clone of Twitter/X UI",
      "Responsive layout with CSS Grid",
    ],
  },
  {
    id: 8,
    img: Crud,
    title: "CRUD System",
    category: "JS",
    desc: "Data Management Application",
    details: [
      {
        icon: <FaGithub />,
        title: "Repo : ",
        desc: {
          title: "https://github.com/BelalAboSeada/cruds-system.git",
          link: "https://github.com/BelalAboSeada/cruds-system.git",
        },
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: {
          title: "https://BelalAboSeada.github.io/cruds-system/",
          link: "https://BelalAboSeada.github.io/cruds-system/",
        },
      },
    ],
    Overview: [
      "Complete CRUD operations implementation",
      "Local storage data persistence",
    ],
  },
  {
    id: 9,
    img: Kasper,
    title: "Kasper",
    category: "HTML & CSS",
    desc: "Landing Page",
    details: [
      {
        icon: <FaGithub />,
        title: "Repo : ",
        desc: {
          title: "https://github.com/BelalAboSeada/kasper-templete.git",
          link: "https://github.com/BelalAboSeada/kasper-templete.git",
        },
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: {
          title: "https://BelalAboSeada.github.io/kasper-templete/",
          link: "https://BelalAboSeada.github.io/kasper-templete/",
        },
      },
    ],
    Overview: [
      "Creative agency landing page",
      "Modern design with CSS animations",
    ],
  },
  {
    id: 10,
    img: starbucks,
    title: "Starbucks",
    category: "HTML & CSS",
    desc: "Landing Page",
    details: [
      {
        icon: <FaGithub />,
        title: "Repo : ",
        desc: {
          title: "https://github.com/BelalAboSeada/starbucks.git",
          link: "https://github.com/BelalAboSeada/starbucks.git",
        },
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: {
          title: "https://BelalAboSeada.github.io/starbucks/",
          link: "https://BelalAboSeada.github.io/starbucks/",
        },
      },
    ],
    Overview: [
      "E-commerce landing page clone",
      "Mobile-first responsive design",
    ],
  },
  {
    id: 11,
    img: Todo,
    title: "Todo List",
    category: "JS",
    desc: "Task Management App",
    details: [
      {
        icon: <FaGithub />,
        title: "Repo : ",
        desc: {
          title: "https://github.com/BelalAboSeada/Todolist.git",
          link: "https://github.com/BelalAboSeada/Todolist.git",
        },
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: {
          title: "https://BelalAboSeada.github.io/Todolist/",
          link: "https://BelalAboSeada.github.io/Todolist/",
        },
      },
    ],
    Overview: [
      "Interactive task management application",
      "Local storage for data persistence",
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "#00A9FF",
    name: "Blue",
  },

  {
    id: 2,
    img: Theme2,
    color: "#41A145",
  },

  {
    id: 3,
    img: Theme3,
    color: "#FF5C26",
  },

  {
    id: 4,
    img: Theme4,
    color: " #C0131A",
  },

  {
    id: 5,
    img: Theme5,
    color: "#FFCD4B",
  },

  {
    id: 6,
    img: Theme6,
    color: "#FF00FF",
  },

  {
    id: 7,
    img: Theme7,
    color: "#8F1FAC",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(271, 76%, 53%)",
  },
];
