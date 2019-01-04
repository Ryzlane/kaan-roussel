import { TweenMax } from 'gsap'

const mouseHoverSM = () => {
  TweenMax.to('.cursor__container__point', 0.3, {width: 50, height: 50, opacity: 0.8});
  TweenMax.to('.cursor__container__around', 0.1, {opacity: 0});
}

const mouseLeaveSM = () => {
  TweenMax.to('.cursor__container__point', 0.3, {width: 10, height: 10, opacity: 1});
  TweenMax.to('.cursor__container__around', 0.1, {opacity: 1});
}

export { mouseHoverSM, mouseLeaveSM }