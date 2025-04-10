import {
    FaReact,
    FaHtml5,
    FaCss3,
    FaNodeJs,
    FaFacebook,
    FaInstagram,
    FaLinkedin,
} from "react-icons/fa";
import { BiLogoJavascript } from "react-icons/bi";
import { SiExpress, SiMongodb, SiMysql, SiWebpack} from "react-icons/si";
import {
    VscVscode,
    VscCommentUnresolved,
    VscTerminalPowershell,
} from "react-icons/vsc";
import { FaGitAlt, FaXTwitter, FaDribbble} from "react-icons/fa6";
import { MdGroups3 } from "react-icons/md";

//images



export const MENU_LINKS = [
    {id: "01", label: "Home", offset: -100, to: "hero" },
    {id: "02", label: "Skills", offset: -80, to: "skills" },
    {id: "03", label: "About Me", offset: -80, to: "about" },
    {id: "04", label: "Projects", offset: -80, to: "projects" },
    {id: "05", label: "Contact", offset: -80, to: "contact" },

];

export const STATS = [
    { id: "01", count: "10", label: `Years of \nExperience`},
    { id: "02", count: "12", label: `Certifications \nEarned`},
    { id: "03", count: "43", label: `Projects \nCompleted`},
    { id: "04", count: "37+", label: `Happly \nClients`},
];

export const SKILL_TABS = [
    {id: "01", label: "All", value: "all"},
    {id: "02", label: "Frontend", value: "frontend"},
    {id: "03", label: "Backend", value: "backend"},
    {id: "04", label: "Tools", value: "tools"},
    {id: "05", label: "Skills", value: "soft-skills"},
];

export const SKILLS = [
    {
        id: "01",
        icon: FaReact,
        skill: "React JS",
        progress: 95,
        type: "frontend",
        description: 
          "Experienced in building scalable, component-driven web applications using React.js. "
    },

    {
        id: "01",
        icon: FaReact,
        skill: "React JS",
        progress: 95,
        type: "frontend",
        description: 
          "Experienced in building scalable, component-driven web applications using React.js. "
    },

    {
        id: "01",
        icon: FaReact,
        skill: "React JS",
        progress: 95,
        type: "frontend",
        description: 
          "Experienced in building scalable, component-driven web applications using React.js. "
    },

    {
        id: "01",
        icon: FaReact,
        skill: "React JS",
        progress: 95,
        type: "frontend",
        description: 
          "Experienced in building scalable, component-driven web applications using React.js. "
    },

    {
        id: "01",
        icon: FaReact,
        skill: "React JS",
        progress: 95,
        type: "frontend",
        description: 
          "Experienced in building scalable, component-driven web applications using React.js. "
    },

    {
        id: "01",
        icon: FaReact,
        skill: "React JS",
        progress: 95,
        type: "frontend",
        description: 
          "Experienced in building scalable, component-driven web applications using React.js. "
    },

    {
        id: "01",
        icon: FaReact,
        skill: "React JS",
        progress: 95,
        type: "frontend",
        description: 
          "Experienced in building scalable, component-driven web applications using React.js. "
    },

    {
        id: "01",
        icon: FaReact,
        skill: "React JS",
        progress: 95,
        type: "frontend",
        description: 
          "Experienced in building scalable, component-driven web applications using React.js. "
    },

    {
        id: "01",
        icon: FaReact,
        skill: "React JS",
        progress: 95,
        type: "frontend",
        description: 
          "Experienced in building scalable, component-driven web applications using React.js. "
    }
];

export const ABOUT_ME = {
    content: `I'm a passionate Frontend Developer with a strong foundation in building responsive, user-friendly website
    \nMy journey in web  development started`,

    socialLinks: [
        {id: "01", label: "Facebook", icon: FaFacebook, link: "#"},
        {id: "02", label: "Instagram", icon: FaInstagram, link: "#"},
        {id: "03", label: "Twitter", icon: FaXTwitter, link: "#"},
        {id: "04", label: "LinkedIn", icon: FaLinkedin, link: "#"},
        {id: "05", label: "Dribble", icon: FaDribbble, link: "#"},
    ],

    email: "rish122002@gmail.com",
    phone: "+91 7004450064",
    LinkedIn: "",
};

export const PROJECTS = [
    {
        id: 1,
        title: "Full Stack App",
        //image: 
        tags:["React", "Express.js", "MongoDB",  "Node.js"],
    },
    {
        id: 1,
        title: "Full Stack App",
        //image: ,
        tags: ["React", "Express.js", "MongoDB",  "Node.js"],
    },
    {
        id: 1,
        title: "Full Stack App",
       // image: 
        tags: ["React", "Express.js", "MongoDB",  "Node.js"],
    },
    {
        id: 1,
        title: "Full Stack App",
        //image: 
        tags: ["React", "Express.js", "MongoDB",  "Node.js"],
    },
    {
        id: 1,
        title: "Full Stack App",
       // image: 
        tags: ["React", "Express.js", "MongoDB",  "Node.js"],
    },
]
