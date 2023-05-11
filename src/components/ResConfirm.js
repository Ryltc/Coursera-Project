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
                </div>
            </section>
        </>
    );
}

export default ResConfirm;