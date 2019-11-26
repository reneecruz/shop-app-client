import React, { useState }  from 'react';
import { useSelector, useDispatch } from 'react-redux'

const Account = () => {
    const [item, setItem] = useState("")
        console.log("account page")
    const user = useSelector(state => state.currentUser)

    console.log("account!", user.active_order)
    return (
        <div>
            Item: {item}
            <input type="text" value={item} onChange={(e) => setItem(e.target.value)}/>
           <h1>Welcome, {user.first_name}!</h1> 
           <h2>Name: {user.first_name} {user.last_name}</h2> 
           <h2>Email: {user.email}</h2> 
           <h2>Username: {user.username}</h2> 
           <img src={user.img_url} alt={user.first_name}/>
        </div>
    )
}

export default Account;

