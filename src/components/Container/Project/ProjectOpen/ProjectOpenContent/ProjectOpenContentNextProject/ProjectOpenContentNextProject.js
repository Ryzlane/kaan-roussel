import React, { Component } from 'react'

import ProjectOpenContentNextProjectTitle from './ProjectOpenContentNextProjectTitle/ProjectOpenContentNextProjectTitle'

class ProjectOpenContentNextProject extends Component {
  render() {
    const { project } = this.props
    return (
      <div className='next-project'>
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
          <ProjectOpenContentNextProjectTitle title={project.title} />
        </div>
      </div>
    )
  }
}

export default ProjectOpenContentNextProject