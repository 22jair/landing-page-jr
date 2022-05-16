import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { animateScroll } from 'react-scroll'
import { 
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
  NavBtn,
  NavBtnLink
} from './Navbar.styles'

const Navbar = ({ pathData, toggleSidebar }) => {

  const [ scrollNav, setScrollNav ] = useState(false);
  
  const changeNav = () => {
    if(window.scrollY >= 80){
      setScrollNav(true);
    }else{
      setScrollNav(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
    return () => window.removeEventListener('scroll', changeNav);
  },[]);

  const toggleHome = () => {
    animateScroll.scrollToTop();
  }

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>          
            <NavLogo to="/" onClick={toggleHome}>Jr</NavLogo>          
            <NavMenu>
              {
                pathData.map(({ to, label }) => (
                  <NavItem key={label} >
                    <NavLink
                    to={to}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact={true}
                    offset={-80}
                  >{label}</NavLink>
                  </NavItem>
                ))
              }            
            </NavMenu>
            <NavBtn>
              <NavBtnLink to="/signin">Sign In</NavBtnLink>
            </NavBtn>
            <MobileIcon onClick={toggleSidebar} ><FaBars /></MobileIcon>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar