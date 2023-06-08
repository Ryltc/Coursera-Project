import React from 'react';
import { ReactComponent as Logo } from './Logo.svg';
import './ResConfirm.css';
import propTypes from 'prop-types';

ResConfirm.propTypes = ({
    name,
    date,
    time,
    guests,
    occasion
}) => {
    return (
        <>
            <section className="reservation-container">
                <div className="reservation-blocked">
                    <div className="reservation-header">
                        <Logo className="reservation-lemon"/>
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