import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './w3.css';

class App extends Component {
  render() {
    return (
      <div>
        <CardGallery />
      </div>
    );
  }
}

class Card extends Component {
  constructor(props){
    super(props);
    this.state = {
      face: props.face,
      back: props.back,
      isFaceDown: true
    };
    //this.saveData = this.saveData.bind(this);
    //this.loadData = this.loadData.bind(this);
    this.flipCard = this.flipCard.bind(this);
  }

  componentDidMount() {
    //var data = this.loadData();
    this.setState({
      isFaceDown: true
    });
  }

  flipCard(){
    this.setState(prevState => ({
      isFaceDown: !prevState.isFaceDown
    }));
  }

  /*saveData(){
    localStorage.setItem('cardFace', this.state.face);
    localStorage.setItem('cardBack', this.state.back);
  }

  loadData(){
    var f = localStorage.getItem('cardFace');
    var b = localStorage.getItem('cardBack');

    if (f && b){
      this.setState({face:f, back:b});
      return true;
    }
  }*/

  render(){
    return (
      <div className="w3-card w3-blue" onClick={this.flipCard}>
        <p>{this.state.isFaceDown ? this.state.back : this.state.face}</p>
      </div>
    );
  }
}

class CardGallery extends Component {
  constructor(props){
    super(props);
    this.state = {
      cardList: [<Card face="face" back="back" />]
    };

    this.addCard = this.addCard.bind(this);
  }

  addCard(){
    var face = prompt("Face: ");
    var back = prompt("Back: ");
    this.setState((prevState) => ({
      cardList: prevState.cardList.concat([<Card face={face} back={back} />])
    }));
  }

  render(){
    const listItems = this.state.cardList.map((card) => 
                                             <li>{card}</li>);
    return (
      <div>
        <ul>{listItems}</ul>
        <NewCardBtn onClick={this.addCard} />
      </div>
    );
  }
}

class NewCardBtn extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    this.props.onClick.call();
  }
  
  render(){
    //return <button>New Card</button>;
    return <a href="" onClick={this.handleClick}>New Card </a>;
  }
}

export default App;
