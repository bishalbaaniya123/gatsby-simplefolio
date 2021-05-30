import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Bishal Baaniya',
  subtitle: 'I am a full-stack web and mobile developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'Out-of-the-box thinker and research-oriented Computer Scientist/Engineer with extensive ' +
    'software development experience. Test-Driven Development (TDD) evangelist. Ultimate ' +
    'aim to revolutionize the tech industry in Nepal in the area of Cybersecurity and AI.',
  paragraphTwo: [
    'Former Freelancer at <a href="https://upwork.com" class="para-link" target="_blank">Upwork</a> (Involvement in over 66 projects)',
    'Co-founder at <a href="https://dallotech.com" class="para-link" target="_blank">Dallo Tech Pvt. Ltd.</a>',
    'Currently Working at <a href="https://turing.com" class="para-link" target="_blank">Turing.com</a>',
  ],
  paragraphThree:
    'Watch my short Turing video <a href="https://youtu.be/lZvKxoyzN78" class="para-link" target="_blank">here</a>',
  resume: 'https://drive.google.com/file/d/1VZJPzTQ11FIbxwc3kJH0oo-SFgi85s1w/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/bishalbaaniya',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/bishal-baaniya-84139516a/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/bishalbaaniya123',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
