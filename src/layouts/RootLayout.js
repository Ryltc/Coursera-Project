import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { ReactComponent as Logo } from './Logo.svg';
import FooterComp from "../components/FooterComp";

<script src="https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js"></script>

export default function RootLayout() {

    return(
        <div className="root-layout">
            <header>
                <Logo className="lemon"/>
                <nav>
                    <NavLink class="topNav" to="/">Home</NavLink>
                    <NavLink class="topNav" to="about">About</NavLink>
                    <NavLink class="topNav" to="menu">Menu</NavLink>
                    <NavLink class="topNav" to="/ReservationsPage">Reservations</NavLink>
                    <NavLink class="topNav" to="Order Online">Order Online</NavLink>
                    <NavLink class="topNav" to="Login">Login</NavLink>
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