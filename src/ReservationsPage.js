import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormContext } from 'react-hook-form';
import ReservationComp from "./components/ReservationComp";
import './ReservationsPage.css';



function ReservationPage() {
    const { form } = useFormContext();

    const formProps = {
        name: form.name,
        date: form.date,
        time: form.time,
        guests: form.numberOfGuests,
        occasion: form.occasion,
    };

    const navigate = useNavigate();
    return (
        <>
            <ReservationComp navigate={navigate} {...formProps} />
        </>
    )
}
export default ReservationPage;