import { TweenMax } from 'gsap'


const changeProject = (target) => {
  TweenMax.to(target, 0.5, {height:"100%"});
  TweenMax.to(target, 0.5, {height:"0%", delay: 1});
}

export default changeProject