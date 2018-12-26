import React, { Component } from 'react'

class ProjectOpenContentTextBlock extends Component {
  render() {
    const { content } = this.props
    return (
      <div className='project__text-block'>
        {
          content.type === 'approach' ?
          <div>approach</div>
          :
          <div>final design</div>
        }
      </div>
    )
  }
}

export default ProjectOpenContentTextBlock