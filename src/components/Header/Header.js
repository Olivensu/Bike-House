import React from 'react';
import './Header.css'
import logo from '../img/download.png';

const Header = () => {
    return (
        <div>
            <nav>
                <img className='icon' src={logo} alt="" />
                <div>
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Description</a>
                    <a href="#">Contract</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;