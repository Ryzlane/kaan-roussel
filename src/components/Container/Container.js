import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Background from 'components/Background/Background'
import Cursor from 'components/Cursor/Cursor'
import Header from 'components/Header/Header'
import Home from './Home/Home'
import Project from './Project/Project'
import About from './About/About'

 class Container extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isHoverMenu: false,
      menuItem: undefined // to retrieve the position of the element we are hover and send it to cursor
    }

    this.handleHoverMenu = this.handleHoverMenu.bind(this)
    this.handleLeaveMenu = this.handleLeaveMenu.bind(this)
  }

  handleHoverMenu(menuItem) {
    this.setState({
      isHoverMenu: true,
      menuItem: menuItem
    })
  }

  handleLeaveMenu() {
    this.setState({
      isHoverMenu: false,
      menuItem: undefined
    })
  }

  render() {
    const isHoverMenuPosition = this.state.menuItem ? this.state.menuItem.current.getBoundingClientRect() : undefined
    return (
      <div className='global-container'>
        <Background backgroundState={this.props.location.pathname === '/' ? 'initial' : 'changed'}/>
        <Cursor 
          isHoverMenu={this.state.isHoverMenu} 
          isHoverMenuPosition={isHoverMenuPosition}
        >
        <Switch>
          <Route exact path="/about" component={About} />
          <Route path="/" component={Home} />
          <Route exact path="/project/:name" component={Project} />
        </Switch>
        </Cursor>
        <Header
          isLoaded={true}
          isHoverMenu={this.state.isHoverMenu}
          handleHoverMenu={this.handleHoverMenu}
          handleLeaveMenu={this.handleLeaveMenu}
        />
      </div>
    )
  }
 }

export default Container