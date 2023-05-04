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
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="about">About</NavLink>
                    <NavLink to="menu">Menu</NavLink>
                    <NavLink to="/ReservationsPage">Reservations</NavLink>
                    <NavLink to="Order Online">Order Online</NavLink>
                    <NavLink to="Login">Login</NavLink>
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