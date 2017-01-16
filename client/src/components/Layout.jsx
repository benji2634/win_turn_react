import React from 'react'

import Header from './Header.jsx'
import Footer from './Footer.jsx'
import NewGameButton from './NewGameButton.jsx'

const cardImages = [
 "/images/playing_cards/10_of_clubs.png", 
 "/images/playing_cards/10_of_diamonds.png", 
 "/images/playing_cards/10_of_hearts.png", 
 "/images/playing_cards/10_of_spades.png", 
 "/images/playing_cards/2_of_clubs.png", 
 "/images/playing_cards/2_of_diamonds.png", 
 "/images/playing_cards/2_of_hearts.png", 
 "/images/playing_cards/2_of_spades.png", 
 "/images/playing_cards/3_of_clubs.png", 
 "/images/playing_cards/3_of_diamonds.png", 
 "/images/playing_cards/3_of_hearts.png", 
 "/images/playing_cards/3_of_spades.png",
 "/images/playing_cards/4_of_clubs.png", 
 "/images/playing_cards/4_of_diamonds.png", 
 "/images/playing_cards/4_of_hearts.png", 
 "/images/playing_cards/4_of_spades.png",
 "/images/playing_cards/5_of_clubs.png", 
 "/images/playing_cards/5_of_diamonds.png", 
 "/images/playing_cards/5_of_hearts.png", 
 "/images/playing_cards/5_of_spades.png",
 "/images/playing_cards/6_of_clubs.png", 
 "/images/playing_cards/6_of_diamonds.png", 
 "/images/playing_cards/6_of_hearts.png", 
 "/images/playing_cards/6_of_spades.png",
 "/images/playing_cards/7_of_clubs.png", 
 "/images/playing_cards/7_of_diamonds.png", 
 "/images/playing_cards/7_of_hearts.png", 
 "/images/playing_cards/7_of_spades.png",
 "/images/playing_cards/8_of_clubs.png", 
 "/images/playing_cards/8_of_diamonds.png", 
 "/images/playing_cards/8_of_hearts.png", 
 "/images/playing_cards/8_of_spades.png",
 "/images/playing_cards/9_of_clubs.png", 
 "/images/playing_cards/9_of_diamonds.png", 
 "/images/playing_cards/9_of_hearts.png", 
 "/images/playing_cards/9_of_spades.png",
 "/images/playing_cards/ace_of_clubs.png", 
 "/images/playing_cards/ace_of_diamonds.png", 
 "/images/playing_cards/ace_of_hearts.png", 
 "/images/playing_cards/ace_of_spades.png",
 "/images/playing_cards/jack_of_clubs.png", 
 "/images/playing_cards/jack_of_diamonds.png", 
 "/images/playing_cards/jack_of_hearts.png", 
 "/images/playing_cards/jack_of_spades.png",
 "/images/playing_cards/king_of_clubs.png", 
 "/images/playing_cards/king_of_diamonds.png", 
 "/images/playing_cards/king_of_hearts.png", 
 "/images/playing_cards/king_of_spades.png",
 "/images/playing_cards/queen_of_clubs.png", 
 "/images/playing_cards/queen_of_diamonds.png", 
 "/images/playing_cards/queen_of_hearts.png", 
 "/images/playing_cards/queen_of_spades.png"
]

class Layout extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: "Win-Turn!",
      name: "",
      cards: cardImages,
      selectedCard: cardImages[0],
      won: "Can you win-turn???"
      }
  }

  handleThumbClick(selectedCard) {
    this.setState({
      selectedCard: selectedCard,
      won: "You win!"
    })
  }

  changeName(name) {
    this.setState({name})
  }

  playAgain() {
    this.setState({
      won: "Can you win again???"
    })
  }

  render() {
    const {cards, selectedCard} = this.state;
    return (
      <div className="image-gallery">
        <div className="header">
        <h1>{this.state.title}</h1>
        <Header>{this.changeName}</Header>
        </div>
        <div className="gallery-image">
          <div>
            <img src={selectedCard} />
          </div>
        </div>
        <div className="image-scroller">
          {cards.map((image, index) => (
          <div id="chooseCard" key={index} onClick={this.handleThumbClick.bind(this,image)}>
              <img src={image}/>
          </div>
          ))}
        </div>
        <NewGameButton>{this.playAgain}</NewGameButton>
        <div className="footer">
        <p>{this.state.won}</p>
        </div>
      </div>
    )
  }

}

export default Layout