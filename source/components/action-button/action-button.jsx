import React from 'react';

export default class ActionButton extends React.Component {
  constructor(props, context) {
    super();
    this.description = props.description;
    this.title = props.title;
    this.icon = props.icon;
    this.onClick = props.onClick;
  }

  render() {
    return <div><Button>{this.title}</Button></div>
  }
}
