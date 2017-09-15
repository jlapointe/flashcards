import React, { Component } from 'react';
import { Dropdown, Grid, Menu, Segment } from 'semantic-ui-react';

class FlashcardMenu extends Component {
  constructor(props){
    super(props);
    this.handleClickEdit = this.handleClickEdit.bind(this);
  }

  handleClickEdit(e){
    this.props.doEdit.call();
    e.stopPropagation();
  }

  handleClickRemove(e){
    e.stopPropagation();
    console.log('remove card');
  }

  handleClickDelete(e){
    e.stopPropagation();
    console.log('delete card');
  }

  /** TODO: implement/fix left-opening dropdown in semantic-ui-react **/
  render(){
    return (
      <Menu secondary>
        <Menu.Item fitted position='right'>
          <Dropdown icon='ellipsis vertical'>
            <Dropdown.Menu>
              <Dropdown.Item text='Edit' onClick={this.handleClickEdit} />
              <Dropdown.Item text='Remove' />
              <Dropdown.Item text='Delete' />
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>
      </Menu>
    );
  }
}

export default FlashcardMenu;
