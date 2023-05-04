import React from 'react';
import {BrowserRouter, Routes, Route, } from "react-router-dom";
import './App.css';
import './header';
import './main';
import './ReservationsPage';
import './footer';

// components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ReservationsPage from './ReservationsPage';
import FooterComp from "./components/FooterComp";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="Hero" element={<Hero />} />
          <Route path="Reservations" element={<ReservationsPage />} />
        </Routes>
      </main>
      <footer>
        <FooterComp />
      </footer>
    </BrowserRouter>
  );
}

export default App;