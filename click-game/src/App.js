import React, { Component } from 'react';
import Card from "./components/card";
import Container from "./components/container";
import Navbar from "./components/navbar";
import Meme from "./meme.json";
import './App.css';

// extend from component, and begin declaring state
class App extends Component {
  state = {
    score: 0,
    highScore: 0,
    click: [],
    status: "Pick a Meme",
    Meme
  }

  // click functionality, will need to add to state, will need to check if in state and dump out of game if true
  memeClicked = id => {
    // check if meme already selected
    if (this.state.click.includes(id)) {
      console.log("meme already clicked")
      this.setState({ status: "How about another shot?" })
      // logic to handle score, checking if it's a new high score


      // set.State to 0 score, and set.State to a blank array for those clicked
    } else {
      this.setState(
        // add 1 to score
        { score: this.state.score + 1 },
        // add the meme id to "click" array
        { click: [...this.state.click, id] }
      );
    };
    // shuffle "deck" of memes function is called
    const imageClick = this.state.Meme
    this.memeShuffle(imageClick)
  }

  // shuffle functionality, will require some randomized ordering after an image is clicked
  // review sort method?  math.random?   
  // --- STACK OVERFLOW MODEL - Durstenfeld Shuffle ---

  //   function shuffleArray(array) {
  //     for (let i = array.length - 1; i > 0; i--) {
  //         const j = Math.floor(Math.random() * (i + 1));
  //         [array[i], array[j]] = [array[j], array[i]];
  //     }
  // }
  memeShuffle = imageClick => {
    for (let i = imageClick.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [imageClick[i], array[j]] = [array[j], array[i]]
    }
  };




  render() {
    return (
      <div>
        <Navbar
        // status, score, high score 
        />
        <div>
          <p> Each time you pick an "original" meme you'll score a point. Select the same meme twice and it's game over!</p>
          <Container>
            {/* .map method of meme cards */}
            <Card
            // card details id, image, memeClicked
            />
          </Container>
        </div>
      </div>
    )
  }
}

export default App;

