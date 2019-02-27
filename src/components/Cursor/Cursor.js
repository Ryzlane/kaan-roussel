import React from 'react'
import PropTypes from 'prop-types'
import ReactSVG from 'react-svg'

import LetsSee from './../../assets/cursor/see.svg'

class Cursor extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isHoverLogo: false
    }

    this.cursorAround = React.createRef()
    this.cursor = React.createRef()
    this.cursorHoverProject = React.createRef()

    this.handleMouseMove = this.handleMouseMove.bind(this)
    this.handleMouseDown = this.handleMouseDown.bind(this)
    this.handleMouseUp = this.handleMouseUp.bind(this)
  }

  componentDidUpdate() {
    const { isHoverMenuPosition } = this.props

    if (isHoverMenuPosition) {
        this.cursorAround.current.style.left = isHoverMenuPosition.left + 'px'
        this.cursorAround.current.style.top = isHoverMenuPosition.top + 'px'
        this.cursor.current.style.left = isHoverMenuPosition.left + 'px'
        this.cursor.current.style.top = isHoverMenuPosition.top + 'px'
    }
  }

  handleMouseMove(e, currentPage) {
    this.cursor.current.style.left = e.clientX + 'px'
    this.cursor.current.style.top = e.clientY + 'px'

    this.cursorAround.current.style.left = e.clientX + 'px'
    this.cursorAround.current.style.top = e.clientY + 'px'

    if (currentPage === '') {
      this.cursorHoverProject.current.style.left = e.clientX + 'px'
      this.cursorHoverProject.current.style.top = e.clientY + 'px'
    }
  }
  
  handleMouseDown() {
    this.cursor.current.classList.add('is-hold')
    this.cursorAround.current.classList.add('is-hold')
  }

  handleMouseUp() {
    this.cursor.current.classList.remove('is-hold')
    this.cursorAround.current.classList.remove('is-hold')
  }

  render() {
    const { isHoverMenu, isHoverMenuPosition, isHoverSM, currentPage } = this.props
    let isHoverMenuType = !isHoverMenu ? '' : isHoverMenuPosition ? 'is-hover-menu' : 'is-hover-logo'
    let isHoverSMClass = isHoverSM ? 'is-hover-social-media' : ''
    return (
      <div  
        ref={this.globalCursorContainer} 
        className={`cursor ${isHoverMenuType} ${isHoverSMClass}`}
        onMouseMove={(e) => this.handleMouseMove(e, currentPage)}
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
            
      >
        <div className='cursor__container'>
          {
            currentPage === '' &&
            <div ref={this.cursorHoverProject} className='cursor__container__hover-project'>
              <ReactSVG src={LetsSee} />
            </div>
          }
          <div ref={this.cursorAround} className='cursor__container__around'></div>
          <div ref={this.cursor} className='cursor__container__point'></div>
        </div>
        {this.props.children}
      </div>
    )
  }
}

// Cursor.propTypes = {
//   isHoverMenu: PropTypes.bool,
//   isHoverMenuPosition: PropTypes.element,
//   children: PropTypes.element.isRequired
// }

export default Cursor