import React from 'react';
import { ReactComponent as Logo } from './Logo.svg';
import './FooterComp.css';

function FooterComp() {
    return(
        <div class="footer">
            <div class="footer-logo">
                <Logo class="footer-lemon"/>
            </div>
            <div class="footer-menu">
                <ul class="fmenu">
                    <li class="fmenu">
                        <a class="fnavbar" href="/home">Home</a>
                    </li>
                    <br></br>
                    <li class="fmenu">
                        <a class="fnavbar" href="/about">About</a>
                    </li>
                    <br></br>
                    <li class="fmenu">
                        <a class="fnavbar" href="/menu">Menu</a>
                    </li>
                    <br></br>
                    <li class="fmenu">
                        <a class="fnavbar" href="/reservations">Reservations</a>
                    </li>
                    <br></br>
                    <li class="fmenu">
                        <a class="fnavbar" href="/order-online">Order Online</a>
                    </li>
                    <br></br>
                    <li class="fmenu">
                        <a class="fnavbar" href="/login">Login</a>
                    </li>
                </ul>
            </div>
            <div class="footer-contact">
                <div class="footer-contact-title">
                    <h2>Contact</h2>
                </div>
                <div class="footer-contact-info">
                    <ul>
                        <li class="fmenu" >Address Line 1</li>
                        <li class="fmenu" >Address Line 2</li>
                        <li class="fmenu" >Address Line 3</li>
                        <br>
                        </br>
                        <li class="fmenu">email@email.address</li>
                        <br></br>
                        <li class="fmenu">(000)000-0000</li>
                    </ul>
                </div>
            </div>
            <div class="footer-socials">
                <div class="footer-social-title">
                    <h2>Social</h2>
                </div>
                <img src='./icons8-facebook-48.png' class="fb" alt='facebook'></img>
                <img src='./icons8-instagram-48.png' class="ig" alt='instagram'></img>
                <img src='./icons8-twitter-48.png' class="tw" alt='twitter'></img>
            </div>
        </div>
    )
}
export default FooterComp;