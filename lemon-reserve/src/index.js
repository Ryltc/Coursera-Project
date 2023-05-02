import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


<head>
  <meta name="description" content="Restaurant Reservation App"/>
  <meta name="og:title" content="Little Lemon Reservations"/>
  <meta name="og:description" content="Restaurant Reservation App"/>
  <meta name="og:image" content="Logo.svg"/>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;" name='viewport' />

  <link rel="stylesheet" href="grid.css"></link>
  <link href='https://fonts.googleapis.com/css?family=Markazi Text' rel='stylesheet'></link>
  <link href='https://fonts.googleapis.com/css?family=Klarna' rel='stylesheet'></link>
</head>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();