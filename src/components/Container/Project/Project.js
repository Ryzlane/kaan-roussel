import React from 'react'
import PropTypes from 'prop-types'
import { Link, Route } from 'react-router-dom'

import ProjectOpen from './ProjectOpen/ProjectOpen'
import ProjectOpenContentNextProject from './ProjectOpen/ProjectOpenContent/ProjectOpenContentNextProject/ProjectOpenContentNextProject';

import { changeProjectColumn, changeProjectFront, openProjectBackground, closeProjectBackground } from './ProjectAnimation'

class Project extends React.Component {
  static propTypes = {
    project: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)

    this.state = {
      project: this.props.project,
      parallaxX: 0,
      parallaxY: 0
    }

    this.columnLeft = React.createRef()
    this.columnRight = React.createRef()
    this.frontImage = React.createRef()

    this.parallax = this.parallax.bind(this)
  }

  componentDidMount() {
    if (this.props.page === "project") {
      openProjectBackground()
    }
  }

  componentDidUpdate(prevProps) {
    // parallax image front
    if (prevProps.mouse !== this.props.mouse) {
      this.parallax(this.props.mouse, this.frontImage.current)
    }

    // anims project change
    if (this.props.project !== this.state.project) {
      if (this.props.page === "") {
        changeProjectColumn(this.columnLeft.current)
        changeProjectColumn(this.columnRight.current)
        changeProjectFront(this.frontImage.current)
      }

      setTimeout(() => {
        this.setState({ project: this.props.project })
      }, 500)
    }

    // anims project open
    if (this.props.page !== prevProps.page && this.props.page === "project") {
      openProjectBackground()
    }
    if (this.props.page !== prevProps.page && this.props.page === "") {
      closeProjectBackground()
    }
  }

  parallax = (mouse) => {
  
    const parallax = { x: 0, y: 0 }
    const delta = { x: 0, y: 0 }
  
    delta.x = (mouse.mouseX / window.innerWidth - 0.5)
    delta.y = (mouse.mouseY / window.innerHeight - 0.5)
  
    parallax.x -= ((delta.x / 0.8 * 100) - parallax.x) * 0.5
    parallax.y -= ((delta.y / 0.8 * 100) - parallax.y) * 0.5

    this.setState({ parallaxX: parallax.x, parallaxY: parallax.y})
  }

  render() {
    const { project, parallaxX, parallaxY } = this.state
    const { nextProject, handleClickNextProject, nextProjectProgress } = this.props
    const isProjectPage = this.props.page === "project" ? 'is-project-page' : ''
    return (
      <div className={`project__container ${isProjectPage}`}>
        <div className="project__container__visuals">
          <div className='project__container__visuals__background'>
            <img src={project.backgroundImage} style={{ width: window.innerWidth }} alt='background' />
            <div className="project__container__visuals__background__filter"></div>
            <div className='project__container__visuals__background__columns'>
              <div ref={this.columnLeft} className='project__container__visuals__background__columns__left'></div>
              <div ref={this.columnRight} className='project__container__visuals__background__columns__right'></div>
            </div>
          </div>
          {/* style={{ transform: `translate(${parallaxX}px, ${parallaxY}px)` }} */}
          <div ref={this.frontImage} className='project__container__visuals__front'>
            <img className={project.className} src={project.frontImage} alt='illustration' />
          </div>
        </div>
        <Route path="/project/:name" render={() => 
          <div>
            {
              !nextProjectProgress &&
              <ProjectOpen project={project} />
            }
            <ProjectOpenContentNextProject handleClickNextProject={handleClickNextProject} project={nextProject} />
          </div>
        } 
        />
      </div>
    )
  }
}

export default Project