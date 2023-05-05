import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { ReactComponent as Logo } from './Logo.svg';
import FooterComp from "../components/FooterComp";

export default function RootLayout() {
    return(
        <div className="root-layout">
            <header>
                <Logo className="lemon"/>
                <nav>
                    <NavLink class="topnav" to="/">Home</NavLink>
                    <NavLink class="topnav" to="about">About</NavLink>
                    <NavLink class="topnav" to="menu">Menu</NavLink>
                    <NavLink class="topnav" to="/ReservationsPage">Reservations</NavLink>
                    <NavLink class="topnav" to="Order Online">Order Online</NavLink>
                    <NavLink class="topnav" to="Login">Login</NavLink>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <FooterComp />
            </footer>
        </div>
    )
}