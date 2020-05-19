import React, { Component } from 'react';
import Card from "./components/card";
import Container from "./components/container";
import Navbar from "./components/navbar";
import memes from "./meme.json";
import './App.css';

// extend from component, and begin declaring state
class App extends Component {
  state = {
    score: 0,
    highScore: 0,
    click: [],
    status: "Pick a Meme",
    memes
  }

  // click functionality, will need to add to state, will need to check if in state and dump out of game if true
  memeClicked = id => {
    // check if meme already selected
    if (this.state.click.includes(id)) {
      console.log("meme already clicked")
      this.setState({ status: "How about another shot?" })
      // logic to handle score, checking if it's a new high score and setting new high score if true
      if (this.state.score > this.state.highScore) {
        this.setState({
          highScore: this.state.score})
        // then set.State to 0 score, and set.State to a blank array for click
        };
        this.setState({score: 0})
        this.setState({click: []})

    // if meme was not already clicked...
    } else {
      // last fuctionality problem solved... you DID NOT have score and click acting as set state - 
      // cannot put a commat after the first element
      // add 1 to score
      this.setState({ score: this.state.score + 1 })
        // add the meme id to "click" array
      this.setState({ click: [...this.state.click, id] });
    };
    // shuffle "deck" of memes function is called
    let imageClick = this.state.memes
    this.memeShuffle(imageClick)
  }

  // shuffle functionality, will require some randomized ordering after an image is clicked
  // review sort method?  math.random?   
  // --- STACK OVERFLOW MODEL - Durstenfeld Shuffle ---
  //   function shuffleArray(array) {
  //     for (let i = array.length - 1; i > 0; i--) {
  //         const j = Math.floor(Math.random() * (i + 1));
  //         [array[i], array[j]] = [array[j], array[i]];

  memeShuffle = imageClick => {
    for (let i = imageClick.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let hold = imageClick[i]
      imageClick[i] = imageClick[j]
      imageClick[j] = hold
    }
  };

  render() {
    return (
      <div>
        <Navbar
        // status, score, high score 
          status={this.state.status}
          score={this.state.score}
          highScore={this.state.highScore}
        />
        <div className="container pt-2 centered">
          <Container>
            <h3> Each time you pick an <em>original</em> meme you'll score a point.</h3>
            <h4> Select the same meme twice and it's game over! </h4>
            <div className="row">
            {/* .map method of meme cards */}
            {this.state.memes.map(memes => (
              <Card
              // card details id, meme, memeClicked
              id={memes.id}
              key={memes.id}
              meme={memes.meme}
              memeClicked={this.memeClicked}
            />))}
            </div>
          </Container>
        </div>
      </div>
    )
  }
}

export default App;

