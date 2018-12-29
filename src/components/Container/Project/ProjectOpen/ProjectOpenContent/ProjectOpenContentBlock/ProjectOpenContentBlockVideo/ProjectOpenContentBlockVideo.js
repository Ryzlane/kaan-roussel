import React, { Component } from 'react'

class ProjectOpenContentBlockVideo extends Component {
  render() {
    const { content } = this.props
    return (
      <div className='project__block-video'>
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