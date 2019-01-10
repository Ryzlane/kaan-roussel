import React, { Component } from 'react'

class ProjectOpenContentIntro extends Component {
  render() {
    const { intro } = this.props

    return (
      <div className="project__intro">
        <p className="project__intro__text project-intro-text" dangerouslySetInnerHTML={{__html: intro.text}}></p>
        <div className="project__intro__infos">
          <div className="project__intro__infos__block">
            <p className="project-label">ROLE</p>
            <p className="project-label-title" dangerouslySetInnerHTML={{__html: intro.role}}></p>
          </div>
          <div className="project__intro__infos__block">
            <p className="project-label">URL</p>
            <p className="project-label-title--link">
              {
                intro.url.map(singleUrl => 
                  <a href={singleUrl.link} target='_blank'>{singleUrl.title}</a>
                )
              }
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectOpenContentIntro