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

const cardList = [
  {
    key:1,
    questionText: "Q 1",
    answerText: "A 1"
  },
  {
    key:2,
    questionText: "Q 2",
    answerText: "A 2"
  }
];

const App = () => (
  <FlashcardScreen cardList={cardList} />
)

render(<App />, MOUNT_NODE)
