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
            <section class="specials">
                <div class="specials-container">
                    <div class="specials-left">
                        <h2>Specials</h2>
                    </div>
                    <div class="specials-right">
                        <a class="order-button" href="/">Order Online</a>
                    </div>
                    <div class="cards">
                        <div class="first-card">
                            <img src="/" alt="Greek Salad" />
                            <div class="card-text">
                                <h4>Greek Salad</h4>
                                <p>Lorem ipsum dolor sit amet, cnsectetur adipiscinng elit, sed do eiusmod tempor incididunnt ut labore et dolor</p>
                                <h5>Order Delivery</h5>
                            </div>
                        </div>
                    </div>
                    <div class="cards">
                        <div class="second-card">
                            <img src="/" alt="Greek Salad" />
                            <div class="card-text">
                                <h4>Bruschetta</h4>
                                <p>Lorem ipsum dolor sit amet, cnsectetur adipiscinng elit, sed do eiusmod tempor incididunnt ut labore et dolor</p>
                                <h5>Order Delivery</h5>
                            </div>
                        </div>
                    </div>
                    <div class="cards">
                        <div class="third-card">
                            <img src="/" alt="Greek Salad" />
                        <div class="card-text">
                                <h4>Lemon Dessert</h4>
                                <p>Lorem ipsum dolor sit amet, cnsectetur adipiscinng elit, sed do eiusmod tempor incididunnt ut labore et dolor</p>
                                <h5>Order Delivery</h5>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        </>
    )
}

export default Hero;