import React, { useState }  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Account = (props) => {
        
    const user = useSelector(state => state.currentUser)

    const renderSubmittedOrders = () => {
       let arr = []
       if(user.submitted_orders) {
        
        //    debugger
           user.submitted_orders.forEach(order => {

               arr = order.order_items.map(item => {
                // debugger
                return (
                    <div className="cart-item" key={item.id}>
                    <h3>Order Date: {new Date(item.updated_at.split(" ")[0]).toDateString()}</h3>
                    
                    <Link to={`/items/${item.id}`} >
                    <img src={item.img_url} />
                    </Link>
                    <p>{item.name}</p>
                    <p>${item.price}</p>  
                    </div>
                    ) 
            })
        
          
        })
       }
    return arr
    }

    console.log("account page", user)

    return (
        <div className="content">
            
           <h1>Welcome, {user.first_name}!</h1> 
           <h2>Name: {user.first_name} {user.last_name}</h2> 
           <h2>Email: {user.email}</h2> 
           <h2>Username: {user.username}</h2> 
           <img className="profile-img" src={user.img_url} alt={user.first_name}/>

           <Link to="/" className="show-button">Continue Shopping</Link>
           <Link to="/cart" className="show-button">View Cart ({user.active_order ? user.active_order.order_items.length : null}) </Link>
           <Link to="/"className="show-button">Edit Profile </Link>
           <Link to="/"className="show-button">Delete Profile </Link>

{user.submitted_orders ? <h2>{user.first_name}'s Past Orders: </h2> : null }

            {/* <>
            <h3>You spent ${user.submitted_orders.ordertotal_price} on this order.</h3>
            </>  */}
           
            {renderSubmittedOrders()}
            
            
        </div>
    )
}

export default Account;

