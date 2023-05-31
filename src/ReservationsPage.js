import React from "react";
import { useNavigate } from "react-router-dom";
import ReservationComp from "./components/ReservationComp";
import './ReservationsPage.css';



function ReservationPage() {
    const navigate = useNavigate();
    return (
        <>
            <ReservationComp navigate={navigate} />
        </>
    )
}
export default ReservationPage;