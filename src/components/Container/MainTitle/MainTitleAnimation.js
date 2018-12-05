import { TweenMax, Back } from 'gsap'

const calculStagger = (textLength, totalDuration) => {
  return totalDuration / textLength
}

const changeProjectTitle = (textLength) => {
  const totalDuration = 1
  const staggerDuration = calculStagger(textLength, totalDuration)
  TweenMax.staggerTo('.main-title__letter', totalDuration, {opacity: 0, scale: 0.9, y: -50, ease: Back.easeOut}, staggerDuration, changeProjectTitleIn, [totalDuration, staggerDuration])
}

const changeProjectTitleIn = (totalDuration, staggerDuration) => {
  TweenMax.staggerFromTo('.main-title__letter', totalDuration, {opacity: 0,  scale: 0.9, y: -50}, {opacity: 1,  scale: 1, y: 0, delay: 0.5, ease: Back.easeOut}, staggerDuration)

}

export default changeProjectTitle