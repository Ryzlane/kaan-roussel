import { TweenMax, Back } from 'gsap'


const changeProjectTitle = () => {
  // TweenMax.staggerTo('.main-title__letter', 0.3, {opacity: 0, scale: 0.9, y: -50, ease: Back.easeOut}, 0.1);

  TweenMax.staggerFrom('.main-title__letter', 0.5, {opacity: 0, scale: 0.9, y: 50, ease: Back.easeOut, delay: 1}, 0.2);
}

export default changeProjectTitle