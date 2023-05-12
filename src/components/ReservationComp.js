import React, { useState } from 'react';
import { ReactComponent as Logo } from './Logo.svg';
import './ReservationComp.css';
import  { Link } from "react-router-dom";

function ReservationComp() {

    const [reservationInfo, setReservation] = useState({
        name: "",
        date: "",
        time: "",
        guests: "",
        occasion: "",
      });

      function handleChange(event) {
        setReservation({ ...reservationInfo, [event.target.name]: event.target.value });
      }

      function handleSubmit(event) {
        event.preventDefault();
        addReservation(reservationInfo);
        setReservation({
            name: "",
            date: "",
            time: "",
            guests: "",
            occasion: "", });
      };

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
                    <form onSubmit={handleSubmit} class="reservation-form">
                        <label class="form-text" for="name">Name:</label>
                        <input type="text" id="name" name="name" required="" minlength="4" maxlength="10" size="10" value={reservationInfo.name} onChange={handleChange}></input><br></br>
                        <label class="form-text" for="res-date">Date:</label>
                        <input id="res-date" type="date" name="date" aria-label="On change" required="" value={reservationInfo.date} onChange={handleChange}></input><br></br>
                        <label class="form-text" for="res-time">Time:</label>
                        <select id="res-time" name="time" required="" value={reservationInfo.time}>
                            <option>17:00</option>
                            <option>18:00</option>
                            <option>19:00</option>
                            <option>20:00</option>
                            <option>21:00</option>
                            <option>22:00</option>
                            <option>23:00</option>
                        </select><br></br>
                        <label class="form-text" for="guests">Number of Guests:</label>
                        <input id="guests" type="number" placeholder="1-10" min="1" max="10" name="guests" aria-label="On Change" required="" value={reservationInfo.guests} onChange={handleChange}></input><br></br>
                        <label class="form-text" for="occasion">Occasion</label>
                        <select id="occasion" name="occasion" required="" value={reservationInfo.occasion}>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                            <option>Engagement</option>
                            <option>Wedding Party</option>
                            <option>Divorce!</option>
                            <option>Treat Yo'Self!</option>
                            <option>Promotion</option>
                        </select>
                        <Link to="/ResConfirmPage">
                            <button class="booking-btn" type="submit">Reserve Your Table!</button>
                        </Link>
                        <input type="submit" value="Make Your Reservation"></input>
                    </form>
                </div>
            </section>
        </>
        )
    }

export default ReservationComp();