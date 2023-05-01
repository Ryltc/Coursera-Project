import React from 'react';
import './App.css';
import './header';
import './main';
import './footer';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FooterComp from "./components/FooterComp";
import ReservationsPage from './ReservationsPage';



function App() {
  return (
    <div className="App">
      <>
        <header className="header">
          <Navbar />
        </header>
        <main className="main">
          <Hero />
          <ReservationsPage />
        </main>
        <footer className="footer">
          <FooterComp />
        </footer>
      </>
    </div>
  );
}

export default App;
