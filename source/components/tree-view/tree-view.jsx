import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';

//Styles
import styles from './tree-view.css';

export default class TreeView extends React.Component {
  constructor(props, context) {
    super();
  }

  render() {
    const className = styles.treeView;
    const treeNav = (
      <Nav stacked activeKey={1} className={className}>
        <NavItem eventKey={1} href="/">Placeholder</NavItem>
      </Nav>
    );

    return treeNav;
  }
}
