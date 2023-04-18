import React from 'react';

function Navbar() {
    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/menu">menu</a></li>
                        <li><a href="/reservations">Reservations</a></li>
                        <li><a href="/order-online">Order Online</a></li>
                        <li><a href="/login">Login</a></li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;