import React, { Component } from 'react';
// import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import userActions from '../Redux/Actions/userActions';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class ShowItem extends Component {

    handleOnClick = () => {
        if (this.props.currentUser.active_order){
        const active_order_id = this.props.currentUser.active_order.id
        const item_id = this.props.match.params.id

        return this.props.createOrderItem(item_id, active_order_id)} 
        else {return null }
       

        // console.log("been clicked!", this.props)
        
    }

  item = () => {
      const { params } = this.props.match;
      if(this.props.items.length) {
       return this.props.items.find(item => item.id == params.id)
      }
      return null
  }

  render() {
    // console.log("showpage", this.item(), localStorage.token)
    if(this.item() !== null) {
    return (<div className="show-item-container">
    <img src={this.item().img_url} alt={this.item().name} />
    <h1>{this.item().name}</h1>
    <h2>${this.item().price}</h2>
    <h3>{this.item().description}</h3>
    
    <Link to="/cart" >
       { this.props.currentUser.id ? <button className="show-button" onClick={this.handleOnClick}>Add to Cart</button> : null}
    </Link>
    <Link to="/" className="show-button">Continue Shopping</Link>
    </div>)
    }
    return null
  }
}

const mapStateToProps = state => ({ 
    items: state.itemsReducer,
    currentUser: state.currentUser
})

const mapDispatchToProps = {
    createOrderItem: userActions.createOrderItem

}

export default connect(mapStateToProps, mapDispatchToProps)(ShowItem);

// Function Component Version

// const ShowItem = () => {
//     const [item, setItem] = useState("")
//         console.log("ShowItem page", item)
//     const user = useSelector(state => state.currentUser)

//     useEffect(() => {
        
//     }, [])



//     if (item) {
//         return (
//             <div className="show-item-container">
            
//                 <img src={item.img_url} alt={item.name} />        
//                 <h2>{item.name}</h2>
//                 <h2>${item.price}</h2>          
//                 <h3>{item.description}</h3>

//             </div>
//         );
//     } 
//     return null
// };


// export default ShowItem;








// const ShowItem = props => {
//     const itemId = parseInt(props.match.params.id);
//     const item = props.items.find(item => item.id === itemId);


// const item = () => {
//       const { params } = this.props.match;
//       if(this.props.items.length) {
//        return this.props.items.find(item => item.id == params.id)
//       }
//       return null
// }



