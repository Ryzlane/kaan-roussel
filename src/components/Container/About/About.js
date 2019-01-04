import React, { Component } from 'react'
import Scrollbar from 'smooth-scrollbar'
import ReactSVG from 'react-svg'

import { mouseHoverSM, mouseLeaveSM } from './AboutAnimation'

import Dribbble from 'assets/social-icons/dribbble.svg'
import Behance from 'assets/social-icons/behance.svg'
import Twitter from 'assets/social-icons/twitter.svg'
import Linkedin from 'assets/social-icons/linkedin.svg'


class About extends Component {
  componentDidMount() {
    Scrollbar.init(document.querySelector('.home'));
  }
  render() {
    return (
      <div className='about'>
        <div className='about__background-line'></div>

        <div className='about__content'>
          <div className='about__content__catch-phrase'>
            <h2 className='about__content__catch-phrase__content'>
              Kaan Roussel.<br />
              <span className='about__content__catch-phrase__content--blue'>Interactive</span> Designer.
            </h2>
            <p className='about__content__catch-phrase__content__subtitle'>Just add the trendy name you saw on Awwwards or Medium.</p>
          </div>
          <div className='about__content__left-side'>
            I'm a block, left ✌️
          </div>
          <div className='about__content__right-side'>
            <div className='about__content__right-side__text-container'>
              <h3>I can do</h3>
              <p className='list'>
                UX Designer<br />
                UI Designer<br />
                Art Director<br />
                Interactive designer<br />
                Creative director
              </p>
            </div>
            <div className='about__content__right-side__text-container'>
              <h3>I have experience</h3>
              <div className='about__content__right-side__text-container__block'>
                <span className='about__content__right-side__text-container__block__date'>2018</span>
                <div className='about__content__right-side__text-container__block__sub'>
                  <h4 className='about__content__right-side__text-container__block__sub__company'>Honoré Gaming</h4>
                  <span className='about__content__right-side__text-container__block__sub__job'>UX/UI Designer</span>
                </div>
              </div>
              <div className='about__content__right-side__text-container__block'>
                <span className='about__content__right-side__text-container__block__date'>2017</span>
                <div className='about__content__right-side__text-container__block__sub'>
                  <h4 className='about__content__right-side__text-container__block__sub__company'>Sportytech</h4>
                  <span className='about__content__right-side__text-container__block__sub__job'>UX/UI Designer</span>
                </div>
              </div>
            </div>
            <div className='about__content__right-side__text-container'>
              <h3>I am looking for an internship</h3>
              <p>
                Maybe you are loking for people like me to create beautiful design with you?
                I’m glad to hear that, and I’m open for six months internship between July and October 2019.
              </p>
            </div>
            <div className='about__content__right-side__text-container'>
              <h3>You can follow me</h3>
              <p className='social'>
                <a onMouseOver={() => mouseHoverSM()} onMouseLeave={() => mouseLeaveSM()} href='https://dribbble.com/KaanRoussel' target='_blank'>
                  <ReactSVG src={Dribbble} alt='dribbble'/>
                </a>
                <a onMouseOver={() => mouseHoverSM()} onMouseLeave={() => mouseLeaveSM()} href='https://www.behance.net/kaanroussel' target='_blank'>
                  <ReactSVG src={Behance} alt='behance'/>
                </a>
                <a onMouseOver={() => mouseHoverSM()} onMouseLeave={() => mouseLeaveSM()} href='https://twitter.com/kaanroussel' target='_blank'>
                  <ReactSVG src={Twitter} alt='twitter'/>
                </a>
                <a onMouseOver={() => mouseHoverSM()} onMouseLeave={() => mouseLeaveSM()} href='https://www.linkedin.com/in/kaanroussel/' target='_blank'>
                  <ReactSVG src={Linkedin} alt='linkedin'/>
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* <div className='about__left-side'>
        </div>

        <div className='about__right-side about-text'>
          <div className='about__right-side__text-container'>
            <div className='about__right-side__text-container__paragraph'>
              <h1 className='about-text-title'>Bunch of things about me</h1>
              <p>
                Hi ! I’m <span className='about-text--modified'>Kaan Roussel</span>, nice to meet you. I’m a UX/UI Designer based in Paris.
                Everyday I learn, read and practice to create clean interfaces as possible.
                It’s beautiful to have a passion and a work at the same time, don’t you think ?
              </p>
            </div>
            <div className='about__right-side__text-container__footer'>
              <p className='about__right-side__text-container__footer__icon'>✌️</p>
              <p className='about__right-side__text-container__footer__dev-credit'>
                Coded with love by <span className='about-text--modified'>Ryzlane Arsac-Gothière</span>
              </p>
            </div>
          </div>
        </div> */}
      </div>
    )
  }
}
export default About