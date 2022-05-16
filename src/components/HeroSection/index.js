import React, { useState } from 'react'
import Video from '../../videos/video.mp4'
import { Button } from '../Button.Styles'
import { 
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,  
  ArrowForward,
  ArrowRight
} from './Hero.Styles'

const HeroSection = () => {

  const [ hover, setHover ] = useState(false);

  const onHover = () => {
    setHover(!hover);
  }

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4'></VideoBg>
      </HeroBg>
      <HeroContent>
        <HeroH1>Virtual Banking Made Easy</HeroH1>
        <HeroP>
          Sign up for a new accoun today and recive $250 in credit towards your next payment.
        </HeroP>
        <HeroBtnWrapper>
          <Button 
            to='signup'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary={true}
            dark={true}
            smooth={true}
            duration={500}
            spy={true}
            exact={true}
            offset={-80}
          >
            Get started <ArrowForward $hover={hover} /> <ArrowRight $hover={hover} />
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection