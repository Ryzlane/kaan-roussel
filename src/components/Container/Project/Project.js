import React from 'react'
import PropTypes from 'prop-types'

import changeProject from './ProjectAnimation'

class Project extends React.Component {
  static propTypes = {
    project: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)

    this.state = {
      project: this.props.project,
    }

    this.columnLeft = React.createRef()
    this.columnRight = React.createRef()
  }

  componentDidUpdate() {
    if (this.props.project !== this.state.project) {

      changeProject(this.columnLeft.current)
      changeProject(this.columnRight.current)
      this.setState({ project: this.props.project })
    }
  }
  render() {
    const { project } = this.state
    return (
      <div className='project__container'>
        <div className="project__container__visuals">
          <div className='project__container__visuals__background'>
            <img src={project.backgroundImage} style={{ width: window.innerWidth }} alt='background' />
            <div className="project__container__visuals__background__filter"></div>
            <div class='project__container__visuals__background__columns'>
              <div ref={this.columnLeft} class='project__container__visuals__background__columns__left'></div>
              <div ref={this.columnRight} class='project__container__visuals__background__columns__right'></div>
            </div>
          </div>
          <div className='project__container__visuals__front'>
            <img src={project.frontImage} className={project.className} alt='illustration' />
          </div>
        </div>
      </div>
    )
  }
}

export default Project