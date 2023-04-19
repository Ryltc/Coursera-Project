import React from 'react';
import { ReactComponent as Logo } from './Logo.svg';

function Navbar() {
    return (
        <>
            <nav className='navigation-bar'>
                <div className='navigation-container'>
                    <Logo/>
                        <ul>
                            <li>
                                <a href="/home">Home</a>
                            </li>
                            <li>
                                <a href="/about">About</a>
                            </li>
                            <li>
                                <a href="/menu">Menu</a>
                            </li>
                            <li>
                                <a href="/reservations">Reservations</a>
                            </li>
                            <li>
                                <a href="/order-online">Order Online</a>
                            </li>
                            <li>
                                <a href="/login">Login</a>
                            </li>
                        </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;