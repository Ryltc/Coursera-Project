import React, { useState } from 'react';
import { ReactComponent as Logo } from './Logo.svg';
import './Reservations.css';

function Reservations() {
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setName("");
        console.log("Form submitted!")
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
                    <form class="reservation-form" onSubmit={handleSubmit}>
                        <label class="form-text" for="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={Reservations.name}
                            ></input><br></br>
                        <label class="form-text" for="res-date">Date:</label>
                        <input id="res-date" type="date" name="date" aria-label="On change" required="" value={Reservations.date}></input><br></br>
                        <label class="form-text" for="res-time">Time:</label>
                        <select id="res-time" name="time" required="" value={Reservations.time}>
                            <option>17:00</option>
                            <option>18:00</option>
                            <option>19:00</option>
                            <option>20:00</option>
                            <option>21:00</option>
                            <option>22:00</option>
                            <option>23:00</option>
                        </select><br></br>
                        <label class="form-text" for="guests">Number of Guests:</label>
                        <input id="guests" type="number" placeholder="1-10" min="1" max="10" name="guests" aria-label="On Change" required="" value={Reservations.guests}></input><br></br>
                        <label class="form-text" for="occasion">Occasion</label>
                        <select id="occasion" name="occasion" required="" value={Reservations.occasion}>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                            <option>Engagement</option>
                            <option>Wedding</option>
                            <option>Divorce!</option>
                            <option>Promotion</option>
                        </select>
                        <button class="booking-btn" type="submit">Reserve Your Table!</button>
                    </form>
                </div>
            </section>
        </>
        )
    }

export default Reservations;