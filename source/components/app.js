import React from 'react';
import { Col, Row } from 'react-bootstrap';

import Viewer from './viewer/viewer.jsx';
import ActionBar from './action-bar/action-bar.jsx';
import TreeView from './tree-view/tree-view.jsx';
import EditObject from '../containers/edit-object/edit-object.js'

const noPad = {
  padding: 0
}

const noMargin = {
  margin: 0
}

const App = ( ) => (
  <div>
    <Row style={noMargin}>
      <ActionBar/>
    </Row>
    <Row style={noMargin}>
      <Col xs={12} sm={4} style={noPad}>
        <TreeView/>
        <EditObject/>
      </Col>
      <Col xs={12} sm={8} style={noPad}>
        <Viewer/>
      </Col>
    </Row>
  </div>
)

export default App
