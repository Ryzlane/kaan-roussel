import React, { Component } from 'react'

import fillProjectTitle from './ProjectOpenContentNextProjectTitleAnimation'

class ProjectOpenContentNextProjectTitle extends Component {
  render() {
    const { title } = this.props
    return (
      <div className='next-project__title'>
        <h2 className='big-main-title next-project__title--anim' onClick={() => fillProjectTitle()}>
          {title}
          <div className='big-main-title next-project__title--anim next-project__title__fill'>{title}</div>
        </h2>
      </div>
    )
  }
}

export default ProjectOpenContentNextProjectTitle