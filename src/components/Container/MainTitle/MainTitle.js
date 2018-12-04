import React from 'react'

 class MainTitle extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      titleSplitted: ["K", "A", "A", "N"]
    }

    this.splitText = this.splitText.bind(this)
  }

  componentDidMount() {
    this.splitText()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.title !== this.props.title) {
      this.splitText()
    }
  }

  splitText = () => {
    let string = this.props.title
    let result = string.split("")

    this.setState({ titleSplitted: result })
  }

  render() {
    const { titleSplitted } = this.state
    return (
      <div className='main-title'>
        <h1>
          { titleSplitted &&
            titleSplitted.map(letter => 
              <span>{letter}</span>
            )
          }
        </h1>
      </div>
    )
  }
 }

export default MainTitle