import React, { Component } from 'react';

export default class ShowPage extends Component {
  state = {
    item: {}
  };

  componentDidMount() {
    const { params } = this.props.match;
    fetch('https://localhost:3000/items' + params.id)
      .then(r => r.json())
      .then(data => {
        console.log(data);
        // debugger;
      });
  }

  render() {
    const { item } = this.state;
    return <div></div>;
  }
}