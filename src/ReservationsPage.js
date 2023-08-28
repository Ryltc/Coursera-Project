import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm, FormProvider, useFormContext } from 'react-hook-form';
import ReservationComp from "./components/ReservationComp";
import './ReservationsPage.css';


function ReservationsPage() {
    const methods = useForm();
    const navigate = useNavigate();

    return (
        <FormProvider {...methods}>
            <NestedInput />
            <ReservationComp navigate={navigate} />
        </FormProvider>
    );
}

function NestedInput() {
    const { register } = useFormContext();

    return <input {...register("test")} />;
}

export default ReservationsPage;





