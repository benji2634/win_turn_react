import React from 'react'

class NewGameButton extends React.Component {

handleChange() {
  this.props.playAgain()
}

  render() {
    return (
      <div className="button">
        <button onClick={this.handleChange.bind(this)}>Play again!</button>
      </div>
    )
  }
}

export default NewGameButton
