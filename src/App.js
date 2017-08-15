import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return <Card />;
  }
}

class Card extends Component {
  constructor(props){
    super(props);
    this.state = {};
    this.swapData = this.swapData.bind(this);
    this.saveData = this.saveData.bind(this);
    this.loadData = this.loadData.bind(this);
  }

  componentDidMount() {
    var r = this.loadData();
    if (!r){
      this.setState({cardFront:'abc', cardBack:'123'});
    }
  }

  swapData(){
    var f = this.state.cardFront;
    var b = this.state.cardBack;
    this.setState({cardFront:b, cardBack:f});
  }

  saveData(){
    localStorage.setItem('cardFront', this.state.cardFront);
    localStorage.setItem('cardBack', this.state.cardBack);
  }

  loadData(){
    var f = localStorage.getItem('cardFront');
    var b = localStorage.getItem('cardBack');

    if (f && b){
      this.setState({cardFront:f, cardBack:b});
      return true;
    }
  }

  render(){
    return (
      <div>
        <p>data on front: "{this.state.cardFront}" <br /> data on back: "{this.state.cardBack}"</p>
        <button onClick = {this.swapData}>Swap Data</button>
        <button onClick = {this.saveData}>Save Data</button>
      </div>
    );
  }
}



export default App;
