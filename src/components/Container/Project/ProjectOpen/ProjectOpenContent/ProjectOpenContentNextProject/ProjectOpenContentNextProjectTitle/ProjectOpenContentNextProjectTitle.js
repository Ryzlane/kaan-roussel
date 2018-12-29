import React, { Component } from 'react'

class ProjectOpenContentNextProjectTitle extends Component {
  render() {
    const { title } = this.props
    return (
      <div className='next-project__title'>
        <h2 className='big-main-title'>{title}</h2>
      </div>
    )
  }
}

export default ProjectOpenContentNextProjectTitle