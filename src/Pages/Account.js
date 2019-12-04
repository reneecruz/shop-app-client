import React, { useState }  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Account = (props) => {
    const [item, setItem] = useState("")
        
    const user = useSelector(state => state.currentUser)


    const renderSubmittedOrders = () => {
       
    return user.submitted_orders.map(order_item => {
    return (
        <div className="cart-item" >
        <Link to={`/items/${order_item.item.id}`} >
        <img src={order_item.item.img_url} />
        </Link>
        <p>{order_item.item.name}</p>
        <p>${order_item.item.price}</p>  
        </div>
        )   
    })
    }

    console.log("account page", user.submitted_orders)

    return (
        <div>
            {/* Item: {item}
            <input type="text" value={item} onChange={(e) => setItem(e.target.value)}/> */}
           <h1>Welcome, {user.first_name}!</h1> 
           <h2>Name: {user.first_name} {user.last_name}</h2> 
           <h2>Email: {user.email}</h2> 
           <h2>Username: {user.username}</h2> 
           <img src={user.img_url} alt={user.first_name}/>

           <Link to="/" className="show-button">Continue Shopping</Link>
           <Link to="/cart" className="show-button">View Cart ({user.active_order ? user.active_order.order_items.length : null}) </Link>
           <Link to="/"className="show-button">Edit Profile </Link>
           <Link to="/"className="show-button">Delete Profile </Link>

        
            {renderSubmittedOrders}
            
        </div>
    )
}

export default Account;

