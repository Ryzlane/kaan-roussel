import React, { Component } from 'react'

import infosMounting from './ProjectOpenAnimation'

import ProjectOpenContent from './ProjectOpenContent/ProjectOpenContent'

class ProjectOpen extends Component {
  componentDidMount() {
    infosMounting()
  }
  render() {
    const { header } = this.props.project.open
    return (
      <div className='project__open'>
        <div className="project__open__lines">
         <div className="project__open__lines__single project__open__lines__single--1"></div>
         <div className="project__open__lines__single project__open__lines__single--2"></div>
         <div className="project__open__lines__single project__open__lines__single--3"></div>
        </div>
        <div className="project__open__header">
          <div className="project__open__header__infos project__open__header--stagger">
            <div className="project__open__header__infos__block">
              <p className="project-label">WHEN</p>
              <p className="project-label-title">{header.when}</p>
            </div>
            <div className="project__open__header__infos__block">
              <p className="project-label">CLIENT</p>
              <p className="project-label-title">{header.client}</p>
            </div>
          </div>
          <div className="project__open__header__subtitle project__open__header--stagger">
            <p className='project-label'>{header.subtitle}</p>
          </div>
        </div>
        <ProjectOpenContent projectContent={this.props.project.open.content} />
      </div>
    )
  }
}

export default ProjectOpen