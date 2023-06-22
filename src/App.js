import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import './header';
import './main';
import './ReservationsPage';
import './ResConfirmPage';
import './footer';
import Hero from "./components/Hero";
import ReservationsPage from './ReservationsPage';
import ResConfirmPage from './ResConfirmPage';
import RootLayout from './layouts/RootLayout';
import Navbar from './components/Navbar';
import FooterComp from './components/FooterComp';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <Routes path='/' element={<RootLayout />}>
          <Route index element={<Hero />} />
          <Route path="ReservationsPage" element={<ReservationsPage />} />
          <Route path="/ResConfirmPage" element={<ResConfirmPage />} />
        </Routes>
      <FooterComp />
    </BrowserRouter>
    );
  }

export default App;