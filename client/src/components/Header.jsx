import React from 'react'

import Title from './Title.jsx'

class Header extends React.Component {
  handleChange(e) {
    const name = e.target.value
    this.props.changeName(name)
  }
  render() {
    return (
      <div>
        <Title name={this.props.name} />
        <p>Enter your name: </p>
        <input value={this.props.name} onChange={this.handleChange.bind(this)} />
      </div>
    )
  }
}

export default Header