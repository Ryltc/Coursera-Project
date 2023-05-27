import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { ReactComponent as Logo } from './Logo.svg';
import './ReservationComp.css';
import { Navigate } from 'react-router-dom';

function ReservationComp() {

    const { submitHandler } = useForm();
    const onSubmit = reservationInfo => console.log(reservationInfo)
    const onError = (errors, e) => console.log(errors, e);

    function handleSubmit() {
        const response = submitHandler();
        return response ? Navigate('./ResComfirmPage') : null;
    };

    function handleChange(event) {
        setReservation({ ...reservationInfo, [event.target.name]: event.target.value });
      }

    const [reservationInfo, setReservation] = useState({
        name: "",
        date: "",
        time: "",
        guests: "",
        occasion: "",
      });

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
                    <form onSubmit={handleSubmit(onSubmit, onError)} aria-label='On Submit' className="reservation-form">
                        <label class="form-text" for="name">Name:</label>
                        <input type="text" id="name" name="name" required="" minlength="4" maxlength="10" size="10" value={reservationInfo.name} onChange={handleChange}></input><br></br>
                        <label class="form-text" for="res-date">Date:</label>
                        <input id="res-date" type="date" name="date" aria-label="On change" required="" value={reservationInfo.date} onChange={handleChange}></input><br></br>
                        <label for="res-time">Time:</label>
                        <select aria-label="On Change" onChange={handleChange} id="res-time" name="time" required="" value={reservationInfo.time}>
                            <option value="17:00">17:00</option>
                            <option value="18:00">18:00</option>
                            <option value="19:00">19:00</option>
                            <option value="20:00">20:00</option>
                            <option value="21:00">21:00</option>
                            <option value="22:00">22:00</option>
                            <option value="23:00">23:00</option>
                        </select><br></br>
                        <label class="form-text" for="guests">Number of Guests:</label>
                        <input id="guests" type="number" placeholder="1-10" min="1" max="10" name="guests" aria-label="On Change" required="" value={reservationInfo.guests} onChange={handleChange}></input><br></br>
                        <label for="occasion" >Occasion</label>
                        <select aria-label="On Change" onChange={handleChange} id="occasion" name="occasion" required="" value={reservationInfo.occasion}>
                            <option value="Birthday">Birthday</option>
                            <option value="Anniversary">Anniversary</option>
                            <option value="Engagement">Engagement</option>
                            <option value="Wedding">Wedding Party</option>
                            <option value="Divorce!">Divorce!</option>
                            <option value="Treat Yo'Self!">Treat Yo'Self!</option>
                            <option value="Promotion">Promotion</option>
                        </select>
                        <button class="booking-btn" type="submit" value="Make Your Reservation">Confirm Reservation!</button>
                    </form>
                </div>
            </section>
        </>
        )
    }

export default ReservationComp;