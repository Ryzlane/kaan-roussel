import React, { Component } from 'react'
import ProjectOpenContentIntro from './ProjectOpenContentIntro/ProjectOpenContentIntro'
import ProjectOpenContentFooter from './ProjectOpenContentFooter/ProjectOpenContentFooter'


class ProjectOpenContent extends Component {
  render() {
    const { projectContent } = this.props
    return (
      <div className='project__content'>
        <ProjectOpenContentIntro intro={projectContent.intro} />
        {
          projectContent.core.map(block =>
            <block.component content={block.content} />
          )
        }
        <ProjectOpenContentFooter footer={projectContent.footer} />
      </div>
    )
  }
}

export default ProjectOpenContent