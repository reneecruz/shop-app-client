import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import userActions from '../Redux/Actions/userActions';

const Cart = (props) => {
    const [item, setItem] = useState("")
    const user = useSelector(state => state.currentUser)
    const dispatch = useDispatch()
    // console.log(user.active_order.order_items[0])
    
    const renderCart = () => {
        console.log(user.active_order)
    return user.active_order.order_items.map(order_item => {
    return (
        <div className="cart-item">
        <Link to={`/items/${order_item.item.id}`} >
        <img src={order_item.item.img_url} />
        </Link>
        <p>{order_item.item.name}</p>
        <p>${order_item.item.price}</p>    
        </div>
        )   
    })
    }

    const checkOut = () => {
        console.log(props.submitOrder)
        dispatch(userActions.submitOrder(user.active_order))
    }

        return (
            <div>
                <h1>{user.first_name}'s Shopping Cart</h1>
                <h2>You've got {user.active_order ? user.active_order.order_items.length : null} items in your cart.</h2>
                <ul>
                    {renderCart()}
                </ul>
                <button onClick={checkOut}>Checkout</button>
            </div>
        )
}

export default Cart;

