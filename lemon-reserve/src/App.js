import React from 'react';
import './App.css';
import './header';
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="App">
      <>
        <header className="header">
          <Navbar />
        </header>
        <main className="main"/>
        <footer className="footer"/>
      </>
    </div>
  );
}

export default App;
