import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../logo.svg'
import './Menu.css'

const Menu = () => {
    return (
        <div>
            <nav className='menu'>
                <div>
                    <img src={logo} alt="" />
                </div>
                <div>
                    <NavLink to="/shop">Shop</NavLink>
                    <NavLink to="/order-review">Order Review</NavLink>
                    <NavLink to="/inventory Management">Inventory Management</NavLink>
                    <NavLink to="/login">Loginste</NavLink>
                </div>
            </nav>
        </div>
    );
};

export default Menu;