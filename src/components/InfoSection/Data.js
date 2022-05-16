import imgSvg1 from './../../images/svg-1.svg';
import imgSvg2 from './../../images/svg-2.svg';
import imgSvg3 from './../../images/svg-3.svg';

export const homeObjOne = {
  id: 'about',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'PREMIUM BANK',
  headline: 'Unlimited Transactions with zero fees',
  description: 'Get access to out exclusive app that allows you to send unlimited transactions whitout getting charged any fees. You can also get access to our exclusive app that allows you to send unlimited transactions whitout getting charged any fees. You can also get access to our exclusive app that allows you to send unlimited transactions whitout getting charged any fees.',
  buttonLabel: 'Get Started',
  imgStart: false, // if it's true in large devices show at the first position
  img: imgSvg1,
  alt: 'Car',
  dark: true,
  primary: true,
  darkText: false,
}

export const homeObjTwo = {
  id: 'discover',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Unlimited Access',
  headline: 'Unlimited Transactions with zero fees',
  description: 'Get access to out exclusive app that allows you to send unlimited transactions whitout getting charged any fees. You can also get access to our exclusive app that allows you to send unlimited transactions whitout getting charged any fees. You can also get access to our exclusive app that allows you to send unlimited transactions whitout getting charged any fees.',
  buttonLabel: 'Learn More',
  imgStart: true, // if it's true in large devices show at the first position
  img: imgSvg2,
  alt: 'Piggybank',
  dark: false,
  primary: false,
  darkText: true,
}

export const homeObjThree = {
  id: 'signup',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Join Our Team',
  headline: 'Creating an account is extremely easy',
  description: 'Get everything set up and ready in under 10 meninutes. All you need to do is add your information and you are ready to go.',
  buttonLabel: 'Start Now',
  imgStart: false, // if it's true in large devices show at the first position
  img: imgSvg3,
  alt: 'Paper',
  dark: false,
  primary: false,
  darkText: true,
}