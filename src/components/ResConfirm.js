import React from 'react';
import { ReactComponent as Logo } from './Logo.svg';
import './ResConfirm.css';

function ResConfirm() {

    return(
        <>
            <section class="reservation-container">
                <div class="reservation-blocked">
                    <div class="reservation-header">
                        <Logo class="reservation-lemon"/>
                    </div>
                    <div>
                        <h1>Reservation Confirmed!</h1>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ResConfirm;