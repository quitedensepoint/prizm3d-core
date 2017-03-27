//Class Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Col, Row } from 'react-bootstrap';

import Viewer from './viewer/viewer.jsx';
import ActionBar from './action-bar/action-bar.jsx';
import TreeView from './tree-view/tree-view.jsx';

export default class Layout extends React.Component {
  constructor() {
    super();
  }

  render() {
    const appColStyle = {
      padding: 0
    }

    return (
      <div className="container-fluid">
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
    );
  }
}

ReactDOM.render(<Layout/>, document.getElementById('viewer'));
