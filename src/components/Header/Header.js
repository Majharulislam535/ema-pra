import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import useAuth from '../ContextApi/useAuth';

const Header = () => {
    const { user, sigInOut } = useAuth();
    return (
        <div>
            <div className='App'>
                <img src={logo} width="300px" alt="" />
            </div>
            <div className='navigation'>
                <NavLink to='/shop'>Shop</NavLink>
                <NavLink to='/order'>Order</NavLink>
                <NavLink to='/inventory'>Inventory</NavLink>
                {
                    user.email ? <button onClick={sigInOut}>Logout</button> : <NavLink to='/login'>Login</NavLink>
                }
                <Link to='/'>{user?.displayName}</Link>
            </div>
        </div>
    );
};

export default Header;