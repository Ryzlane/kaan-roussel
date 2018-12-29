import React, { Component } from 'react'

class ProjectOpenContentBlockText extends Component {
  render() {
    const { content } = this.props
    return (
      <div className={`project__block-text ${content.type}`}>
        <div className='project__block-text__lines'>
          <div className='project__block-text__lines__single project__block-text__lines__single--1'></div>
          <div className='project__block-text__lines__single project__block-text__lines__single--2'></div>
          <div className='project__block-text__lines__single project__block-text__lines__single--3'></div>
        </div>
        <div className='project__block-text__side'>
          <h2 className='project-titlesection'>{content.type === 'approach' ? 'APPROACH' : 'FINAL DESIGN'}</h2>
        </div>
        <div className='project__block-text__side'>
          <p className='project-regular-text'>{content.text}</p>
        </div>
      </div>
    )
  }
}

export default ProjectOpenContentBlockText