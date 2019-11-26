import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { connect } from 'react-redux';

const Cart = () => {
    const [item, setItem] = useState("")
    console.log("shopping cart page")
    const user = useSelector(state => state.currentUser)
        console.log("shopping cart")
        return (
            <div>
                <h1>{user.first_name}'s Shopping Cart</h1>
                <ul>
                    <li>{item.name}</li>
                </ul>
            </div>
        )
}

export default Cart;

