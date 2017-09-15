//import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';
import React from 'react';
import { render } from 'react-dom';
import { Button, Card, Container, Header, Item } from 'semantic-ui-react';
import './semantic/dist/semantic.min.css';

/* Custom components */
import FlashcardScreen from './components/FlashcardScreen.jsx';
//import Modal from './FlashcardModal.jsx';
/* End custom components */

const MOUNT_NODE = document.getElementById('root')

const Flashcards = () => (
  <FlashcardScreen cardList={cardList} />
)

render(<Flashcards />, MOUNT_NODE)
