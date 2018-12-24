import { TweenMax, Back } from 'gsap'

const infosMounting = () => {
  console.log("wow")
  TweenMax.staggerTo('.project__open__header--stagger', 0.5, {bottom: 0, delay: 1}, 0.25)
}

export default infosMounting