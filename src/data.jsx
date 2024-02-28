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

export const portfolio = [
  {
    id: 1,
    img: Movix,
    title: "Movix",
    category: "React",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Movie App",
      },
      {
        icon: <FaGithub />,
        title: "Repo : ",
        desc: (
          <a
            href="https://github.com/BelalAboSeda/Movix.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/BelalAboSeada/Movix.git
          </a>
        ),
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: (
          <a
            href="https://movix-tau-three.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://movix-tau-three.vercel.app/
          </a>
        ),
      },
    ],
  },
  {
    id: 2,
    img: CodeZone,
    title: "Code Zone",
    category: "js",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Landing Page",
      },
      {
        icon: <FaGithub />,
        title: "Repo : ",
        desc: (
          <a
            href="https://github.com/BelalAboSeada/code-zone.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/BelalAboSeada/code-zone.git
          </a>
        ),
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: (
          <a
            href="https://BelalAboSeada.github.io/code-zone/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://BelalAboSeada.github.io/code-zone/
          </a>
        ),
      },
    ],
    
  },
  {
    id: 3,
    img: Bondi,
    title: "Bondi",
    category: "Html&Css",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Landing Page",
      },
      {
        icon: <FaGithub />,
        title: "Repo : ",
        desc: (
          <a
            href="https://github.com/BelalAboSeada/bondi.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/BelalAboSeada/bondi.git
          </a>
        ),
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: (
          <a
            href="https://BelalAboSeada.github.io/bondi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://BelalAboSeada.github.io/bondi/
          </a>
        ),
      },
    ],
  },

  {
    id: 4,
    img: Pixel,
    title: "Pixel",
    category: "js",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Image Search ingine",
      },
      {
        icon: <FaGithub />,
        title: "Repo : ",
        desc: (
          <a
            href="https://github.com/BelalAboSeada/Pixel.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/BelalAboSeada/Pixel.git
          </a>
        ),
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: (
          <a
            href="https://BelalAboSeada.github.io/Pixel/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://BelalAboSeada.github.io/Pixel/
          </a>
        ),
      },
    ],
  },
  {
    id: 5,
    img: TwitterClone,
    title: "Twitter Clone",
    category: "Html&Css",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Clone for Twitter",
      },
      {
        icon: <FaGithub />,
        title: "Repo : ",
        desc: (
          <a
            href="https://BelalAboSeada.github.io/twitter-clone.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://BelalAboSeada.github.io/twitter-clone.git
          </a>
        ),
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: (
          <a
            href="https://BelalAboSeada.github.io/twitter-clone/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://BelalAboSeada.github.io/twitter-clone/
          </a>
        ),
      },
    ],
  },
  {
    id: 6,
    img: Crud,
    title: "Crud",
    category: "js",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Crud System Building With js",
      },
      {
        icon: <FaGithub />,
        title: "Repo : ",
        desc: (
          <a
            href="https://github.com/BelalAboSeada/cruds-system.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/BelalAboSeada/cruds-system.git
          </a>
        ),
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: (
          <a
            href="https://BelalAboSeada.github.io/cruds-system/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://BelalAboSeada.github.io/cruds-system/
          </a>
        ),
      },
    ],
  },
  {
    id: 7,
    img: Kasper,
    title: "Kasper",
    category: "Html&Css",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Landing Page",
      },
      {
        icon: <FaGithub />,
        title: "Repo : ",
        desc: (
          <a
            href="https://github.com/BelalAboSeada/kasper-templete.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/BelalAboSeada/kasper-templete.git
          </a>
        ),
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: (
          <a
            href="https://BelalAboSeada.github.io/kasper-templete/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://BelalAboSeada.github.io/kasper-templete/
          </a>
        ),
      },
    ],
  },
  {
    id: 8,
    img: starbucks,
    title: "starbucks",
    category: "Html&Css",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Landing Page",
      },
      {
        icon: <FaGithub />,
        title: "Repo : ",
        desc: (
          <a
            href="https://BelalAboSeada.github.io/starbucks/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://BelalAboSeada.github.io/starbucks/
          </a>
        ),
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: (
          <a
            href="https://github.com/BelalAboSeada/starbucks.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/BelalAboSeada/starbucks.git
          </a>
        ),
      },
    ],
  },
  {
    id: 9,
    img: Todo,
    title: "Todolist",
    category: "Html&Css",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Landing Page",
      },
      {
        icon: <FaGithub />,
        title: "Repo : ",
        desc: (
          <a
            href="https://github.com/BelalAboSeada/Todolist.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/BelalAboSeada/Todolist.git
          </a>
        ),
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: (
          <a
            href="https://BelalAboSeada.github.io/Todolist/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://BelalAboSeada.github.io/Todolist/
          </a>
        ),
      },
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
