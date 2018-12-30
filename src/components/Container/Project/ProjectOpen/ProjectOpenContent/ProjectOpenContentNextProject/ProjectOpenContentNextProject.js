import React, { Component } from 'react'

import ProjectOpenContentNextProjectTitle from './ProjectOpenContentNextProjectTitle/ProjectOpenContentNextProjectTitle'

class ProjectOpenContentNextProject extends Component {
  constructor(props) {
    super(props)

    this.nextProject = React.createRef()
  }
  render() {
    const { project, handleClickNextProject } = this.props
    return (
      <div ref={this.nextProject} className='next-project'>
        <div className="next-project__container">
          <div className='next-project__container__visuals'>
            <div className="next-project__container__visuals__background">
              <img src={project.backgroundImage} style={{ width: window.innerWidth }} alt='background' />
              <div className="next-project__container__visuals__background__filter"></div>
            </div>
            <div className="next-project__container__visuals__front">
              <img className={project.className} src={project.frontImage} alt='illustration' />
            </div>
          </div>
          <div className='next-project__title' onClick={() => handleClickNextProject(this.nextProject)}>
            <ProjectOpenContentNextProjectTitle title={project.title} />
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectOpenContentNextProject