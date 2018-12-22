import React from 'react'

import { changeProjectTitle, changeProjectTitleIn, fillProjectTitle } from './MainTitleAnimation'

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
      this.splitText()
    }

    if (this.props.page === "/project") {
      fillProjectTitle()
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.title !== this.props.title) {
      this.splitText()
      changeProjectTitle(this.props.title.length)
    }

    if (this.props.page !== prevProps.page && this.props.page === "/project") {
      fillProjectTitle()
    }
  }

  splitText = () => {
    let string = this.props.title
    let result = string.split("")
    
    // this.setState({ titleSplitted: result })
    setTimeout(() => {
      console.log(result)
      this.setState({ titleSplitted: result }, () => changeProjectTitleIn(this.props.title.length))
    }, 1500)
  }

  render() {
    const { titleSplitted } = this.state
    const isPageProject = this.props.page === '/project'
    return (
      <div className='main-title'>
        <h1 data-text={this.props.title}>
          { titleSplitted &&
            titleSplitted.map(letter => 
              <span style={{ display: "inline-block" }} className='main-title__letter main-title__letter--stagger'>{letter}</span>
            )
          }
          { isPageProject &&
          <div className='main-title__fill'>
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