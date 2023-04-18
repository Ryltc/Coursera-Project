import React from 'react';
import { ReactComponent as Logo } from './Logo .svg';
import  Navbar from './copmonents/Navbar';

function header() {
    return (
        <>
            <div id="header-img">
                <img src={Logo} alt="Logo"/>
            </div>
            <Navbar>
                <ul>
                    <li><a href="/home/">Homw</a></li>
                    <li><a href="/about/">About</a></li>
                    <li><a href="/menu/">menu</a></li>
                    <li><a href="/reservations/">Reservations</a></li>
                    <li><a href="/order-online/">Order Online</a></li>
                    <li><a href="/login/">Login</a></li>
                </ul>
            </Navbar>
        </>
    )
}