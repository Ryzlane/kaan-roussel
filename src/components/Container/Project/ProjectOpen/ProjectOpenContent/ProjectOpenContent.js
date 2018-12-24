import React, { Component } from 'react'
import ProjectOpenContentIntro from './ProjectOpenContentIntro/ProjectOpenContentIntro';

class ProjectOpenContent extends Component {
  render() {
    const { projectContent } = this.props
    return (
      <div className='project__content'>
        <ProjectOpenContentIntro intro={projectContent.intro} />
      </div>
    )
  }
}

export default ProjectOpenContent