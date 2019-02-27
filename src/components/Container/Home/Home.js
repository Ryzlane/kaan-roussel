import React from 'react'
import { Link } from 'react-router-dom'
import _ from 'lodash'
// import Scrollbar from 'smooth-scrollbar'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ImagePreloader from 'image-preloader'

import Project from '../Project/Project'
import HomePaging from './HomePaging/HomePaging'
import Loader from '../Loader/Loader'
import MainTitle from '../MainTitle/MainTitle'

import { projects, contentToLoad } from './Home.util'
import { goNextProject, mouseHoverProject, mouseLeaveProject, loadedDone } from './HomeAnimation'
import About from '../About/About';

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loaded: false,
      stateLoading: 0,
      position: 0,
      nextProjectPosition: 1,
      nextProjectProgress: false,
      currentPage: ''
    }

    this.handleScroll = this.handleScroll.bind(this)
    this.handleIsHomePage = this.handleIsHomePage.bind(this)
    this.handleClickNextProject = this.handleClickNextProject.bind(this)
    this.loadResources = this.loadResources.bind(this)
    this.debounceFunc = _.debounce(this.handleScroll, 500, { trailing: false, leading: true })
  }

  componentDidMount() {

    this.loadResources()

    const currentPageArray = this.props.location.pathname.split('/')
    const currentPageType = currentPageArray[1]
    console.log('currentPageArray: ', currentPageArray)
    console.log('currentPageType: ', currentPageType)

    document.querySelector('.home').addEventListener("scroll",  console.log('ok'));

    this.setState({
      currentPage: currentPageType
    })

    if (this.props.location.pathname !== '/') {
      const string = this.props.location.pathname

      let result = string.split("/")

      if (result[result.length - 1] === 'tesla') {
        this.setState({
          position: 1
        })
      } else if (result[result.length - 1] === 'voltaire') {
        this.setState({
          position: 2
        })
      } else if (result[result.length - 1] === 'unesco') {
        this.setState({
          position: 3
        })
      }
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // const oldStateLoading = prevState.state

    if (this.props.location.pathname !== prevProps.location.pathname) {
      const currentPageArray = this.props.location.pathname.split('/')
      const currentPageType = currentPageArray[1]

      this.setState({
        currentPage: currentPageType
      })
    }

    // if (loading === 100) {
    //   setTimeout(
    //     function() {
    //         this.setState({loaded: true});
    //     }
    //     .bind(this),
    //     3000
    //   )
    // }
  }

  loadResources = () => {
    const preloader = new ImagePreloader()
    const total = contentToLoad.length
    let loadedContent = 0
    let loading = 0

    preloader.onProgress = () => {
      loading = 100 / total * ++loadedContent

      this.setState({
        stateLoading: Math.round(loading)
      })
    }

    preloader.preload(contentToLoad)
    .then(() => {
      setTimeout(
        function() {
          this.setState({
            loaded: true
          }, () => loadedDone()
          )}
        .bind(this),
        1000
      )
    })
  }

  handleIsHomePage = (event) => {
    event.preventDefault()
    this.debounceFunc(event)
  }

  handleScroll = (event) => {
    const { position } = this.state
    const projectsLength = projects.length

    event.preventDefault()
    if (event.nativeEvent.wheelDelta > 0) {
      console.log('scroll up')
      if (position !== 0) {

        this.setState({
          nextProjectPosition: position,
          position: position - 1
        })

      } else {

        this.setState({ 
          nextProjectPosition: 0,
          position: projectsLength - 1
        })
      }
      
    } else {
      console.log('scroll down')
      if (position !== projectsLength - 1) {

        this.setState({
          nextProjectPosition: position + 2 >= projectsLength ? 0 : position + 2,
          position: position + 1
        })

      } else {

        this.setState({
          nextProjectPosition: 1,
          position: 0
        })

      }
    }
  }

  handleClickNextProject = (nextProjectDiv) => {
    const newPosition = {...this.state}.nextProjectPosition

    goNextProject()
    window.history.pushState(null, null, `${projects[newPosition].className}`)

    setTimeout(() => {
      this.setState({
        nextProjectProgress: true
      })
    }, 5000)

    setTimeout(() => {
      this.setState({
        position: newPosition,
        nextProjectProgress: false
      }, () => {
        setTimeout(() => {
          nextProjectDiv.current.style.display = "none"
          this.setState({
            nextProjectPosition: newPosition + 1 < projects.length ? newPosition + 1 : 0
          })
        }, 1000)
      })
    }, 5000)
  }

  render() {
    const { position, nextProjectProgress, nextProjectPosition, mouseX, mouseY, currentPage } = this.state
    const isHomePage = this.props.location.pathname === '/'
    const isHomePageClass = currentPage === "" ? 'home' : currentPage
    const mainTitleContent = !this.state.loaded ? this.state.stateLoaded : projects[position].title
    return (
      <div
        className='home'
        onMouseMove={(e) => this.setState({ mouseX: e.clientX, mouseY: e.clientY })}
        onWheel={(e) => { isHomePage && this.handleIsHomePage(e)}}
      >
        <Loader loaded={this.state.loaded} stateLoading={this.state.stateLoading}>
          <div className={`home__container ${isHomePageClass + '-page'}`}>
            { currentPage === '' && 
              <Link 
                className='home__container__link-project' to={`project/${projects[position].className}`}
                onMouseOver={() => mouseHoverProject()}
                onMouseLeave={() => mouseLeaveProject()}
              >
              </Link>
            }
            <Project 
              page={currentPage}
              mouse={{mouseX: mouseX, mouseY: mouseY}}
              project={projects[position]}
              nextProject={projects[nextProjectPosition]}
              handleClickNextProject={this.handleClickNextProject}
              nextProjectProgress={nextProjectProgress}
            />
            {
              currentPage === '' &&
              <HomePaging actualPage={position + 1} pagesLength={projects.length} />
            }
          </div>
        </Loader>
          <MainTitle page={currentPage} title={mainTitleContent} loaded={this.state.loaded} />
          <ReactCSSTransitionGroup
            transitionName="aboutanim"
            transitionEnter={false}
            transitionLeaveTimeout={300}
          >
            {
              currentPage === 'about' ? 
              <About handleHoverSM={this.props.handleHoverSM} handleLeaveSM={this.props.handleLeaveSM} />
              : 
              null
            }
          </ReactCSSTransitionGroup>
      </div>
    )
  }
}

export default Home