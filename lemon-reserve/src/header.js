import React from 'react';
import { ReactComponent as Logo } from './Logo .svg';
import  Navbar from './components/Navbar';

function header() {
    return (
        <>
            <div id="header-img">
                <img src={Logo} alt="Logo"/>
            </div>
            <Navbar />
        </>
    )
}