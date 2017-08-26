//import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';
import React from 'react';
import { render } from 'react-dom';
import { Button, Card, Container, Header, Item } from 'semantic-ui-react';
import Flashcard from './components/Flashcard.jsx';
import './semantic/dist/semantic.min.css';

const MOUNT_NODE = document.getElementById('root')

const App = () => (
  <Container>
    <Flashcard questionText="This is a question" answerText="This is an answer?" />
    <Button>Blah</Button>
  </Container>
)

render(<App />, MOUNT_NODE)
