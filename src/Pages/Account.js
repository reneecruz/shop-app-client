import React, { useState }  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Account = () => {
    const [item, setItem] = useState("")
        console.log("account page")
    const user = useSelector(state => state.currentUser)

    console.log("account!", user)
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


        </div>
    )
}

export default Account;

