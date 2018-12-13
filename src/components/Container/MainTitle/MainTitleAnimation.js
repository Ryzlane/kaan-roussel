import { TweenMax, Back } from 'gsap'

const calculStagger = (textLength, totalDuration) => {
  return totalDuration / textLength
}

const changeProjectTitle = (textLength) => {
  console.log(textLength)
  const totalDuration = 1
  const staggerDuration = calculStagger(textLength, totalDuration)
  TweenMax.staggerTo('.main-title__letter--stagger', totalDuration, {opacity: 0, scale: 0.9, y: -50, ease: Back.easeOut}, staggerDuration)
}

const changeProjectTitleIn = (textLength) => {
  const totalDuration = 1
  const staggerDuration = calculStagger(textLength, totalDuration)
  TweenMax.staggerFromTo('.main-title__letter--stagger', totalDuration, {opacity: 0,  scale: 0.9, y: -50}, {opacity: 1,  scale: 1, y: 0, ease: Back.easeOut}, staggerDuration)
}

const fillProjectTitle = () => {
  TweenMax.fromTo('.main-title__fill', 0.3,  {width: "0"}, {width: '100%', delay: 1})
}

export { changeProjectTitle, changeProjectTitleIn, fillProjectTitle }