import React from 'react'
import { animateScroll } from 'react-scroll'
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin
} from 'react-icons/fa'
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinksItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from './Footer.styles';

const Footer = () => {

  const toggleHome = () => {
    animateScroll.scrollToTop();
  }

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          
          <FooterLinksWrapper>
            <FooterLinksItems>
              <FooterLinkTitle>About us</FooterLinkTitle>              
              <FooterLink to="/">How it works</FooterLink>
              <FooterLink to="/">Testimonials</FooterLink>
              <FooterLink to="/">Carrers</FooterLink>
              <FooterLink to="/">Investors</FooterLink>
              <FooterLink to="/">Terms of Service</FooterLink>
            </FooterLinksItems>
            <FooterLinksItems>
              <FooterLinkTitle>Contact us</FooterLinkTitle>            
              <FooterLink to="/">Contact</FooterLink>
              <FooterLink to="/">Support</FooterLink>
              <FooterLink to="/">Destinations</FooterLink>
              <FooterLink to="/">Sponsorships</FooterLink>
            </FooterLinksItems>
          </FooterLinksWrapper>

          <FooterLinksWrapper>
            <FooterLinksItems>
              <FooterLinkTitle>Videos</FooterLinkTitle>            
              <FooterLink to="/">Submit Video</FooterLink>
              <FooterLink to="/">Ambassadors</FooterLink>
              <FooterLink to="/">Agency</FooterLink>
              <FooterLink to="/">Influencer</FooterLink>
            </FooterLinksItems>
            <FooterLinksItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>            
              <FooterLink to="/">Instagram</FooterLink>
              <FooterLink to="/">Facebook</FooterLink>
              <FooterLink to="/">Youtube</FooterLink>
              <FooterLink to="/">Twitter</FooterLink>
            </FooterLinksItems>
          </FooterLinksWrapper>

        </FooterLinksContainer>

        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo onClick={toggleHome}>
              Jr
            </SocialLogo>
            <WebsiteRights>
              Jr © {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" aria-label="Facebook"><FaFacebook/></SocialIconLink>
              <SocialIconLink href="/" aria-label="Instagram"><FaInstagram/></SocialIconLink>
              <SocialIconLink href="/" aria-label="Youtube"><FaYoutube/></SocialIconLink>
              <SocialIconLink href="/" aria-label="Linkedin"><FaLinkedin/></SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>

      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer