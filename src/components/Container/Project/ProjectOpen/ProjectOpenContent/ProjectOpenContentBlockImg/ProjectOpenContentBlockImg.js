import React, { Component } from 'react'

class ProjectOpenContentBlockImg extends Component {
  render() {
    const { content } = this.props
    return (
      <div className='project__block-img'>
        {
          content.type === 'desktop' ?
          <div className='project__block-img__desktop'>desktop</div>
          :
          <div className='project__block-img__mobile'>mobile</div>
        }
      </div>
    )
  }
}

export default ProjectOpenContentBlockImg