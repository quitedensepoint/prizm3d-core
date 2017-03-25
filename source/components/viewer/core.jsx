import React from 'react';
import ReactDOM from 'react-dom';

class Core extends React.Component {
  render() {
    return <h1>Hello Cody</h1>
  }
}

ReactDOM.render(<Core/>, document.getElementById('viewer'));
