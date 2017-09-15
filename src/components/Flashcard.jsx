import React, { Component } from 'react';
import { Dropdown, Grid, Menu, Segment } from 'semantic-ui-react';

class Flashcard extends Component {
  constructor(props){
    super(props);
    this.state = {
      isFlipped: false,
    };
    this.flipCard = this.flipCard.bind(this);
  }

  flipCard(){
    console.log('flipCard');
    this.setState(prevState => ({
      isFlipped: !prevState.isFlipped
    }));
  }

  render(){
    return (
      <Grid container stretched>
        <Grid.Row columns={1}>
          <Grid.Column>
            <Segment onClick={this.flipCard} as='div'>
              {this.state.isFlipped ? this.props.answerText : this.props.questionText}
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Flashcard;
