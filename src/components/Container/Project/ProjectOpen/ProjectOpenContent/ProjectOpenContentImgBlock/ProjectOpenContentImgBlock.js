import React, { Component } from 'react'

class ProjectOpenContentImgBlock extends Component {
  render() {
    const { content } = this.props
    return (
      <div className='project__img-block'>
        {
          content.type === 'desktop' ?
          <div className='project__img-block__desktop'>desktop</div>
          :
          <div className='project__img-block__mobile'>mobile</div>
        }
      </div>
    )
  }
}

export default ProjectOpenContentImgBlock