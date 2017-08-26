import React, { Component } from 'react';
import { Card, Menu, Icon } from 'semantic-ui-react';

class Flashcard extends Component {
  constructor(props){
    super(props);
    this.answerText = this.props.answerText;
    this.questionText = this.props.questionText;
    this.state = {
      isFlipped: false
    };
    
    this.flipCard = this.flipCard.bind(this);
    this.rmCard = this.rmCard.bind(this);
  }

  componentDidMount() {
    /*this.setState({
      isFlipped: true
    });*/
  }

  flipCard(){
    console.log('flipCard');
    this.setState(prevState => ({
      isFlipped: !prevState.isFlipped
    }));
  }

  rmCard(e){
    e.stopPropagation();
    console.log('remove card');
  }

  render(){
    return (
      <Card onClick={this.flipCard}>
        <Card.Header>
          <Menu icon secondary fitted>
            <Menu.Item name='remove' position='right'>
              <Icon name='remove' onClick={this.rmCard}/>
            </Menu.Item>
          </Menu>
        </Card.Header>
        <Card.Content>
          {this.state.isFlipped ? this.answerText : this.questionText}
        </Card.Content>
      </Card>
    );
  }
}

export default Flashcard;
