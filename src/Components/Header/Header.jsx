import React from 'react';
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
    return (
        <nav className='navbar'>
            <img src={logo} alt="" />
            <ul className='list'>
                <a href='/order'>Order</a>
                <a href='/order-review'>Order Review</a>
                <a href='/inventory'>Manage Inventory</a>
                <a href='/login'>Login</a>
            </ul>
        </nav>
    );
};

export default Header;