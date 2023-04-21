import React from 'react';
import './Hero.css';


function Hero() {
    return(
        <>
        <main>
            <section class="Hero">
                <div class="display-container">
                    <div id="left">
                        <h1 class="display-title">Little Lemon</h1>
                        <h2 class="display-subtitle">Chicago</h2>
                        <h3 class="display-text">We are a family owned Mediterranean restaurant, focused on traditional recipes serves with a modern twist.</h3>
                        <a class="reserve-button" href="/">Reserve a Table</a>
                    </div>
                    <div class="image-container" id="right">
                        <img src='./restaurantfood.jpg' className="display-image" />
                    </div>
                </div>
            </section>
        </main>
        </>
    )
}

export default Hero;