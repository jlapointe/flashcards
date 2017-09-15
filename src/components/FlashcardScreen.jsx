import React, { Component } from 'react';
import { Button, Container, Modal } from 'semantic-ui-react';
import Flashcard from './Flashcard.jsx';
import FlashcardMenu from './FlashcardMenu.jsx';
import FlashcardModal from './FlashcardModal.jsx';

class FlashcardScreen extends Component {
  constructor(props){
    super(props);
    this.questionText = "some question";
    this.answerText = "some answer";

    this.state = {
      modalOpen: false,
      currentCard: 0
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.nextCard = this.nextCard.bind(this);
    this.prevCard = this.prevCard.bind(this);
  }

  toggleModal(){
    this.setState(prevState => ({
      modalOpen: !prevState.modalOpen
    }));
  }

  editCard(e){
    e.stopPropagation();
    console.log('edit card');
    this.toggleModal();
  }

  removeCard(e){
    e.stopPropagation();
    console.log('remove card');
  }

  deleteCard(e){
    e.stopPropagation();
    console.log('delete card');
  }

  nextCard(e){
    e.stopPropagation();
    if (this.state.currentCard + 1 < this.props.cardList.length){
      this.setState(prevState => ({
        currentCard: prevState.currentCard + 1
      }));
    }
  }

  prevCard(e){
    e.stopPropagation();
    if (this.state.currentCard - 1 >=  0){
      this.setState(prevState => ({
        currentCard: prevState.currentCard - 1
      }));
    }
  }

  render(){
    return (
      <Container>
        <FlashcardModal open={this.state.modalOpen} onClose={this.toggleModal} />
        <FlashcardMenu doEdit={this.toggleModal} />
        <Flashcard questionText={this.props.cardList[this.state.currentCard].questionText} answerText={this.props.cardList[this.state.currentCard].answerText} />
        <Button as='a' onClick={this.prevCard}>Prev</Button>
        <Button as='a' onClick={this.nextCard}>Next</Button>
      </Container>
    );
  }
}

export default FlashcardScreen;
