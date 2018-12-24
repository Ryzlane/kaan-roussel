import React, { Component } from 'react'

class ProjectOpenContentIntro extends Component {
  render() {
    const { intro } = this.props
    return (
      <div className="project__intro">
        <p className="project__intro__text project-intro-text">
          {intro.text}
        </p>
        <div className="project__intro__infos">
          <div className="project__intro__infos__block">
            <p className="project-label">ROLE</p>
            <p className="project-label-title">{intro.role}</p>
          </div>
          <div className="project__intro__infos__block">
            <p className="project-label">URL</p>
            <p className="project-label-title--link">
              {
                intro.url.map(singleUrl => 
                  <a src={singleUrl.link}>{singleUrl.title}</a>
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