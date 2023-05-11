import React from 'react';
import { ReactComponent as Logo } from './Logo.svg';
import './ResConfirm.css';
import ReservationComp from './ReservationComp';

function ResConfirm() {

    return(
        <>
        {ReservationComp.map((Reservations) => (
            <section class="reservation-container">
                <div key={Reservations.name} class="reservation-blocked">
                    <div class="reservation-header">
                        <Logo class="reservation-lemon"/>
                        <p>{Reservations.name}</p>
                        <p>{Reservations.date}</p>
                        <p>{Reservations.time}</p>
                        <p>{Reservations.guests}</p>
                        <p>{Reservations.occasion}</p>
                    </div>

                </div>
            </section>
        ))}
        </>
    );
}

export default ResConfirm;