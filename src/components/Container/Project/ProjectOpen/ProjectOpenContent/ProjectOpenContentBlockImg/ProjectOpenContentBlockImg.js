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
            <img src={content.img} alt='desktop img' />
          </div>
          :
          <div className='project__block-img__mobile'>
            <div className="project__block-img__mobile__side">
              <img src={content.img1} />
            </div>
            <div className="project__block-img__mobile__side">
              <img src={content.img2} alt="mobile img"/>
            </div>
          </div>
        }
      </div>
    )
  }
}

export default ProjectOpenContentBlockImg