import { TweenMax } from 'gsap'


const changeProjectColumn = (target) => {
  TweenMax.to(target, 0.5, {height:"100%"});
  TweenMax.to(target, 0.5, {height:"0%", delay: 1});
}

const changeProjectFront = (target) => {
  TweenMax.to(target, 0.3, {opacity: 0})
  TweenMax.to(target, 0.3, {opacity: 1, delay: 1})
}


export { changeProjectColumn, changeProjectFront }