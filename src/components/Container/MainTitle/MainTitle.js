import React from 'react'

import { changeProjectTitleOut, changeProjectTitleIn, fillProjectTitle, emptyProjectTitle } from './MainTitleAnimation'

 class MainTitle extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      titleSplitted: ["K", "A", "A", "N"]
    }

    this.splitText = this.splitText.bind(this)
  }

  componentDidMount() {
    if (this.props.page === "/") {
      this.splitText(this.props)
    }

    if (this.props.page === "/project") {
      fillProjectTitle()
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.title !== this.props.title) {
      this.splitText(prevProps)

      if (this.props.page === prevProps.page && this.props.page !== '/project') {
      changeProjectTitleOut(this.props.title.length)
      }
    }

    if (this.props.page !== prevProps.page && this.props.page === "/") {
      emptyProjectTitle()
    }

    if (this.props.page !== prevProps.page && this.props.page === "/project") {
      fillProjectTitle()
    }
  }

  splitText = (prevProps) => {
    let string = this.props.title
    let result = string.split("")


    if (this.props.page === prevProps.page && this.props.page !== '/project') {
      setTimeout(() => {
        this.setState({ titleSplitted: result }, 
          () => {
            changeProjectTitleIn(this.props.title.length)
        })
      }, 1500)
    } else {
      this.setState({ titleSplitted: result }, () => console.log("text changed without anim"))
    }
  }

  render() {
    const { titleSplitted } = this.state
    const isPageProject = this.props.page === '/project'
    return (
      <div className='main-title'>
        <h1 className='big-main-title main-title--anim'>
          { titleSplitted &&
            titleSplitted.map(letter => 
              <span style={{ display: "inline-block" }} className='main-title__letter main-title__letter--stagger'>{letter}</span>
            )
          }
          { isPageProject &&
          <div className='main-title__fill main-title--anim'>
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