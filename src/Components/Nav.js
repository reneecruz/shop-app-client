import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import userActions from '../Redux/Actions/userActions';

const Nav = () => {
    const currentUser = useSelector(state => state.currentUser)
    const dispatch = useDispatch();
    const handleLogout = () =>{
        dispatch(userActions.logoutUser());
    };

    const guestRoutes = () => {
        return (
        <>
        <Link to="/">Home</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
        </>
        )    
    }

    const userRoutes = () => {
        return (
            <>
            <Link to="/">Home</Link>
            <Link to="/account">My Account</Link>
            <Link to="/" onClick={handleLogout}>Logout</Link>     
            <Link to="/cart">Cart</Link>
            </>
        )
    }

    return (
        <nav id="nav" style={{ display: 'flex', justifyContent: 'space-evenly', position: 'sticky' }}>
          
          { currentUser.id ? userRoutes() : guestRoutes() }

        </nav>
    )
}

export default Nav;