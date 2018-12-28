import React, { Component } from 'react'

class ProjectOpenContentFooter extends Component {
  render() {
    const { footer } = this.props
    return (
      <div className="project__footer">
        {
          footer.map(singleSection => 
            <div className='project__footer__block'>
              <div className="project__footer__block__side">
                <h4 className='project-footer-title'>{singleSection.title}</h4>
              </div>
              <div className="project__footer__block__side">
                <p className='project-footer-text'>{singleSection.text}</p>
              </div>
            </div>
          )
        }
      </div>
    )
  }
}

export default ProjectOpenContentFooter