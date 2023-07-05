import React from 'react';
import { ReactComponent as Logo } from './Logo.svg';
import './ResConfirm.css';
//import PropTypes from 'prop-types';

const ResConfirm = ({
    name,
    date,
    time,
    guests,
    occasion,
}) => {
    return (
        <>
            <section className="reservation-container">
                <div className="reservation-blocked">
                    <div className="reservation-header">
                        <Logo className="reservation-lemon"/>
                    </div>
                    <div className='ResBox'>
                        <h1>Reservation Confirmed!</h1>
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