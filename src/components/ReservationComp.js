import React from 'react';
import useForm from '../hooks/useForm';
import { FormProvider, useFormContext }  from 'react-hook-form';
import { ReactComponent as Logo } from './Logo.svg';
import './ReservationComp.css';



const ReservationComp = ({ navigate }) => {
    const {
      form,
      timeSlots,
      isFormValid,
      changeNameHandler,
      changeDateHandler,
      changeTimeHandler,
      changeGuestsHandler,
      changeOccasionHandler,
      submitHandler,
    } = useForm();

    function handleSubmit() {
        const response = submitHandler();
        return response ? navigate("/ResConfirm") : null;
    }
    const methods = useFormContext();
    const onSubmit = data => console.log(data);

    return (
        <>
            <section className="reservation-container">
                <div className="reservation-blocked">
                    <div className="reservation-header">
                        <Logo className="reservation-lemon"/>
                    </div>
                    <div className="reservation-subtitle">
                        <h2>Make A Reservation!</h2>
                    </div>
                    <FormProvider {...methods}>
                        <form onSubmit={handleSubmit(onSubmit)} aria-label='On Submit' className="reservation-form">
                            <label className="form-text" htmlFor="name">Enter name</label>
                            <input type="text" id="name" name="name" required="" minLength="4" maxLength="10" size="10" value={form.name} onChange={changeNameHandler}></input><br></br>
                            <label className="form-text" htmlFor="res-date">Choose date</label>
                            <input id="res-date" type="date" name="date" aria-label="On change" required="" value={form.date} onChange={changeDateHandler}></input><br></br>
                            <label htmlFor="res-time">Choose time</label>
                            <select aria-label="On Change" onChange={changeTimeHandler} id="res-time" name="time" required="" value={form.time}>
                                {timeSlots.map((slot) => (
                                    <option key={slot} value={slot}>
                                        {slot}
                                    </option>
                                ))}
                            </select><br></br>
                            <label className="form-text" htmlFor="guests">Number of Guests:</label>
                            <input id="guests" type="number" placeholder="1-10" min="1" max="10" name="guests" aria-label="On Change" required="" value={form.guests} onChange={changeGuestsHandler}></input><br></br>
                            <label htmlFor="occasion" >Occasion</label>
                            <select aria-label="On Change" onChange={changeOccasionHandler} id="occasion" name="occasion" required="" value={form.occasion}>
                                <option value="Birthday">Birthday</option>
                                <option value="Anniversary">Anniversary</option>
                                <option value="Engagement">Engagement</option>
                                <option value="Wedding">Wedding Party</option>
                                <option value="Divorce!">Divorce!</option>
                                <option value="Treat Yo-Self!">Treat Yo-Self!</option>
                                <option value="Promotion">Promotion</option>
                            </select>
                            <NestedInput />
                            <input type="submit" />
                            <button  disabled={!isFormValid} className="booking-btn" type="submit" value="Make Reservation">Make Reservation</button>
                        </form>
                    </FormProvider>
                </div>
            </section>
        </>
        );
    }

    function NestedInput() {
        const { form } = useFormContext();
        return <input {...form("test")} />;
    }

export default ReservationComp;