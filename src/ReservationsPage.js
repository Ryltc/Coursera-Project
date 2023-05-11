import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ReservationComp from "./components/ReservationComp";
import './ReservationsPage.css';
import ResConfirmPage from './ResConfirmPage';



function ReservationPage() {
    const [Reservations, updateReservations] = useState([]);

    const addReservation = (reservation) => {
        updateReservations([...reservation, reservation ]);
    };

    return (
        <>
            <Reservations />
            <Routes>
                <Route path="ResConfirmPage" element={<ResConfirmPage />}
                    Reservations={Reservations} />
            </Routes>
        </>
    )
}
export default ReservationPage;