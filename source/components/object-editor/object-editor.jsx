import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Button, ButtonGroup } from 'react-bootstrap'
import { setObjectName } from '../../actions/actions.js'

import styles from './object-editor.css'

class ObjectEditor extends React.Component {
  constructor( props, context ) {
    super( props, context )
    this.sceneObjects = props.sceneObjects
      ? props.sceneObjects
      : [ ];
    this.sceneObjects = props.sceneObjects.map(( sceneObject, index ) => {
      if ( sceneObject.editMode === true ) {
        return { name: sceneObject.name }
      }
    })
  }

  render( ) {
    const nameEditor = <input type='text' value={this.sceneObjects[0].name}/>

    return <div className={styles.editorPane}>
      {nameEditor}
      <ButtonGroup>
        <Button onClick={function ( ) {
          dispatch(setObjectName( 0, 'Hello' ))
        }}>
          <span className='glyphicon glyphicon-ok'></span>
        </Button>
        <Button>
          <span className='glyphicon glyphicon-remove'></span>
        </Button>
      </ButtonGroup>
    </div>
  }
}

const mapStateToProps = ( state ) => {
  return state
}

const cancel = ( ) => {
  return this.state
}

const save = ( id, name ) => {
  setObjectName( 0, 'Hello' )
}

ObjectEditor.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default connect( mapStateToProps )( ObjectEditor )
