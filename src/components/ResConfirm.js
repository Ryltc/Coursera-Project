import React from 'react';
import { ReactComponent as Logo } from './Logo.svg';
import './ResConfirm.css';

const ResConfirm = ({
    name,
    date,
    time,
    guests,
    occasion
}) => {
    return(
        <>
            <section class="reservation-container">
                <div class="reservation-blocked">
                    <div class="reservation-header">
                        <Logo class="reservation-lemon"/>
                    </div>
                    <div>
                        <h2>Reservation Confirmed!</h2>
                        <h1>Thank you for your booking, {name}!</h1>
                        <p>
                            Your Reservation is confirmed for {date} at {time} for {guests}{" "}
                            {guests === 1 ? "guest" : "guests"}.
                        </p>
                            {occasion && (
                        <p>
                            Come Celebrate Your{" "}
                            {occasion === "birthday" ? "a" : "an"} {occasion}.
                        </p>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}

export default ResConfirm;