import React, { Component } from 'react';
import ReactSVG from 'react-svg'

import LogoText from './../../assets/logo/logotext.svg'
import Twitter from './../../assets/social-icons/twitter.svg'
import Linkedin from './../../assets/social-icons/linkedin.svg'
import Dribbble from './../../assets/social-icons/dribbble.svg'
import Behance from './../../assets/social-icons/behance.svg'


class WaitingMobile extends Component {
  render() {
    return (
      <div className='waiting-mobile'>
        <div className='lines'>
          <div className={`lines__vertical lines__vertical--1`}></div>
          <div className='lines__vertical lines__vertical--2'></div>
          <div className={`lines__vertical lines__vertical--3`}></div>
          <div className={`lines__horizontal lines__horizontal--1`}></div>
          <div className={`lines__horizontal lines__horizontal--2`}></div>
          <div className={`lines__horizontal lines__horizontal--3`}></div>
        </div>
        <div className="waiting-mobile__header">
          <ReactSVG src={LogoText} svgStyle={{ stroke: '#323232' }}/>
        </div>
        <div className='waiting-mobile__content'>
          <div className="waiting-mobile__content__block-one">
            <h1 className='waiting-mobile__content__block-one__title'>
              <span className='waiting-mobile__content__block-one__title__surtitle'>Mobile version in</span>
              <span className='waiting-mobile__content__block-one__title__main'>construction</span>
            </h1>
          </div>
          <div className='waiting-mobile__content__block-two'>
            <p className='waiting-mobile__content__block-two__text project-regular-text'>But the desktop version is online! Seriously, it will not take much time and the mobile version is being made. Be patient :)</p>
            <div className='waiting-mobile__content__block-two__social-medias'>
              <a href='https://dribbble.com/KaanRoussel' target='_blank'>
                <ReactSVG src={Dribbble} alt='dribbble'/>
              </a>
              <a href='https://www.behance.net/kaanroussel' target='_blank'>
                <ReactSVG src={Behance} alt='behance'/>
              </a>
              <a href='https://twitter.com/kaanroussel' target='_blank'>
                <ReactSVG src={Twitter} alt='twitter'/>
              </a>
              <a href='https://www.linkedin.com/in/kaanroussel/' target='_blank'>
                <ReactSVG src={Linkedin} alt='linkedin'/>
              </a>
            </div>
          </div>
        </div>
        <div className="waiting-mobile__footer">
          <p className='waiting-mobile__footer__text'>
            Open in March<br />
            <span className='waiting-mobile__footer__text__caption'>(I guess)</span>
          </p>
        </div>
      </div>
    );
  }
}

export default WaitingMobile;