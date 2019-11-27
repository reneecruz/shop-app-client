import React, { Component } from 'react';
import userActions from '../Redux/Actions/userActions';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class ShowPage extends Component {

  item = () => {
      const { params } = this.props.match;
      if(this.props.items.length) {
       return this.props.items.find(item => item.id == params.id)
      }
      return null
  }

  render() {
    console.log("showpage", this.item(), localStorage.token)
    if(this.item() !== null) {
    return <div className="show-item-container">
    <img src={this.item().img_url} alt={this.item().name} />
    <h1>{this.item().name}</h1>
    <h2>${this.item().price}</h2>
    <h3>{this.item().description}</h3>
    <button className="show-button">Add to Cart</button>
    {/* <Link to="/cart" className= "show-button">Add to Cart</Link> */}
    <Link to="/" className="show-button">Continue Shopping</Link>
    </div>;
    }
    return null
  }
}

const mapStateToProps = state => ({ items: state.itemsReducer})

const mapDispatchToProps = {
    createOrderItem: userActions.createOrderItem

}

export default connect(mapStateToProps, mapDispatchToProps)(ShowPage);

