import React from 'react'
import { connect } from 'react-redux'
import { Nav, NavItem } from 'react-bootstrap'

//Styles
import styles from './tree-view.css'

class TreeView extends React.Component {
  constructor( props, context ) {
    super( );
    console.log( props )
    this.sceneObjects = props.sceneObjects
      ? props.sceneObjects
      : [ ];
  }

  render( ) {
    const className = styles.treeView;
    this.sceneObjects = this.sceneObjects.map(( sceneObject, index ) => {
      return <NavItem eventKey={index}>Placeholder {index}</NavItem>
    });
    const treeNav = (
      <Nav stacked activeKey={1} className={className}>
        {this.sceneObjects}
      </Nav>
    );

    return treeNav;
  }
}

const mapStateToProps = ( state ) => {
  return state
}

export default connect( mapStateToProps )( TreeView )
