//Class Dependencies
import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';

//Styles
import styles from './action-bar.css';

export default class ActionBar extends React.Component {
  constructor(props, context) {
    super();
  }

  render() {
    const className = styles.actionBar;
    const toolbar = (
      <ButtonGroup justified id='action-bar' className={className}>
        <ButtonGroup><Button>Placeholder</Button></ButtonGroup>
        <ButtonGroup><Button>Placeholder</Button></ButtonGroup>
        <ButtonGroup><Button>Placeholder</Button></ButtonGroup>
        <ButtonGroup><Button>Placeholder</Button></ButtonGroup>
        <ButtonGroup><Button>Placeholder</Button></ButtonGroup>
      </ButtonGroup>
    );

    return toolbar;
  }
}
