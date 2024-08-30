import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: motion,
    name: "Android Studio",
    type: "Animation",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "HappyMonk.AI",
    // icon: ICON,
    iconBg: "#accbe1",
    date: "Dec-2022 to Apr-2024",
    points: [
      "Developing and maintaining web applications using Next.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Digitally Next",
    // icon: ICON,
    iconBg: "#accbe1",
    date: "April-2024 to Present",
    points: [
      "Developing and maintaining web applications using Next.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",

 
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/sudh-202/",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/sudhanshu-srivastava-1a17b51b7/",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "PriceWise",
    description:
      "Developed using Next.js and Bright Data's webunlocker, this e-commerce product scraping site is designed to assist users in making informed decisions. It notifies users when a product drops in price and helps competitors by alerting them when the product is out of stock, all managed through cron jobs.",
    link: "https://github.com/sudh-202/pricefiler",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Lingo",
    description:
      " A language learning app using Next.js and React for the frontend, Drizzle for managing smart contract interactions, and Stripe for payment processing. This app will offer interactive lessons, quizzes, and a user-friendly interface for tracking progress and managing subscriptions.",
    link: "https://github.com/sudh-202/duolingo_clone_v.1",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "CarHub",
    description:
      "A basic car game project to learn about the javascript and CSS concepts that helps to build my skill set and core skill set in web development.",
    link: "https://github.com/sudh-202/autohubV.1",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Genius",
    description:
      "Build a SaaS AI platform using Next.js 13 and React for the frontend, Tailwind for styling, Prisma for database management, and Stripe for payments. Deploy the application on Vercel for a seamless and scalable solution.",
    link: "https://github.com/sudh-202/saas_platform",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "LMS",
    description:
      "A LMS with featues like student/teacher admin dashboard, course creation, video upload and many more features.",
    link: "https://github.com/sudh-202/lmsV1",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "Figma Clone",
    description:
      "A Figma clone with all features included in figama original app and also some extra features",
    link: "https://github.com/sudh-202/figma_clone",
  },
];
