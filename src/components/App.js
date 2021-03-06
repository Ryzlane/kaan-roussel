import React from 'react'
import { isMobile } from 'react-device-detect';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import WaitingMobile from './WaitingMobile/WaitingMobile'
import Container from './Container/Container'

// All the styles of the application are imported in this file, so that we don't have multiple imports in the header
import '../styles/index.scss';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loaded: false
    }
  }

  render() {
    return (
      <Router>
        <div>
          {
            isMobile ?
            <WaitingMobile />
            :
            <Route path='/' component={Container} />
          }
        </div>
      </Router>
    )
  }
}

export default App