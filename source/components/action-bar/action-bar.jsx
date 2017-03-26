//Class Dependencies
import React from 'react';
import ReactDOM from 'react-dom';

//Styles
import styles from './action-bar.css';
import { Navbar } from 'react-bootstrap';

export default class ActionBar extends React.Component {
  constructor(props, context) {
    super();
  }

  render() {
    var className = styles.actionBar;
    return <Navbar id='action-bar' className={className}>Toolbar</Navbar>
  }
}
