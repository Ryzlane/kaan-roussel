import { TweenMax, Back, Circ } from 'gsap'

const calculStagger = (textLength, totalDuration) => {
  return totalDuration / textLength
}

const changeProjectTitleOut = (textLength) => {
  console.log(textLength)
  const totalDuration = 0.3
  const staggerDuration = calculStagger(textLength, totalDuration)
  TweenMax.staggerTo('.main-title__letter--stagger', totalDuration, {opacity: 0, scale: 0.9, y: -50, ease: Circ.easeInOut}, staggerDuration)
}

const changeProjectTitleIn = (textLength) => {
  const totalDuration = 0.3
  const staggerDuration = calculStagger(textLength, totalDuration)
  TweenMax.staggerFromTo('.main-title__letter--stagger', totalDuration, {opacity: 0,  scale: 0.9, y: -50}, {opacity: 1,  scale: 1, y: 0, ease: Circ.easeInOut}, staggerDuration)
}

const fillProjectTitle = () => {
  TweenMax.fromTo('.main-title__fill', 0.3,  {width: "0"}, {width: '100%', delay: 0.7})
}

const emptyProjectTitle = () => {
  TweenMax.to('.big-main-title', 0.3, {transform: "scale(1)"})
}

export { changeProjectTitleOut, changeProjectTitleIn, fillProjectTitle, emptyProjectTitle }