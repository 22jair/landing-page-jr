import React from 'react'
import {
  SidebarContainer,
  CloseIcon,
  Icon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute
} from './Sidebar.styles'

const Sidebar = ({ pathData,  isOpen, toggleSidebar }) => {  
  return (
    <SidebarContainer onClick={toggleSidebar} isOpen={isOpen}>
      <Icon onClick={toggleSidebar}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          {
            pathData.map(({ to, label }) => (
              <SidebarLink 
                key={label}
                to={to}
                onClick={toggleSidebar}                
                smooth={true}
                duration={500}
                spy={true}
                exact={true}
                offset={-80}
              >{ label }</SidebarLink>
            ))
          }
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signin">Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar