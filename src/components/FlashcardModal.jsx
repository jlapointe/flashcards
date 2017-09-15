import React, { Component } from 'react';
import { Button, Form, Modal } from 'semantic-ui-react';

class FlashcardModal extends Component {
  constructor(props){
    super(props);
  }


  render(){
    return (
      <Modal open={this.props.open} onClose={this.props.onClose} >
        <Form>
          <Form.TextArea label='Question text:' />
          <Form.TextArea label='Answer text:' />
          <Button as='a'>Save</Button>
          <Button as='a'>Cancel</Button>
        </Form>
      </Modal>
    );
  }
}

export default FlashcardModal;
