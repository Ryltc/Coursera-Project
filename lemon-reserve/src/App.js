import React from 'react';
import './App.css';
import './header';
import './main';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";



function App() {
  return (
    <div className="App">
      <>
        <header className="header">
          <Navbar />
        </header>
        <main className="main"/>
          <Hero />
        <footer className="footer"/>
      </>
    </div>
  );
}

export default App;
