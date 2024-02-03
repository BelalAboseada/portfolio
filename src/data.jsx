<<<<<<< HEAD
import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaGithub,
} from "react-icons/fa";
import { FiFileText, FiExternalLink } from "react-icons/fi";

import Movix from "./assets/Movix2.png";
import CodeZone from "./assets/Code Zone.png";
import Bondi from "./assets/Bondi.png";
import Pixel from "./assets/Pixel.png";
import TwitterClone from "./assets/TwitterClone.png";
import Crud from "./assets/Crud.png";
import Kasper from "./assets/Kasper.png";
import starbucks from "./assets/Starbuks.png";
import Todo from "./assets/Todo.png";

import Theme1 from './assets/blue-circle-png-8.png';
import Theme2 from './assets/Green.png';
import Theme3 from './assets/orange.png';
import Theme4 from './assets/Red.png';
import Theme5 from './assets/gold.png';
import Theme6 from './assets/Bink.png';
import Theme7 from './assets/Purple.png';
import Theme8 from './assets/Purple2.png';

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
    description: "balalaboseada@icloud.com",
  },
  {
    id: 10,
    title: "Langages : ",
    description: "swahili, English,Germany",
  },
];

export const stats = [
  {
    id: 1,
    no: "1",
    title: "Year of <br /> Experience",
  },

  {
    id: 2,
    no: "+20",
    title: "Completed <br /> Projects",
  },

  {
    id: 3,
    no: "15+",
    title: "Happy <br /> Customers",
  },

  {
    id: 4,
    no: "35+",
    title: " Awards <br /> Won",
  },
];

export const skills = [
  {
    id: 1,
    title: "Html",
    percentage: "80",
  },

  {
    id: 2,
    title: "Javascript",
    percentage: "75",
  },

  {
    id: 3,
    title: "Css",
    percentage: "80",
  },

  {
    id: 4,
    title: "React",
    percentage: "70",
  },
  {
    id: 5,
    title: "Redux",
    percentage: "50",
  },

  {
    id: 6,
    title: "Wordpress",
    percentage: "50",
  },

  {
    id: 7,
    title: "git",
    percentage: "60",
  },

  {
    id: 8,
    title: "GitHub",
    percentage: "65",
  },
  {
    id: 9,
    title: "Framer Motion",
    percentage: "35",
  },
  {
    id: 10,
    title: "sass",
    percentage: "35",
  },
  {
    id: 11,
    title: "Bootstrap",
    percentage: "70",
  },  {
    id: 12,
    title: "ReactBootstrap",
    percentage: "50",
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
            https://github.com/BelalAboSeda/Movix.git
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
            href="https://github.com/BelalAboSeda/code-zone.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/BelalAboSeda/code-zone.git
          </a>
        ),
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: (
          <a
            href="https://belalaboseda.github.io/code-zone/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://belalaboseda.github.io/code-zone/
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
            href="https://github.com/BelalAboSeda/bondi.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/BelalAboSeda/bondi.git
          </a>
        ),
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: (
          <a
            href="https://belalaboseda.github.io/bondi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://belalaboseda.github.io/bondi/
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
            href="https://github.com/BelalAboSeda/Pixel.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/BelalAboSeda/Pixel.git
          </a>
        ),
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: (
          <a
            href="https://belalaboseda.github.io/Pixel/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://belalaboseda.github.io/Pixel/
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
            href="https://belal-aboseda.github.io/twitter-clone.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://belal-aboseda.github.io/twitter-clone.git
          </a>
        ),
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: (
          <a
            href="https://belal-aboseda.github.io/twitter-clone/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://belal-aboseda.github.io/twitter-clone/
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
            href="https://github.com/BelalAboSeda/cruds-system.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/BelalAboSeda/cruds-system.git
          </a>
        ),
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: (
          <a
            href="https://belalaboseda.github.io/cruds-system/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://belalaboseda.github.io/cruds-system/
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
            href="https://github.com/Belal-AboSeda/kasper-templete.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/Belal-AboSeda/kasper-templete.git
          </a>
        ),
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: (
          <a
            href="https://belal-aboseda.github.io/kasper-templete/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://belal-aboseda.github.io/kasper-templete/
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
            href="https://belalaboseda.github.io/starbucks/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://belalaboseda.github.io/starbucks/
          </a>
        ),
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: (
          <a
            href="https://github.com/BelalAboSeda/starbucks.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/BelalAboSeda/starbucks.git
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
            href="https://github.com/BelalAboSeda/Todolist.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/BelalAboSeda/Todolist.git
          </a>
        ),
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: (
          <a
            href="https://belalaboseda.github.io/Todolist/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://belalaboseda.github.io/Todolist/
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
    color: '#00A9FF',
  },

  {
    id: 2,
    img: Theme2,
    color: '#41A145',
  },

  {
    id: 3,
    img: Theme3,
    color: '#FF5C26',
  },

  {
    id: 4,
    img: Theme4,
    color: ' #C0131A',
  },

  {
    id: 5,
    img: Theme5,
    color: '#FFCD4B',
  },

  {
    id: 6,
    img: Theme6,
    color: '#FF00FF',
  },

  {
    id: 7,
    img: Theme7,
    color: '#8F1FAC',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(271, 76%, 53%)',
  },

  // {
  //   id: 9,
  //   img: Theme9,
  //   color: 'hsl(88, 65%, 43%)',
  // },

  // {
  //   id: 10,
  //   img: Theme10,
  //   color: 'hsl(42, 100%, 50%)',
  // },
];
=======
import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaGithub,
} from "react-icons/fa";
import { FiFileText, FiExternalLink } from "react-icons/fi";

