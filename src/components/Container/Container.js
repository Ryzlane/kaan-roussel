import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Background from '../Background/Background'
import Cursor from '../Cursor/Cursor'
import Header from '../Header/Header'
import Home from './Home/Home'
import Project from './Project/Project'
import About from './About/About'

 class Container extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isHoverMenu: false,
      menuItem: undefined, // to retrieve the position of the element we are hover and send it to cursor
      currentPage: ''
    }

    this.handleHoverMenu = this.handleHoverMenu.bind(this)
    this.handleLeaveMenu = this.handleLeaveMenu.bind(this)
    this.renderHomeWithProps = this.renderHomeWithProps.bind(this)
  }

  componentDidMount() {
    const currentPageArray = this.props.location.pathname.split('/')
    const currentPageType = currentPageArray[1]

    this.setState({
      currentPage: currentPageType
    })
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      const currentPageArray = this.props.location.pathname.split('/')
      const currentPageType = currentPageArray[1]

      this.setState({
        currentPage: currentPageType
      })
    }
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

  renderHomeWithProps = (props) => {
    return (
      <Home handleHoverSM={this.handleHoverSM} handleLeaveSM={this.handleLeaveSM} {...props} />
    )
  }

  render() {
    const isHoverMenuPosition = this.state.menuItem ? this.state.menuItem.current.getBoundingClientRect() : undefined
    return (
      <div className='global-container'>
        <Background backgroundState={this.props.location.pathname === '/' ? 'initial' : 'changed'}/>
        <Cursor
          isHoverMenu={this.state.isHoverMenu} 
          isHoverMenuPosition={isHoverMenuPosition}
          isHoverSM={this.state.isHoverSM}
          currentPage={this.state.currentPage}
        >
          <Route path="/" component={Home}>
            <Route exact path="/about" component={About} />
            <Route exact path="/project/:name" component={Project} />
          </Route>
        </Cursor>
        <Header
          isLoaded={true}
          isHoverMenu={this.state.isHoverMenu}
          handleHoverMenu={this.handleHoverMenu}
          handleLeaveMenu={this.handleLeaveMenu}
          currentPage={this.state.currentPage}
        />
      </div>
    )
  }
 }

export default Container