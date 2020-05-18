import React, {Component} from 'react';
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
  
  // shuffle functionality, will require some randomized ordering after an image is clicked


  // click functionality, will need to add to state, will need to check if in state and dump out of game if true
  memeClicked = id => {
    // check if meme already selected
    if (this.state.click.includes(id)){
      console.log("meme already clicked")
      this.setState({status:"How about another shot?"})
    // logic to handle score, checking if it's a new high score
      
    } else {
      this.setState(
        {score: this.state.score + 1},
        {click: [...this.state.click, id]}
        );
    };
    // shuffle "deck" of memes
  }




  render(){
    return (
      <div>
        <Navbar
        // status
        // score
        // high score
         />
        <div>
            <p> Each time you pick an "original" meme you'll score a point. Select the same meme twice and it's game over!</p>
          <Container>
            <Card
            // card details
            // card details
            // card details
            // card details
            />
         </Container>
        </div>
      </div>
    )
  }
}

export default App;

