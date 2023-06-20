import React from 'react';
import { Route, Routes, RouterProvider, } from "react-router-dom";
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
import { useFormContext } from 'react-hook-form';

function App() {
  const { form } = useFormContext();

  const formProps = {
    name: form.name,
    date: form.date,
    time: form.time,
    guests: form.numberOfGuests,
    occasion: form.occasion,
  };

const router = (
    <Routes path='/' element={<RootLayout />}>
      <Route index element={<Hero />} />
      <Route path="ReservationsPage" element={<ReservationsPage />} />
      <Route path="/ResConfirmPage" element={<ResConfirmPage {...formProps} />} />
    </Routes>
  );

  return (
    <RouterProvider router={router} />
  );
  }

export default App;