import React from 'react';
import useForm from '../hooks/useForm'
import FormProvider  from '../store/FormContext'
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
            <section class="reservation-container">
                <div class="reservation-blocked">
                    <div class="reservation-header">
                        <Logo class="reservation-lemon"/>
                    </div>
                    <div class="reservation-subtitle">
                        <h2>Make A Reservation!</h2>
                    </div>
                    <FormProvider {...methods}>
                    <form onSubmit={methods.handleSubmit(onSubmit)} aria-label='On Submit' className="reservation-form">
                        <label class="form-text" for="name">Enter name</label>
                        <input type="text" id="name" name="name" required="" minlength="4" maxlength="10" size="10" value={form.name} onChange={changeNameHandler}></input><br></br>
                        <label class="form-text" for="res-date">Choose date</label>
                        <input id="res-date" type="date" name="date" aria-label="On change" required="" value={form.date} onChange={changeDateHandler}></input><br></br>
                        <label for="res-time">Choose time</label>
                        <select aria-label="On Change" onChange={changeTimeHandler} id="res-time" name="time" required="" value={form.time}>
                            {timeSlots.map((slot) => (
                                <option key={slot} value={slot}>
                                    {slot}
                                </option>
                            ))}
                        </select><br></br>
                        <label class="form-text" for="guests">Number of Guests:</label>
                        <input id="guests" type="number" placeholder="1-10" min="1" max="10" name="guests" aria-label="On Change" required="" value={form.guests} onChange={changeGuestsHandler}></input><br></br>
                        <label for="occasion" >Occasion</label>
                        <select aria-label="On Change" onChange={changeOccasionHandler} id="occasion" name="occasion" required="" value={form.occasion}>
                            <option value="Birthday">Birthday</option>
                            <option value="Anniversary">Anniversary</option>
                            <option value="Engagement">Engagement</option>
                            <option value="Wedding">Wedding Party</option>
                            <option value="Divorce!">Divorce!</option>
                            <option value="Treat Yo'Self!">Treat Yo'Self!</option>
                            <option value="Promotion">Promotion</option>
                        </select>
                        <button  disabled={!isFormValid} class="booking-btn" type="submit" value="Make Reservation">Make Reservation</button>
                    </form>
                    </FormProvider>
                </div>
            </section>
        </>
        )
    }

export default ReservationComp;