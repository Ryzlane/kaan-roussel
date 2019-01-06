import React, { Component } from 'react'

class ProjectOpenContentBlockVideo extends Component {
  render() {
    const { content } = this.props
    const backgroundClass = content.background === true ? 'background-active' : ''
    return (
      <div className={`project__block-video ${backgroundClass}`}>
        {
          backgroundClass === 'background-active' &&
          <div className='project__block-video__lines'>
            <div className='project__block-video__lines__single project__block-video__lines__single--1'></div>
            <div className='project__block-video__lines__single project__block-video__lines__single--2'></div>
            <div className='project__block-video__lines__single project__block-video__lines__single--3'></div>
          </div>
        }
        <div className='project__block-video__lines'>
          <div className='project__block-video__lines__single project__block-video__lines__single--1'></div>
          <div className='project__block-video__lines__single project__block-video__lines__single--2'></div>
          <div className='project__block-video__lines__single project__block-video__lines__single--3'></div>
        </div>
        <video className='project__block-video__video' loop autoPlay>
          <source src={content.video} type='video/mp4' />
          Sorry, your browser doesn't support embedded videos.
        </video>
      </div>
    )
  }
}

export default ProjectOpenContentBlockVideo