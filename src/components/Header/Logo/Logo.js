import React from 'react'
import ReactSVG from 'react-svg'
import Vivus from 'vivus'
import { Link } from 'react-router-dom'

import LogoText from 'assets/logo/logotext.svg'
import LogoFrame from 'assets/logo/logoframe.svg'
import LogoCrown from 'assets/logo/logocrown.svg'

class Logo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      vivus: undefined
    }

    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
  }

  componentDidMount() {
    this.setState ({ vivus: new Vivus('logo__container__frame', {duration: 60, start: 'manual', file: LogoFrame}, null) })
  }

  handleMouseEnter() {
    this.state.vivus.play()

    this.props.handleHoverMenu()
  }

  handleMouseLeave() {
    this.state.vivus.reset()
    this.state.vivus.stop()

    this.props.handleLeaveMenu()
  }

  render() {
    const isPageNotHome = window.location.pathname !== '/'
    const isPageColorTxt = '#323232'
    const isPageColorCrown = '#192DFB'
    return (
      <Link to='/'>
        <div className='logo__container' onMouseEnter={() => this.handleMouseEnter()} onMouseLeave={() => this.handleMouseLeave()}>
          <div className="logo__container__crown">
            <div className='logo__container__crown__svg-container'>
              <ReactSVG src={LogoCrown} svgStyle={{ fill: isPageColorCrown }} alt="logo crown"/>
            </div>
          </div>
          <div id="logo__container__frame" className={`${isPageNotHome}`}></div>
          <div className={`logo__container__text ${isPageNotHome}`}>
            <ReactSVG src={LogoText} svgStyle={{ stroke: isPageColorTxt }} />
          </div>
        </div>
      </Link>
    )
  }
}

export default Logo
