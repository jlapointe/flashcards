import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './w3.css';

this.cards = [
  {id:1, questionText:'a', answerText:'A'},
  {id:2, questionText:'b', answerText:'B'},
  {id:3, questionText:'c', answerText:'C'}
];

class App extends Component {
  constructor(props){
    super(props);
    this.cards = [
      {id:1, questionText:'a', answerText:'A'},
      {id:2, questionText:'b', answerText:'B'},
      {id:3, questionText:'c', answerText:'C'}
    ];

    this.addCard = this.addCard.bind(this);
  }

  addCard(){
    console.log('addcard');
    this.cards = this.cards.concat({id:4,questionText:'d',answerText:'D'});
  }

  render() {
    return (
      <div>
        <CardGallery cards={this.cards}/>
        <NewCardBtn onClick={this.addCard}/>
      </div>
    );
  }
}

class Card extends Component {
  constructor(props){
    super(props);
    this.face = this.props.face;
    this.back = this.props.back;
    this.state = {
      isFaceDown: true
    };
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

  render(){
    return (
      <div className="w3-card w3-blue" onClick={this.flipCard}>
        <p>{this.state.isFaceDown ? this.back : this.face}</p>
      </div>
    );
  }
}

class CardGallery extends Component {
  constructor(props){
    super(props);

    this.cards = this.props.cards;

    this.addCard = this.addCard.bind(this);
    this.removeCard = this.removeCard.bind(this);
  }

  addCard(){
    var face = prompt("Face: ");
    var back = prompt("Back: ");
    this.setState((prevState) => ({
      cards: prevState.cards.concat([<Card face={face} back={back} />])
    }));
  }

  removeCard(key){
    console.log(key);
    this.setState((prevState) => {
      var newList = prevState.cards.filter( (el) => { return prevState.cards.indexOf(el) !== key; } );
      console.log(newList);
      //return {cards: prevState.cards.filter( (el) => { return prevState.cards.indexOf(el) !== key; } )}
      return {cards: newList};
    });
  }

  render(){
    return (
      <div>
        {this.cards.map((card) =>
            <Card key={card.id} face={card.answerText} back={card.questionText} />
        )}
      </div>
    );
    /*const listItems = this.state.cards.map((card) => (
      <li key={this.state.cards.indexOf(card)}>{card}
      <RemoveCardBtn onClick={this.removeCard.bind(this,this.state.cards.indexOf(card))} />
      </li>
    ));
    return (
      <div>
        <ul>{listItems}</ul>
        <NewCardBtn onClick={this.addCard} />
      </div>
    );*/
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
    //cards.push({id:4,questionText:'D',answerText:'d'});
  }

  render(){
    return <a href="" onClick={this.handleClick}>New Card</a>;
  }
}

class RemoveCardBtn extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    this.props.onClick.call();
  }

  render(){
    return <a href="" onClick={this.handleClick}>X</a>;
  }
}


export default App;