import Movix from "./assets/Movix2.png";
import CodeZone from "./assets/Code Zone.png";
import Bondi from "./assets/Bondi.png";
import Pixel from "./assets/Pixel.png";
import TwitterClone from "./assets/TwitterClone.png";
import Crud from "./assets/Crud.png";
import Kasper from "./assets/Kasper.png";
import starbucks from "./assets/Starbuks.png";
import Todo from "./assets/Todo.png";

import Theme1 from './assets/blue-circle-png-8.png';
import Theme2 from './assets/Green.png';
import Theme3 from './assets/orange.png';
import Theme4 from './assets/Red.png';
import Theme5 from './assets/gold.png';
import Theme6 from './assets/Bink.png';
import Theme7 from './assets/Purple.png';
import Theme8 from './assets/Purple2.png';

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
    description: "balalaboseada@icloud.com",
  },
  {
    id: 10,
    title: "Langages : ",
    description: "swahili, English,Germany",
  },
];

export const stats = [
  {
    id: 1,
    no: "1",
    title: "Year of <br /> Experience",
  },

  {
    id: 2,
    no: "+20",
    title: "Completed <br /> Projects",
  },

  {
    id: 3,
    no: "15+",
    title: "Happy <br /> Customers",
  },

  {
    id: 4,
    no: "35+",
    title: " Awards <br /> Won",
  },
];

export const skills = [
  {
    id: 1,
    title: "Html",
    percentage: "80",
  },

  {
    id: 2,
    title: "Javascript",
    percentage: "75",
  },

  {
    id: 3,
    title: "Css",
    percentage: "80",
  },

  {
    id: 4,
    title: "React",
    percentage: "70",
  },
  {
    id: 5,
    title: "Redux",
    percentage: "50",
  },

  {
    id: 6,
    title: "Wordpress",
    percentage: "50",
  },

  {
    id: 7,
    title: "git",
    percentage: "60",
  },

  {
    id: 8,
    title: "GitHub",
    percentage: "65",
  },
  {
    id: 9,
    title: "Framer Motion",
    percentage: "35",
  },
  {
    id: 10,
    title: "sass",
    percentage: "35",
  },
  {
    id: 11,
    title: "Bootstrap",
    percentage: "70",
  },  {
    id: 12,
    title: "ReactBootstrap",
    percentage: "50",
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
            https://github.com/BelalAboSeda/Movix.git
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
            href="https://github.com/BelalAboSeda/code-zone.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/BelalAboSeda/code-zone.git
          </a>
        ),
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: (
          <a
            href="https://belalaboseda.github.io/code-zone/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://belalaboseda.github.io/code-zone/
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
            href="https://github.com/BelalAboSeda/bondi.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/BelalAboSeda/bondi.git
          </a>
        ),
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: (
          <a
            href="https://belalaboseda.github.io/bondi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://belalaboseda.github.io/bondi/
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
            href="https://github.com/BelalAboSeda/Pixel.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/BelalAboSeda/Pixel.git
          </a>
        ),
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: (
          <a
            href="https://belalaboseda.github.io/Pixel/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://belalaboseda.github.io/Pixel/
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
            href="https://belal-aboseda.github.io/twitter-clone.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://belal-aboseda.github.io/twitter-clone.git
          </a>
        ),
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: (
          <a
            href="https://belal-aboseda.github.io/twitter-clone/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://belal-aboseda.github.io/twitter-clone/
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
            href="https://github.com/BelalAboSeda/cruds-system.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/BelalAboSeda/cruds-system.git
          </a>
        ),
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: (
          <a
            href="https://belalaboseda.github.io/cruds-system/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://belalaboseda.github.io/cruds-system/
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
            href="https://github.com/Belal-AboSeda/kasper-templete.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/Belal-AboSeda/kasper-templete.git
          </a>
        ),
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: (
          <a
            href="https://belal-aboseda.github.io/kasper-templete/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://belal-aboseda.github.io/kasper-templete/
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
            href="https://belalaboseda.github.io/starbucks/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://belalaboseda.github.io/starbucks/
          </a>
        ),
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: (
          <a
            href="https://github.com/BelalAboSeda/starbucks.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/BelalAboSeda/starbucks.git
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
            href="https://github.com/BelalAboSeda/Todolist.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/BelalAboSeda/Todolist.git
          </a>
        ),
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: (
          <a
            href="https://belalaboseda.github.io/Todolist/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://belalaboseda.github.io/Todolist/
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
    color: '#00A9FF',
  },

  {
    id: 2,
    img: Theme2,
    color: '#41A145',
  },

  {
    id: 3,
    img: Theme3,
    color: '#FF5C26',
  },

  {
    id: 4,
    img: Theme4,
    color: ' #C0131A',
  },

  {
    id: 5,
    img: Theme5,
    color: '#FFCD4B',
  },

  {
    id: 6,
    img: Theme6,
    color: '#FF00FF',
  },

  {
    id: 7,
    img: Theme7,
    color: '#8F1FAC',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(271, 76%, 53%)',
  },

  // {
  //   id: 9,
  //   img: Theme9,
  //   color: 'hsl(88, 65%, 43%)',
  // },

  // {
  //   id: 10,
  //   img: Theme10,
  //   color: 'hsl(42, 100%, 50%)',
  // },
];
>>>>>>> 61b7dec643d5f99903dc1bd44e8f63c4cfbbabc0
