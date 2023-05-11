import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, } from "react-router-dom";
import './App.css';
import './header';
import './main';
import './ReservationsPage';
import './footer';

// components
import Hero from "./components/Hero";
import ReservationsPage from './ReservationsPage';

import RootLayout from './layouts/RootLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Hero />} />
      <Route path="ReservationsPage" element={<ReservationsPage />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;