import React from 'react';
import { Col, Row } from 'react-bootstrap';

import Viewer from './viewer/viewer.jsx';
import ActionBar from './action-bar/action-bar.jsx';
import TreeView from './tree-view/tree-view.jsx';

const appColStyle = {
  padding: 0
}

const App = () => (
  <div>
    <Row>
      <ActionBar/>
    </Row>
    <Row>
      <Col xs={12} sm={4} style={appColStyle}>
        <TreeView/>
      </Col>
      <Col xs={12} sm={8} style={appColStyle}>
        <Viewer/>
      </Col>
    </Row>
  </div>
)

export default App
