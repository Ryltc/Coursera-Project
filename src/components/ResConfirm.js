import React from 'react';
import { ReactComponent as Logo } from './Logo.svg';
import './ResConfirm.css';

const ResConfirm = ({ formData }) => {
  const { name, date, time, guests, occasion } = formData;

  return (
    <>
      <section className="reservation-container">
        <div className="reservation-blocked">
          <div className="reservation-header">
            <Logo className="reservation-lemon" />
          </div>
          <div className="ResBox">
            <h1>Reservation Confirmed!</h1>
            <h1>Thank you, {name}!</h1>
            <h1>
              We will see you on {date} at {time} for {guests}{' '}
              {guests === 1 ? 'guest' : 'guests'}.
            </h1>
            {occasion && (
              <h1>
                Come Celebrate Your {occasion === 'Birthday'} {occasion} On Us!
              </h1>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ResConfirm;
