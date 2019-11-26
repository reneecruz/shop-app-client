import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import userActions from '../Redux/Actions/userActions';

const Nav = () => {

    const dispatch = useDispatch();
    const handleLogout = () =>{
        dispatch(userActions.logoutUser());
    };

    return (
        <nav id="nav" style={{ display: 'flex', justifyContent: 'space-evenly', position: 'sticky' }}>
            <Link to="/">Home</Link>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
            <Link to="/" onClick={handleLogout}>Logout</Link>  
            <Link to="/account">My Account</Link>
            <Link to="/cart">Cart</Link>
        </nav>
    )
}

export default Nav;