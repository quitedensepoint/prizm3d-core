import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';

//Styles
import styles from './tree-view.css';

export default class TreeView extends React.Component {
  constructor(props, context) {
    super();
    this.objects = props.objects ? props.objects : [];
  }

  render() {
    const className = styles.treeView;
    this.objects.map((object, index) => {
      return <NavItem eventKey={index}>Placeholder {index}</NavItem>
    });
    const treeNav = (
      <Nav stacked activeKey={1} className={className}>
        { this.objects }
      </Nav>
    );

    return treeNav;
  }
}
