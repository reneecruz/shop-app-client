import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import userActions from '../Redux/Actions/userActions';

const Checkout = (props) => {

    const [item, setItem] = useState("")
    const user = useSelector(state => state.currentUser)
    const dispatch = useDispatch()
   
    const renderOrderItems = () => {
    
        let last_order = user.submitted_orders.slice(-1)[0]
        

        return last_order ? 
        last_order.order_items.map(order_item => {
            return (
                <>
                <div key={order_item.id}>
                <ul>
                    <li>{order_item.name}</li>
                    <li>{order_item.price}</li>
                </ul>
                </div>
                </>
            )
            }) : null
        }
        // debugger 
        // return (user.submitted_orders ? 
        // user.submitted_orders.last
        // :
        // null)

    return (
        <div>
            <h1>Thanks, {user.first_name}! You've successfully submitted your order.</h1>
            {/* <h2>{user.submitted_orders.order_items}</h2> */}

            { user.submitted_orders ? renderOrderItems() : null }
            
        </div>
    )
}

export default Checkout;
    