import { TweenMax } from 'gsap'

const aboutMount = () => {
  console.log('mounted')
  TweenMax.to('.about__container', 0.3, {top: 0})
}

const aboutUnmount = () => {
  console.log('mounted')
  TweenMax.to('.about__container', 0.3, {top: '100%'})
}

const contactMount = () => {
  console.log('mounted')
  TweenMax.to('.about__contact__block', 0.3, {opacity: 1, delay: 0.5})
}

const mouseHoverSM = () => {
  TweenMax.to('.cursor__container__point', 0.3, {width: 50, height: 50, opacity: 0.8})
  TweenMax.to('.cursor__container__around', 0.1, {opacity: 0})
}

const mouseLeaveSM = () => {
  TweenMax.to('.cursor__container__point', 0.3, {width: 10, height: 10, opacity: 1})
  TweenMax.to('.cursor__container__around', 0.1, {opacity: 1})
}

export { mouseHoverSM, mouseLeaveSM, aboutMount, contactMount, aboutUnmount }