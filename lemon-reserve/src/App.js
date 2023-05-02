import React from 'react';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import './header';
import './main';
import './ReservationsPage';
import './footer';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ReservationsPage from './ReservationsPage';
import FooterComp from "./components/FooterComp";

function App() {
  return (
    <div className="App">
      <>
        <header className="header">
          <Navbar />
        </header>
        <main className="main">
          <Hero />
        </main>
        <footer className="footer">
          <FooterComp />
        </footer>
      </>
    </div>
  );
}

export default App;