import React, {Component} from 'react';
import Card from "./components/card";
import Container from "./components/container";
import Navbar from "./components/navbar";
import './App.css';

// extend from component, and begin declaring state
class App extends Component {
  state = {
    score: 0,
    highScore: 0,
    click: [],
    status: "Pick a Meme",


 } 
  // shuffle functionality, will require some randomized ordering after an image is clicked


  // click functionality, will need to add to state, will need to check if in state and dump out of game if true




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
