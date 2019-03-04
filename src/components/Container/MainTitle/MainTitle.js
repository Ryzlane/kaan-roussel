import React from 'react'

import { changeProjectTitleOut, changeProjectTitleIn, fillProjectTitle, emptyProjectTitle } from './MainTitleAnimation'

 class MainTitle extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      titleSplitted: ["K", "0", "0", "N"]
    }

    this.splitText = this.splitText.bind(this)
    this.displayPercentage = this.displayPercentage.bind(this)
  }

  componentDidMount() {

    if (this.props.loaded) {
      if (this.props.page === "") {
        this.splitText(this.props)
      } else if (this.props.page === "project") {
        fillProjectTitle()
      }
    }
  }

  componentDidUpdate(prevProps) {

    if (!this.props.loaded && prevProps.title !== this.props.title) {
      this.displayPercentage(this.props.title)

    } else if (this.props.loaded) {

      if (prevProps.title !== this.props.title) {
        this.splitText(prevProps)
  
        if (this.props.page === prevProps.page && this.props.page !== 'project') {
        changeProjectTitleOut(this.props.title.length)
        }
      }
  
      if (this.props.page !== prevProps.page && this.props.page === "") {
        emptyProjectTitle()
      }
  
      if (this.props.page !== prevProps.page && this.props.page === "project") {
        fillProjectTitle()
      }
    }
  }

  displayPercentage = (percentage) => {

    if (percentage >= 17 && percentage < 32) {
      this.setState({
        titleSplitted: ["K", "1", "7", "N"]
      })
    } else if (percentage >= 32 && percentage < 53) {
      this.setState({
        titleSplitted: ["K", "3", "2", "N"]
      })
    } else if (percentage >= 53 && percentage < 74) {
      this.setState({
        titleSplitted: ["K", "5", "3", "N"]
      })
    } else if (percentage >= 74 && percentage < 100) {
      this.setState({
        titleSplitted: ["K", "7", "4", "N"]
      })
    } else if (percentage === 100 ) {
      this.setState({
        titleSplitted: ["K", "A", "A", "N"]
      })
    }
  }

  splitText = (prevProps) => {
    let string = this.props.title
    let result = string.split("")


    if (this.props.page === prevProps.page && this.props.page !== 'project') {
      setTimeout(() => {
        this.setState({ titleSplitted: result }, 
          () => {
            changeProjectTitleIn(this.props.title.length)
        })
      }, 1500)
    } else {
      this.setState({ titleSplitted: result })
    }
  }

  render() {
    const { titleSplitted } = this.state
    const isPageProject = this.props.page === 'project'
    return (
      <div className='main-title'>
        <h1 className='big-main-title main-title--anim'>
          { titleSplitted &&
            titleSplitted.map(letter => 
              <span style={{ display: "inline-block" }} className='main-title__letter main-title__letter--stagger'>{letter}</span>
            )
          }
          { isPageProject &&
          <div className='big-main-title--fill main-title--anim'>
            { titleSplitted &&
              titleSplitted.map(letter => 
                <span style={{ display: "inline-block" }} className='main-title__letter'>{letter}</span>
              )
            }
          </div>}
        </h1>
      </div>
    )
  }
 }

export default MainTitle