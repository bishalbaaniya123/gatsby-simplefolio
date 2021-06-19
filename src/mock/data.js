import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Bishal Baaniya | Software Engineer', // e.g: 'Name | Developer'
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
    'Currently Working at <a href="https://legalfit.com" class="para-link">Legalfit</a> via <a href="https://turing.com" class="para-link" target="_blank">Turing.com</a>',
  ],
  // paragraphThree:
  //   'Watch my short Turing video <a href="https://youtu.be/lZvKxoyzN78" class="para-link" target="_blank">here</a>',
  resume: 'https://drive.google.com/file/d/1VZJPzTQ11FIbxwc3kJH0oo-SFgi85s1w/view?usp=sharing', // if no resume, the button will not show up
};

// SKILLS DATA
export const skillsData = [
  {
    title: 'Python/Django',
    percent: 90,
  },
  {
    title: 'VueJS',
    percent: 90,
  },
  {
    title: 'React',
    percent: 80,
  },
  {
    title: 'Test-Driven Dev',
    percent: 75,
  },
  {
    title: 'AI/ML',
    percent: 70,
  },
  {
    title: 'Cybersecurity',
    percent: 60,
  },
  {
    title: 'Data Science',
    percent: 50,
  },
  {
    title: 'Android',
    percent: 50,
  },
  {
    title: 'iOS',
    percent: 50,
  },
  {
    title: 'CI/CD',
    percent: 50,
  },
];

// EDUCATION DATA
export const educationData = [
  {
    id: nanoid(),
    title: 'IOE, Pulchowk Engineering Campus',
    years: '2014-2018',
    descArr: [
      'Established in 1972 A.D. (2029 B.S), it is one of the best and the most reputed engineering institution in Nepal.',
      'Minor Project: Shoppify, an e-commerce website for peer to peer clothes renting with the application of Artificial intelligence in searching for similar clothes',
      'Major Project: Network Intrusion Detection system using machine learning',
      'Aggregate Percent: 71.62%',
    ],
  },
  {
    id: nanoid(),
    title: "St. Xavier's College, Maitighar",
    years: '2010-2012',
    descArr: [
      "One of the most recognized education institutions in the world, St. Xavier's has been providing quality education in Nepal since 1988 A.D.",
      'Percentage Summary:',
      'Grade 11: 80.2%',
      'Grade 12: 80.4%',
      'Aggregate Percent: 80.3%',
    ],
  },
];

// WORK EXPERIENCE DATA
export const workExperienceData = [
  {
    id: nanoid(),
    img: 'legalfit.png',
    title: 'Legalfit',
    years: 'Mar 2018 – Present',
    position: 'Software Engineer',
    info:
      'A US-based company that specializes in building websites and providing data analytics services for attorneys in the US.',
    url: 'https://legalfit.com',
  },
  {
    id: nanoid(),
    img: 'turing.png',
    title: 'Turing.com',
    years: 'Mar 2018 – Present',
    info:
      'Industry leading remote work matchmaking company that hires only the top 1% of the applicants.',
    url: 'https://turing.com',
  },
  {
    id: nanoid(),
    img: 'dallotech.png',
    title: 'Dallo Tech Pvt. Ltd.',
    years: 'Nov 2018 – Mar 2020',
    position: 'Sr. Frontend Developer / Cybersecurity and ML Consultant',
    info:
      'A Nepal-based company co-founded by Pulchowk Engineering Campus graduates\n' +
      'with the central aim to make Nepal a digitally secure country.',
    url: 'https://dallotech.com',
  },
  {
    id: nanoid(),
    img: 'infotmt.png',
    title: 'InfoTMT Pvt. Ltd.',
    years: 'Apr, 2018 - Apr, 2019',
    position: 'Software Developer (ReactJS and NodeJS)',
    info:
      'InfoTMT is a US based technology company with an offshore development center providing advantage of working with highly experienced US solutions architects and agilists while reaping the cost benefits of an offshore software development team.',
    url: 'https://infotmt.com',
  },
  {
    id: nanoid(),
    img: 'univhub.png',
    title: 'Univhub',
    years: 'Sep, 2016 - Nov, 2016',
    position: 'Laravel and Django Frontend and Backend Developer',
    info:
      'Univhub is an online web application for abroad studies which allows you to search and apply from a list of over 7000 universities in USA and Australia.',
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to chat with me? Awesome!',
  btn: '',
  email: 'bishalbaaniya@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://facebook.com/bishalbaaniya',
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
