import React from 'react';
import { ReactComponent as Logo } from './Logo.svg';
import './Reservations.css';

function Reservations() {
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
                    <form class="reservation-form">
                        <label class="form-text" for="name">Name:</label>
                        <input type="text" id="name" name="name"></input><br></br>
                        <label class="form-text" for="res-date">Date:</label>
                        <input id="=res-date" type="date" name="date" required="" value=""></input><br></br>
                        <label class="form-text" for="res-time">Time:</label>
                        <select id="res-time" name="time" required="">
                            <option>17:00</option>
                            <option>18:00</option>
                            <option>19:00</option>
                            <option>20:00</option>
                            <option>21:00</option>
                            <option>22:00</option>                            <option>23:00</option>
                        </select><br></br>
                        <label class="form-text" for="guests">Number of Guests:</label>
                        <input id="guests" type="number" placeholder="1-10" min={"1"} max={"10"} name="guests" required="" value=""></input><br></br>
                        <label class="form-text" for="occasion">Occasion</label>
                        <select id="occasiion" name="occasion" required="">
                            <option>Birthday</option>
                            <option>Anniversary</option>
                            <option>Engagement</option>
                            <option>Wedding</option>
                            <option>Divorce</option>
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