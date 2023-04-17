import React from 'react';
import {Nav} from './Nav';
import { ReactComponent as Logo } from './icon_assets./Logo.svg';

const Header = () => {
    return (
        <>
            <div>
                <img src={Logo} alt="Logo"/>
            </div>
            <nav>
                <ul>
                    <li><a href="/home/">Homw</a></li>
                    <li><a href="/about/">About</a></li>
                    <li><a href="/menu/">menu</a></li>
                    <li><a href="/reservations/">Reservations</a></li>
                    <li><a href="/order-online/">Order Online</a></li>
                    <li><a href="/login/">Login</a></li>
                </ul>
            </nav>
        </>
    )
}