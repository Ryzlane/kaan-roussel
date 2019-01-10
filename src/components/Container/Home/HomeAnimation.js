import { TweenMax } from 'gsap'


const goNextProject = () => {
  TweenMax.to('.next-project__title__fill', 0.3, {width: '100%'})
  TweenMax.to('.next-project__title--anim', 0.3, {fontSize: 160, delay: 0.5, onComplete: goNextProject2})
}

const goNextProject2 = () => {
  TweenMax.to('.project__open', 0.3, {opacity: 0, y: -20})
  TweenMax.to('.next-project', 0.0, {overflow: 'initial'})
  TweenMax.to('.next-project__container', 0.5, {y: "-50%", delay: 1})
  TweenMax.to('.next-project__container__visuals__front', 0.3, {scale: 0.80, opacity: 0, delay: 1.5})
  TweenMax.to('.next-project__container', 0.5, {height: "100%", y: "0%", delay: 1.5, onComplete: goNextProject3})
}

const goNextProject3 = () => {
  TweenMax.to('.project__open', 0, {display: 'none'})
  TweenMax.to('.next-project', 0, {position: 'absolute', margin: '0', top: 0, left: 0})
  TweenMax.to('.scroll-content', 0, {transform: 'translate3d(0px, 0px, 0px) !important'})
  TweenMax.to('.project__open', 0, {display: 'initial', delay: 2.5})
}

const mouseHoverProject = () => {
  TweenMax.to('.cursor__container__hover-project', 0.05, {opacity: 1})
}

const mouseLeaveProject = () => {
  TweenMax.to('.cursor__container__hover-project', 0.05, {opacity: 0})
}

export { goNextProject, mouseHoverProject, mouseLeaveProject }