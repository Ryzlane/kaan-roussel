import { TweenMax } from 'gsap'


const changeProjectColumn = (target) => {
  TweenMax.to(target, 0.5, {height:'100%', delay: 0});
  TweenMax.to(target, 0.5, {height:'0%', delay: 1.5});
}

const changeProjectFront = (target) => {
  TweenMax.to(target, 0.3, {opacity: 0})
  TweenMax.to(target, 0.3, {opacity: 1, delay: 1.5})
}

const openProjectBackground = () => {
  TweenMax.to('.project__container__visuals__background', 0.3, {height: '100vh', width: '100%'})
  TweenMax.to('.project__container__visuals__front', 0.3, {opacity: 0})
  TweenMax.to('.project__container__visuals__front', 0, {display: 'none', delay: 0.4})
  TweenMax.to('.big-main-title', 0.3, {transform: 'scale(0.98)'})
}

const closeProjectBackground = () => {
  TweenMax.set('.project__container', {height: '100%'})
  TweenMax.set('.project__container__visuals__front', {clearProps: 'display'})
  TweenMax.fromTo('.project__container__visuals__background', 0.3, {height: '100vh', width: '100%'}, {height: '100%', width: window.innerWidth > 900 ? '66%' : '100%'})
  TweenMax.fromTo('.project__container__visuals__front', 0.1, {opacity: 0}, {scale: 1, opacity: 1})
  TweenMax.set('.scroll-content', {height: '100vh'})
}
export { changeProjectColumn, changeProjectFront, openProjectBackground, closeProjectBackground }