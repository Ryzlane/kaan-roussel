import React from 'react'
import PropTypes from 'prop-types'

class Loader extends React.Component {
  constructor(props) {
    super(props)

    this.loaderContainerRef = React.createRef()
  }

  render() {
    const { stateLoading, loaded, isHomePage } = this.props
    return (
      <div className={`loader ${!isHomePage && 'loader-project-page'}`}>
        {
          loaded &&
          this.props.children
        }
        <div className='loader__background'>
          <div ref={this.loaderContainerRef} className='loader__background__left loader__background__side' style={{ height: `${stateLoading}%` }}></div>
          <div className='loader__background__right loader__background__side' style={{ height: `${stateLoading}%` }}></div>
        </div>
      </div>
    )
  }
 }

// Loader.propTypes = {
//   children: PropTypes.element.isRequired
// }

export default Loader