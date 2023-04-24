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
                <section class="section-wrapper">
                    <div class="specials-header">
                        <h3>Specials</h3>
                        <a class="order-button" href="/">Order Online</a>
                    </div>
                </section>
                <section>
                    <div class="cards">
                        <div class="card">
                            <img class="card-img-top" src="./greek salad.jpg" alt="Greek Salad" />
                            <div class="card-body">
                                <div class="card-title">
                                    <h5>Greek Salad</h5>
                                </div>
                                <p class="card-text">Lorem ipsum dolor sit amet, cnsectetur adipiscinng elit, sed do eiusmod tempor incididunnt ut labore et dolor</p>
                            <button class="btn btn-primary" type="button">Order Delivery</button>
                            </div>
                        </div>
                        <div class="card">
                            <img class="card-img-top" src="./Bruschetta_small.jpg" alt="Bruschetta" />
                            <div class="card-body">
                                <div class="card-title">
                                    <h5>Greek Salad</h5>
                                </div>
                                <p class="card-text">Lorem ipsum dolor sit amet, cnsectetur adipiscinng elit, sed do eiusmod tempor incididunnt ut labore et dolor</p>
                            <button class="btn btn-primary" type="button">Order Delivery</button>
                            </div>
                        </div>
                        <div class="card">
                            <img class="card-img-top" src="./lemon dessert.jpg" alt="Lemon Dessert" />
                            <div class="card-body">
                                <div class="card-title">
                                    <h5>Greek Salad</h5>
                                </div>
                                <p class="card-text">Lorem ipsum dolor sit amet, cnsectetur adipiscinng elit, sed do eiusmod tempor incididunnt ut labore et dolor</p>
                            <button class="btn btn-primary" type="button">Order Delivery</button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Hero;