import React from 'react'

 class MainTitle extends React.Component {
  constructor(props) {
    super(props)

    this.mainTitle = React.createRef()

  }
  componentDidUpdate(prevProps) {
    if (prevProps.percentLoading !== this.props.percentLoading) {
      console.log('percentLoading changed!')
    }
  }
  render() {
    const { percentLoading } = this.props
    const displayLoading = percentLoading === 0 ? '00' : 'AA'
    return (
      <div className='main-title'>
        <h1 ref={this.mainTitle}>k{displayLoading}n</h1>
      </div>
    )
  }
 }

export default MainTitle