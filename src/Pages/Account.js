import React, { useState }  from 'react';
import { useSelector, useDispatch } from 'react-redux'

const Account = () => {
    const [item, setItem] = useState("")
        console.log("account page")
    const user = useSelector(state => state.currentUser)
    return (
        <div>
            Item: {item}
            <input type="text" value={item} onChange={(e) => setItem(e.target.value)}/>
           <h1>Welcome, {user.username}!</h1> 
           <h2>Name: {user.firstName} {user.lastName}</h2> 
           <h2>Email: {user.email}</h2> 
           <h2>Username: {user.username}</h2> 
        </div>
    )
}

export default Account;

