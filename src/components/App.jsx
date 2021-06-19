import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Skills from './Education/Skills';
import Education from './Education/Education';
import WorkExperience from './WorkExperience/WorkExperience';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import {
  heroData,
  aboutData,
  skillsData,
  educationData,
  workExperienceData,
  contactData,
  footerData,
} from '../mock/data';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [skills, setSkills] = useState([]);
  const [educationArr, setEducation] = useState([]);
  const [workExperience, setWorkExperience] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setSkills([...skillsData]);
    setEducation([...educationData]);
    setWorkExperience([...workExperienceData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider
      value={{ hero, about, skills, educationArr, workExperience, contact, footer }}
    >
      <Hero />
      <About />
      <Skills />
      <Education />
      <WorkExperience />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
