import React from 'react';
import { ReactComponent as Logo } from './Logo.svg';
import './FooterComp.css';

function FooterComp() {
    return(
        <div className="footer">
            <div className="footer-logo">
                <Logo className="footer-lemon"/>
            </div>
            <div className="footer-menu">
                <ul className="fmenu">
                    <li className="fmenu">
                        <a className="fnavbar" href="/home">Home</a>
                    </li>
                    <br></br>
                    <li className="fmenu">
                        <a className="fnavbar" href="/about">About</a>
                    </li>
                    <br></br>
                    <li className="fmenu">
                        <a className="fnavbar" href="/menu">Menu</a>
                    </li>
                    <br></br>
                    <li className="fmenu">
                        <a className="fnavbar" href="/reservations">Reservations</a>
                    </li>
                    <br></br>
                    <li className="fmenu">
                        <a className="fnavbar" href="/order-online">Order Online</a>
                    </li>
                    <br></br>
                    <li className="fmenu">
                        <a className="fnavbar" href="/login">Login</a>
                    </li>
                </ul>
            </div>
            <div className="footer-contact">
                <div className="footer-contact-title">
                    <h2>Contact</h2>
                </div>
                <div className="footer-contact-info">
                    <ul>
                        <li className="fmenu" >Address Line 1</li>
                        <li className="fmenu" >Address Line 2</li>
                        <li className="fmenu" >Address Line 3</li>
                        <br>
                        </br>
                        <li className="fmenu">email@email.address</li>
                        <br></br>
                        <li className="fmenu">(000)000-0000</li>
                    </ul>
                </div>
            </div>
            <div className="footer-socials">
                <div className="footer-social-title">
                    <h2>Social</h2>
                </div>
                <img src='./icons8-facebook-48.png' className="fb" alt='facebook'></img>
                <img src='./icons8-instagram-48.png' className="ig" alt='instagram'></img>
                <img src='./icons8-twitter-48.png' className="tw" alt='twitter'></img>
            </div>
        </div>
    )
}
export default FooterComp;