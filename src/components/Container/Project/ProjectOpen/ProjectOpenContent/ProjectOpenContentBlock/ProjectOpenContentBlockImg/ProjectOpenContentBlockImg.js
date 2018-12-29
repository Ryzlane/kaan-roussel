import React, { Component } from 'react'

class ProjectOpenContentBlockImg extends Component {
  render() {
    const { content } = this.props
    const backgroundClass = content.background === true ? 'background-active' : ''
    return (
      <div className={`project__block-img ${backgroundClass}`}>
        {
          backgroundClass === 'background-active' &&
          <div className='project__block-img__lines'>
            <div className='project__block-img__lines__single project__block-img__lines__single--1'></div>
            <div className='project__block-img__lines__single project__block-img__lines__single--2'></div>
            <div className='project__block-img__lines__single project__block-img__lines__single--3'></div>
          </div>
        }
        {
          content.type === 'desktop' ?
          <div className='project__block-img__desktop'>
            <img src={content.img} alt='desktop img' />
          </div>
          :
          <div className='project__block-img__mobile'>
            <div className="project__block-img__mobile__side">
              <img src={content.img1} alt='mobile img' />
              {
                content.img3 &&
                <img src={content.img3} alt='mobile img' />
              }
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