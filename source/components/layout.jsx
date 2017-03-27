import React from 'react';
import ReactDOM from 'react-dom';
import Bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.css';

import Viewer from './viewer/viewer.jsx';
import ActionBar from './action-bar/action-bar.jsx';

export default class Layout extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <ActionBar/>
        <Viewer/>
      </div>
    );
  }
}

ReactDOM.render(<Layout/>, document.getElementById('viewer'));
