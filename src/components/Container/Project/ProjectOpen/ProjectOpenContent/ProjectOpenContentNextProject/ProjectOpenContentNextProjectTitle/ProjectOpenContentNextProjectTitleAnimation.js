import { TweenMax, Back } from 'gsap'


const fillProjectTitle = () => {
  TweenMax.to('.next-project__title__fill', 0.3, {width: '100%'})
  TweenMax.to('.next-project__title--anim', 0.3, {fontSize: 160, delay: 0.5})
}

export default fillProjectTitle