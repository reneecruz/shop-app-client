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
        console.log(user)
    
        let last_order = user.submitted_orders.slice(-1)[0]
        

        return last_order ? 
        last_order.order_items.map(order_item => {
            return (
                <>
                <div key={order_item.id}>
                <ul>
                    {/* <img src={order_item.img_url} alt={order_item.name}/> */}
                    <li>{order_item.name}</li>
                    <li>{order_item.price}</li>
                </ul>
                </div>
                </>
            )
            }) : null
        }

    // const renderTotal = () => {

    //     let last_order = user.submitted_orders.slice(-1)[0]

    //     let priceArr = last_order.order_items.map(order_item => {
    //         return order_item.price
    //     })

    //     const arrSum = priceArr => priceArr.reduce((a,b) => a + b, 0)

    //     return last_order ? 
    //             <>
    //             <h2>
    //             "Your total is {arrSum}"
    //             </h2>
               
    //             </>

    //     : 

    //     null

    // }
        // debugger 
        // return (user.submitted_orders ? 
        // user.submitted_orders.last
        // :
        // null)

    return (
        <div>
            <h1>Thanks, {user.first_name}! You've successfully submitted your order.</h1>
            {/* {renderTotal()} */}

            { user.submitted_orders ? renderOrderItems() : null }
            
        </div>
    )
}

export default Checkout;
    