// Components
import { Profile } from "../../components/Profile";
import { NavBar } from "../../components/NavBar";
import { Skills } from "../../components/Skills";
import { Projects } from "../../components/Projects";
import { AboutMe } from "../../components/AboutMe";

// Hooks
import { useState } from "react";

// CSS
import "./style.css";

// Data
import { profileInfo } from "../../data/ProfileInfo";
import { social } from "../../data/Social";
import { skills } from "../../data/Skills";
import { projectsList } from "../../data/ProjectsList";
import { aboutMe } from "../../data/AboutMe";


export const App = () => {

  // States
  const [ sectionNav, SetSectionNav ] = useState('skills');
  const [ sectionSelected, setSectionSelected ] = useState('15px');

  // setar section NavBar
  const handleSectionNav = (item: string) => {
    if(item === 'skills') {
      setSectionSelected('15px');
    } else if (item === 'projects') {
      setSectionSelected('125px');
    } else if (item === 'aboutMe') {
      setSectionSelected('235px');
    }
    setTimeout (() => {
      SetSectionNav(item)
    }, 250)
  };

  return (
    <div className="app">
      <Profile name={profileInfo.name} job={profileInfo.job} image={profileInfo.image} social={social}/>
      <NavBar setSection={handleSectionNav} sectionSelected={sectionSelected}/>
      {sectionNav === 'skills' && <Skills skills={skills}/>}
      {sectionNav === 'projects' && <Projects projects={projectsList}/>}
      {sectionNav === 'aboutMe' && <AboutMe aboutMe={aboutMe}/>}
    </div>
  )
};