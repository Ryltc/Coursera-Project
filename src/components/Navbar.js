import React from 'react';
import { ReactComponent as Logo } from './Logo.svg';
import './Navbar.css';

function Navbar() {
    return (
        <>
            <nav className='navigation-bar'>
                <div className='navigation-container'>
                    <Logo className="lemon"/>
                        <ul>
                            <li>
                                <a class="navbar" href="/home">Home</a>
                            </li>
                            <li>
                                <a class="navbar" href="/about">About</a>
                            </li>
                            <li>
                                <a class="navbar" href="/menu">Menu</a>
                            </li>
                            <li>
                                <a class="navbar" href="/ReservationsPage">Reservations</a>
                            </li>
                            <li>
                                <a class="navbar" href="/order-online">Order Online</a>
                            </li>
                            <li>
                                <a class="navbar" href="/login">Login</a>
                            </li>
                        </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;