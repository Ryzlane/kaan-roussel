import { TweenMax } from 'gsap'

const infosMounting = () => {
  TweenMax.staggerTo('.project__open__header--stagger', 0.5, {bottom: 0, delay: 1, onComplete: clearNextProject}, 0.25)
  TweenMax.set('.is-project-page', {height: '100vh', overflow: 'hidden'})

}

const clearNextProject = () => {
  TweenMax.set('.next-project', {clearProps:"overflow, position, margin, top, left"})
  TweenMax.set('.next-project', {display:"inherit"})
  TweenMax.set('.next-project__container', {clearProps:"y, height"})
  TweenMax.set('.next-project__container__visuals__front', {clearProps:"scale, opacity"})
  TweenMax.set('.next-project__title__fill', {clearProps:"width"})
  TweenMax.set('.next-project__container__visuals__front', {clearProps:"scale, opacity"})
  TweenMax.set('.next-project__title--anim', {clearProps:"fontSize"})
  TweenMax.set('.is-project-page', {height: '100%', overflow: 'inherit'})
}

export default infosMounting