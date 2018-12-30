import React, { Component } from 'react'

class ProjectOpenContentNextProjectTitle extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { title } = this.props
    return (
        <h2 className='big-main-title next-project__title--anim'>
          {title}
          <div className='big-main-title next-project__title--anim next-project__title__fill'>{title}</div>
        </h2>
    )
  }
}

export default ProjectOpenContentNextProjectTitle