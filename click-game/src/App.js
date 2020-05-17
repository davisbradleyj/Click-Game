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



  render(){
    return (
      <div>
        <Navbar
        // status
        // score
        // score
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
