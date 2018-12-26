import React, { Component } from 'react'

class ProjectOpenContentTextBlock extends Component {
  render() {
    const { content } = this.props
    return (
      <div className={`project__text-block ${content.type}`}>
        <div className='project__text-block__side'>
          <h2 className='project-titlesection'>{content.type === 'approach' ? 'APPROACH' : 'FINAL DESIGN'}</h2>
        </div>
        <div className='project__text-block__side'>
          <p className='project-regular-text'>{content.text}</p>
        </div>
      </div>
    )
  }
}

export default ProjectOpenContentTextBlock