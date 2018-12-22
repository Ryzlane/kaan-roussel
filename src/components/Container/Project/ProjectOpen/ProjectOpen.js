import React, { Component } from 'react'

import infosMounting from './ProjectOpenAnimation'

import ProjectOpenContent from './ProjectOpenContent/ProjectOpenContent'

class ProjectOpen extends Component {
  componentDidMount() {
    infosMounting()
  }
  render() {
    const { project } = this.props
    return (
      <div className='project__content'>
        <div className="project__content__header">
          <div className="project__content__header__infos project__content__header--stagger"></div>
          <div className="project__content__header__subtitle project__content__header--stagger"></div>
        </div>
        <ProjectOpenContent />
      </div>
    )
  }
}

export default ProjectOpen