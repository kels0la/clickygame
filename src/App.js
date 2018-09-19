import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Navbar from "./components/Navbar";
import FriendCard from "./components/FriendCard/FriendCard";
import friends from "./friends.json";
import './App.css';

function shuffleArray (friends) {
  for (let i = friends.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [friends[i], friends[j]] = [friends[j], friends[i]];
  }
  return friends;
};

class App extends Component {
  
    state = {
      friends: friends,
      clicked: [],
      counter: 0,
      topScore: 0,
      rightWrong: ""
    };
 
  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {//if this is not within the array, the indexof returns a -1. We set clicked array to have nothing in it, so the first click would always return -1.
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id)});//The concat adds to the array. Push does not work
    } else {

      this.initiateReset();
    }
  };

  handleIncrement = () => {
    let newTopScore;
    newTopScore = this.state.counter + 1;
    this.setState({ counter: this.state.counter + 1, rightWrong: "" })

    if (newTopScore > this.state.topScore) {
      this.setState({topScore: newTopScore});
    };
    if (newTopScore > 7) {
      this.winnerReset();
    };
    this.initiateShuffle();
  };

  winnerReset = () => {
    this.setState({
      counter: 0,
      rightWrong: "WINNER!",
      clicked: []
    })
    this.initiateShuffle();
  }
  initiateReset = () => {
    this.setState({
      counter: 0,
      topScore: this.state.topScore,
      rightWrong: "YOU LOSE",
      clicked: []
    })
    this.initiateShuffle();
  };
   
  initiateShuffle = () => {
    let shuffledFriends = shuffleArray(friends);
    this.setState({ friends: shuffledFriends});
  }
  
  render() {
    return (
      <div>
        <Navbar 
          counter={this.state.counter}
          rightWrong={this.state.rightWrong}
          topScore={this.state.topScore}
        />
        <Wrapper>
        <Title />
        
          {this.state.friends.map(friend => (
            <FriendCard
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={friend.image}
              handleClick={this.handleClick}
              handleIncrement={this.handleIncrement}
              initiateReset={this.initiateReset}
              initiateShuffle={this.initiateShuffle}
            />
          ))}
      
        </Wrapper>
      </div>
    );
  }
}

export default App;
