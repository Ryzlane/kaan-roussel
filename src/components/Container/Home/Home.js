import React from 'react'
import _ from 'lodash'
// import ImagePreloader from 'image-preloader'

import Project from '../Project/Project'
import HomePaging from './HomePaging/HomePaging'
import Loader from '../Loader/Loader'
import MainTitle from '../MainTitle/MainTitle'

import projects from './Home.util'
import goNextProject from './HomeAnimation'

// const preloader = new ImagePreloader()
// const imagesBack = projects.map((project) => project.backgroundImage)
// const imagesFront = projects.map((project) => project.frontImage)
// const images = imagesBack.concat(imagesFront)
// const total = images.length
// let loaded = 0
// let loading = 0

// preloader.onProgress = function() {
//   loading = 100 / total * ++loaded

//   console.log('loading: ', Math.round(loading))

//   return loading
// }


class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      preload: false,
      loaded: false,
      stateLoading: 0,
      position: 0,
      nextProjectPosition: 1,
      nextProjectProgress: false
    }

    this.handleScroll = this.handleScroll.bind(this)
    this.handleIsHomePage = this.handleIsHomePage.bind(this)
    this.handleClickNextProject = this.handleClickNextProject.bind(this)
    this.debounceFunc = _.debounce(this.handleScroll, 1000, { trailing: false, leading: true })
  }

  componentDidMount() {
    if (this.props.location.pathname !== '/') {
      const string = this.props.location.pathname

      let result = string.split("/")

      console.log(result[result.length - 1])

      if (result[result.length - 1] === 'voltaire') {
        this.setState({
          position: 1
        })
      } else if (result[result.length - 1] === 'unesco') {
        this.setState({
          position: 2
        })
      }
    }
    // preloader.preload(images)
    // .then(() => {
    //   this.setState({ preload: true });
    // })
  }

  // componentDidUpdate() {
  //   const oldState = {...this.state}
  //   if (oldState.stateLoading !== loading) {
  //     console.log('loading changed!')
  //     this.setState({ stateLoading: loading })
  //   }

  //   if (loading === 100) {
  //     setTimeout(
  //       function() {
  //           this.setState({loaded: true});
  //       }
  //       .bind(this),
  //       3000
  //     )
  //   }
  // }


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
    const { nextProjectPosition, position } = this.state

    goNextProject()
    window.history.pushState(null, null, `/project/${projects[nextProjectPosition].className}`)

    setTimeout(() => {
      this.setState({
        nextProjectProgress: true
      })
    }, 5000)

    setTimeout(() => {
      this.setState({
        position: nextProjectPosition,
        nextProjectProgress: false
      }, () => {
        setTimeout(() => {
          nextProjectDiv.current.style.display = "none"
          this.setState({
            nextProjectPosition: position + 1 < projects.length ? position + 1 : 0
          })
        }, 1000)
      })
    }, 5000)
  }


  render() {
    const { position, nextProjectProgress, nextProjectPosition, mouseX, mouseY,  } = this.state
    const isHomePage = this.props.location.pathname === '/'
    const isHomePageClass = this.props.location.pathname === '/' ? '' : 'is-project-page'
    return (
      <div
        className='home'
        onMouseMove={(e) => this.setState({ mouseX: e.clientX, mouseY: e.clientY })}
        onWheel={(e) => { isHomePage && this.handleIsHomePage(e)}}
      >
        {/* <Loader loading={loading} loaded={this.state.loaded}> */}
          <div className={`home__container ${isHomePageClass}`}>
            <Project 
              page={isHomePage ? '/' : '/project'}
              mouse={{mouseX: mouseX, mouseY: mouseY}}
              project={projects[position]}
              nextProject={projects[nextProjectPosition]}
              handleClickNextProject={this.handleClickNextProject}
              nextProjectProgress={nextProjectProgress}
            />
            {
              isHomePage &&
              <HomePaging actualPage={position + 1} pagesLength={projects.length} />
            }
          </div>
        {/* </Loader> */}
        <MainTitle page={isHomePage ? '/' : '/project'} title={projects[position].title} percentLoading='00' />
      </div>
    )
  }
}

export default Home