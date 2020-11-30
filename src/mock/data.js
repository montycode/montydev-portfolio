import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Omar Montoya', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello! My name is',
  name: 'Omar Montoya',
  subtitle: 'I work as a frontend web developer with ReactJs!',
  cta: 'Know More',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'Hello! My name is Omar Montoya. I work as front end web developer. I have passion for web design, minimalist and easy to use interfaces.',
  paragraphTwo: 'I love working with technologies like React with a MERN stack.',
  paragraphThree: 'I have experience working with REST API architecture.',
  resume: 'https://drive.google.com/file/d/1xRuI3kWTKghfTAHLcHGNDZZJtegLpSt4/view', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Coming Soon...',
    info: ' ',
    info2: ' ',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to work with me? Awesome!',
  btn: '',
  email: 'omar@montydev.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/monty_code',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/montycode/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/montycode',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
