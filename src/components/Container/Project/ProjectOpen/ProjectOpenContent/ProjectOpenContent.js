import React, { Component } from 'react'
import Scrollbar from 'smooth-scrollbar'

import ProjectOpenContentIntro from './ProjectOpenContentIntro/ProjectOpenContentIntro'
import ProjectOpenContentFooter from './ProjectOpenContentFooter/ProjectOpenContentFooter'
import ProjectOpenContentNextProject from './ProjectOpenContentNextProject/ProjectOpenContentNextProject'

class ProjectOpenContent extends Component {
  componentDidMount() {
    Scrollbar.init(document.querySelector('.home'));
  }

  render() {
    const { projectContent, nextProject } = this.props
    return (
      <div className='project__content'>
        <ProjectOpenContentIntro intro={projectContent.intro} />
        {/* {
          projectContent.core.map(block =>
            <block.component content={block.content} />
          )
        } */}
        <ProjectOpenContentFooter footer={projectContent.footer} />
        <ProjectOpenContentNextProject project={nextProject} />
      </div>
    )
  }
}

export default ProjectOpenContent