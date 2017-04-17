import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Button, ButtonGroup } from 'react-bootstrap'
import { setObjectName } from '../../actions/actions.js'

//import styles from './object-editor.css'

let EditObject = ({ dispatch }) => {

  const nameEditor = <input type='text'/>

  return (
    <div>
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
  )
}

EditObject = connect( )( EditObject )

export default EditObject
