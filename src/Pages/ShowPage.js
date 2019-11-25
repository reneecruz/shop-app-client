import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class ShowPage extends Component {
  state = {
    item: {}
  };

  componentDidMount() {
    const { params } = this.props.match;
    fetch('http://localhost:3000/items' + params.id)
      .then(r => r.json())
      .then(data => {
        console.log(data);
        // debugger;
      });
  }

  render() {
    const { item } = this.state;
    return <div>{item.name}</div>;
  }
}