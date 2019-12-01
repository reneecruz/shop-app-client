import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Cart = () => {
    const [item, setItem] = useState("")
    console.log("shopping cart page", window.history, item)
    const user = useSelector(state => state.currentUser)
console.log(user.active_order.order_items[0])
const renderCart = () => {
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
      
        return (
            <div>
                <h1>{user.first_name}'s Shopping Cart</h1>
                <h2>You've got {user.active_order.order_items.length} items in your cart.</h2>
                <ul>
                    {renderCart()}
                </ul>
            </div>
        )
}

export default Cart;

