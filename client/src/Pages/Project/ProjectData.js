import { SiMaterialUi, SiJavascript, SiReact } from "react-icons/si";
import { DiNodejs, DiMongodb } from "react-icons/di";
import { FaHtml5, FaCss3Alt, FaNodeJs, FaBootstrap } from "react-icons/fa";

const allProject = [
  {
    name: "Calculator",
    github: "https://github.com/iriemena/calculator.git",
    view: "https://fortunecalculator.netlify.app/",
    html: <FaHtml5 />,
    css: <FaCss3Alt />,
  },

  {
    name: "Menu-Shop",
    github: "https://github.com/iriemena/menu-shop",
    view: "https://menushop.netlify.app/",
    html: <FaHtml5 />,
    css: <FaCss3Alt />,
    js: <SiJavascript />,
  },
  {
    name: "Questions",
    github: "https://github.com/iriemena/question",
    view: "https://fortunequestion.netlify.app/",
    html: <FaHtml5 />,
    css: <FaCss3Alt />,
    js: <SiJavascript />,
  },
  {
    name: "Item Lister",
    github: "https://github.com/iriemena/Item-Lister",
    view: "https://fortunelister.netlify.app/",
    html: <FaHtml5 />,
    css: <FaCss3Alt />,
    js: <SiJavascript />,
  },

  {
    name: "Counter",
    github: "https://github.com/iriemena/counter",
    view: "https://fortunecounter.netlify.app/",
    html: <FaHtml5 />,
    css: <FaCss3Alt />,
    js: <SiJavascript />,
  },
  {
    name: "Review",
    github: "https://github.com/iriemena/review",
    view: "https://fortunereview.netlify.app/",
    html: <FaHtml5 />,
    css: <FaCss3Alt />,
    js: <SiJavascript />,
  },
  {
    name: "Color Selector",
    github: "https://github.com/iriemena/color-selector",
    view: "https://colorselector.netlify.app/",
    html: <FaHtml5 />,
    css: <FaCss3Alt />,
    js: <SiJavascript />,
  },
  {
    name: "Trump's Quote",
    github: "https://github.com/iriemena/Donald-Trump-Quotes",
    view: "https://trumpquote.netlify.app/",
    html: <FaHtml5 />,
    css: <FaCss3Alt />,
    js: <SiJavascript />,
  },

  {
    name: "Wisdom Quote",
    github: "https://github.com/iriemena/Random-quotes",
    view: "https://fortunequotes.netlify.app/",
    html: <FaHtml5 />,
    css: <FaCss3Alt />,
    js: <SiJavascript />,
  },
  {
    name: "PassportJs Local",
    github: "https://github.com/iriemena/passportjs_local",
    view: "#",
    css: <FaCss3Alt />,
    node: <DiNodejs fontSize="large" />,
    express: <FaNodeJs />,
  },
  {
    name: "ExprJS Blog",
    github: "https://github.com/iriemena/expressJS-Blog",
    view: "#",
    css: <FaCss3Alt />,
    node: <DiNodejs />,
    express: <FaNodeJs />,
  },
  {
    name: "ExprJS Site",
    github: "https://github.com/iriemena/my-dynamic-website",
    view: "#",
    css: <FaCss3Alt />,
    node: <DiNodejs />,
    express: <FaNodeJs />,
  },
  {
    name: "Todo List",
    github: "https://github.com/iriemena/todo-list",
    view: "#",
    react: <SiReact />,
    css: <FaCss3Alt />,
    ui: <SiMaterialUi />,
  },
  {
    name: "Contact Manager",
    github: "https://github.com/iriemena/contact-manager",
    view: "#",
    react: <SiReact />,
    css: <FaCss3Alt />,
    ui: <SiMaterialUi />,
  },
  {
    name: "Website",
    github: "https://github.com/iriemena/website",
    view: "#",
    react: <SiReact />,
    node: <DiNodejs />,
    express: <FaNodeJs />,
    db: <DiMongodb />,
    ui: <SiMaterialUi />,
    bootstrap: <FaBootstrap />,
  },
];

export default allProject;
