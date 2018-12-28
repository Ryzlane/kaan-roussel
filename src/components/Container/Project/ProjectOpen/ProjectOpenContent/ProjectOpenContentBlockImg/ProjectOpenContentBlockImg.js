import React, { Component } from 'react'

class ProjectOpenContentBlockImg extends Component {
  render() {
    const { content } = this.props
    const backgroundClass = content.background === true ? 'background-active' : ''
    return (
      <div className={`project__block-img ${backgroundClass}`}>
        {
          content.type === 'desktop' ?
          <div className='project__block-img__desktop'>
            <img src={content.img} />
          </div>
          :
          <div className='project__block-img__mobile'>mobile</div>
        }
      </div>
    )
  }
}

export default ProjectOpenContentBlockImg