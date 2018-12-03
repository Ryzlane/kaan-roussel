import { TweenMax, Back } from 'gsap'


const changeProject = (target) => {
  TweenMax.to(target, 1, {height:"100%", ease: Back.easeInOut});
  TweenMax.to(target, 1, {height:"0%", delay: 1});
}

export default changeProject