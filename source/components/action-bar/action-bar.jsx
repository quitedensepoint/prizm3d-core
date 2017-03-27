//Class Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { ButtonToolbar, Button } from 'react-bootstrap';

//Styles
import styles from './action-bar.css';

export default class ActionBar extends React.Component {
  constructor(props, context) {
    super();
  }

  render() {
    const className = styles.actionBar;
    const toolbar = (
      <ButtonToolbar id='action-bar' className={className}>
        <Button>Placeholder</Button>
        <Button>Placeholder</Button>
        <Button>Placeholder</Button>
        <Button>Placeholder</Button>
        <Button>Placeholder</Button>
      </ButtonToolbar>
    );

    return toolbar;
  }
}
