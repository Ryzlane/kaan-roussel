import { TweenMax } from 'gsap'


const changeProjectColumn = (target) => {
  TweenMax.to(target, 0.5, {height:"100%"});
  TweenMax.to(target, 0.5, {height:"0%", delay: 1});
}

const changeProjectFront = (target) => {
  TweenMax.to(target, 0.3, {opacity: 0})
  TweenMax.to(target, 0.3, {opacity: 1, delay: 1})
}

const openProjectBackground = () => {
  TweenMax.to(".project__container__visuals__background", 0.3, {height: "100%", width: "100%"})
  TweenMax.to(".project__container__visuals__front", 0.3, {scale: 0.80, opacity: 0})
  TweenMax.to('.main-title--anim', 0.3, {fontSize: 160})
}

const closeProjectBackground = () => {
  TweenMax.fromTo(".project__container__visuals__background", 0.3, {height: "100vh", width: "100%"}, {height: "507px", width: "66%"})
  TweenMax.fromTo(".project__container__visuals__front", 0.3, {scale: 0.98, opacity: 0}, {scale: 1, opacity: 1})
}
export { changeProjectColumn, changeProjectFront, openProjectBackground, closeProjectBackground }