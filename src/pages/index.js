import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data';
import Services from '../components/Services';
import Footer from '../components/Footer';

const pathData = [
  { to: 'about', label: 'About', navbar: true },
  { to: 'discover', label: 'Discover', navbar: true },
  { to: 'services', label: 'Services', navbar: true },
  { to: 'signup', label: 'Sign up', navbar: true }
  // { to: 'signin', label: 'Sign in', navbar: false }
];

function Home() {

  const [ isOpen, setIsOpen ] = useState(false);

  const toggleSidebar = () => {    
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Navbar pathData={pathData} toggleSidebar={toggleSidebar} />
      <Sidebar pathData={pathData} isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <HeroSection />
      <InfoSection { ...homeObjOne }/>
      <InfoSection { ...homeObjTwo }/>
      <Services />
      <InfoSection { ...homeObjThree }/>
      <Footer />
    </>
  )
}

export default Home