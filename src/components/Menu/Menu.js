import React from 'react';
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
                    <a href="/order">Order</a>
                    <a href="/order-review">Order Review</a>
                    <a href="/inventory Management">Inventory Management</a>
                    <a href="/login">Login</a>
                </div>
            </nav>
        </div>
    );
};

export default Menu;