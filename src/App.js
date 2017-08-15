import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './w3.css';

class App extends Component {
  render() {
    return <Card front="i am the front" back="i am the back"/>;
  }
}

class Card extends Component {
  constructor(props){
    super(props);
    this.state = {
      front: props.front,
      back: props.back,
      display: null,
      fipped: false
    };
    this.saveData = this.saveData.bind(this);
    this.loadData = this.loadData.bind(this);
    this.flipCard = this.flipCard.bind(this);
  }

  componentDidMount() {
    //var data = this.loadData();
    this.setState({
      display: this.state.front
    });
  }

  flipCard(){
    if (!this.state.flipped){
      this.setState({
        display: this.state.back,
        flipped: true
      });
    } else {
      this.setState({
        display: this.state.front,
        flipped: false
      });
    }
  }

  saveData(){
    localStorage.setItem('cardFront', this.state.front);
    localStorage.setItem('cardBack', this.state.back);
  }

  loadData(){
    var f = localStorage.getItem('cardFront');
    var b = localStorage.getItem('cardBack');

    if (f && b){
      this.setState({front:f, back:b});
      return true;
    }
  }

  render(){
    return (
      <div className="w3-card w3-blue" onClick={this.flipCard}>
        <p>{this.state.display}</p>
      </div>
    );
  }
}



export default App;
