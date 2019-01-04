import React, { Component } from 'react'
import Scrollbar from 'smooth-scrollbar'
import ReactSVG from 'react-svg'

import { mouseHoverSM, mouseLeaveSM } from './AboutAnimation'

import Dribbble from 'assets/social-icons/dribbble.svg'
import Behance from 'assets/social-icons/behance.svg'
import Twitter from 'assets/social-icons/twitter.svg'
import Linkedin from 'assets/social-icons/linkedin.svg'
import Contact from 'assets/social-icons/contact.svg'


class About extends Component {
  constructor(props) {
    super(props)

    this.appendContact = this.appendContact.bind(this)
    this.removeContact = this.removeContact.bind(this)
  }
  componentDidMount() {
    Scrollbar.init(document.querySelector('.about__container'));

    this.appendContact()
  }

  componentWillUnmount() {
    this.removeContact()
  }

  removeContact() {
    var element = document.getElementById('about__contact');
    document.querySelector('body').removeChild(element);
  }

  appendContact = () => {

    document.querySelector('body').insertAdjacentHTML('beforeend', `
      <div id='about__contact'>
        <div class='about__contact__block'>
          <a href='mailto:hello@kaanroussel.com'>
            <img class='about__contact__block__circle' src='${Contact}' alt='contact'/>
            <span class='about__contact__block__emoji'>✌️</span>
          </a>
        </div>
      </div>`
    )
  }

  render() {
    return (
      <div className='about__container'>
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
            </div>

            <div className='about__content__right-side'>
              <div className='about__content__right-side__text-container'>
                <h3 className='about-text-title'>I can do</h3>
                <p className='list about-text'>
                  UX Designer<br />
                  UI Designer<br />
                  Art Director<br />
                  Interactive designer<br />
                  Creative director
                </p>
              </div>
              <div className='about__content__right-side__text-container'>
                <h3 className='about-text-title'>I have experience</h3>
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
                <h3 className='about-text-title'>I am looking for an internship</h3>
                <p className='about-text'>
                  Maybe you are loking for people like me to create beautiful design with you?
                  I’m glad to hear that, and I’m open for six months internship between July and October 2019.
                </p>
              </div>
              <div className='about__content__right-side__text-container'>
                <h3 className='about-text-title'>You can follow me</h3>
                <div className='social about-text'>
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
                </div>
              </div>
              <p className='about__content__right-side__credit'>
                Coded with love by <span className='about__content__right-side__credit--modified'><a href='https://github.com/Ryzlane' target='_blank'>Ryzlane Arsac-Gothière</a></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default About