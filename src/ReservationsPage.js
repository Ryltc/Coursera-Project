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





/*function ReservationPage() {
    const methods = useForm();
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
        <FormProvider {...methods}>
          <ReservationComp navigate={navigate} {...formProps} />
          <NestedInput />
        </FormProvider>
      </>
    );
  }
  function NestedInput() {
    const { register } = useFormContext();

    return <input {...register("test")} />;
}
  export default ReservationPage;*/









  /*function ReservationPage() {
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
        <FormProvider {...methods}>
            <ReservationComp />
        </FormProvider>
            <ReservationComp navigate={navigate} {...formProps} />
        </>
    )
}
export default ReservationPage;*/