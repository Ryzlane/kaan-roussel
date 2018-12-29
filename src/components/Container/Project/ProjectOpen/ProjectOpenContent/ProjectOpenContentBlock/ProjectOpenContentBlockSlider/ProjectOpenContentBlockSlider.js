import React, { Component } from 'react'
import Carousel from 'nuka-carousel';

class ProjectOpenContentBlockSlider extends Component {
  render() {
    const { content } = this.props
    return (
      <div className='project__block-slider'>
        <Carousel framePadding="25px" cellSpacing={95}>
          <div className='project__block-slider__slide'>
            <img src={content.imgs[0]} />
          </div>
          <div className='project__block-slider__slide'>
            <img src={content.imgs[1]} />
          </div>
          <div className='project__block-slider__slide'>
            <img src={content.imgs[2]} />
          </div>
          <div className='project__block-slider__slide'>
            <img src={content.imgs[3]} />
          </div>
        </Carousel>
      </div>
    )
  }
}

export default ProjectOpenContentBlockSlider
