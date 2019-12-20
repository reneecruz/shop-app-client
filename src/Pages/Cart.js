import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import userActions from '../Redux/Actions/userActions';

const Cart = (props) => {
    const [item, setItem] = useState("")
    const user = useSelector(state => state.currentUser)
    const dispatch = useDispatch()
    console.log(user)
    
    const renderCart = () => {
        // console.log(user.active_order)
    return user.active_order.order_items.map(order_item => {
    return (
        <div className="cart-item" key={order_item.item.id}>
        <Link to={`/items/${order_item.item.id}`} >
        <img src={order_item.item.img_url} />
        </Link>
        <p>{order_item.item.name}</p>
        <p>${order_item.item.price}</p>  
        <button className="show-button" onClick={removeItemFromCart}>Remove from Cart</button>  
        </div>
        )   
    })
    }
    
    const removeItemFromCart = () => {
        console.log("I've been clicked!", user.active_order)
        return user.active_order.order_items
        // dispatch(userActions.removeOrderItem())
    }

    const checkOut = () => {
        // debugger
        console.log(props.submitOrder)
        dispatch(userActions.submitOrder(user.active_order))
        props.history.push('/checkout')
    }

    // const renderTotalPrice = () => {
    //     return user.active_order.order_items.reduce((accum, 0) => {
    //         // order_item.price
    //     })
    // }

        return (
            
            <>
            <div className="content">
            <h1>{user.first_name}'s Shopping Cart</h1>
                {user.active_order.order_items.length === 0 
                ? 
                
                <h2>Your cart is currently empty, {user.first_name} </h2>
                
                : 
                <div>
                
                <h2>You've got {user.active_order.order_items.length} items in your cart, {user.first_name}! 
                </h2>
                <ul>
                    {renderCart()}
                </ul>
                <button className="show-button" onClick={checkOut}>Checkout</button>
                </div>
                }
                <Link to="/" className="show-button">Continue Shopping</Link>
                </div>
            </>
        )
}

export default Cart;

