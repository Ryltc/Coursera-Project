import React from 'react';
import './Hero.css';
import  { Link } from "react-router-dom";


function Hero() {
    return(
        <>
            <main>
                <section class="Hero">
                    <div class="display-container">
                        <div id="left">
                            <h1 class="display-title">Little Lemon</h1>
                            <h2 class="display-subtitle">Chicago</h2>
                            <h3 class="display-text">Lorem ipsum dolor sit amet, cnsectetur adipiscinng elit, sed do eiusmod tempor incididunnt ut labore et dolor</h3>
                            <Link to="/ReservationsPage">
                                <button type='button' class="reserve-button" href="/">Reserve a Table</button>
                            </Link>
                        </div>
                        <div class="image-container" id="right">
                            <img src='./restaurantfood.jpg' className="display-image" alt='restaurant food' />
                        </div>
                    </div>
                </section>
                <section class="section-wrapper">
                    <div class="specials-header">
                        <h2>Specials</h2>
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
                                    <h5>Bruschetta</h5>
                                </div>
                                <p class="card-text">Lorem ipsum dolor sit amet, cnsectetur adipiscinng elit, sed do eiusmod tempor incididunnt ut labore et dolor</p>
                            <button class="btn btn-primary" type="button">Order Delivery</button>
                            </div>
                        </div>
                        <div class="card">
                            <img class="card-img-top" src="./lemon dessert.jpg" alt="Lemon Dessert" />
                            <div class="card-body">
                                <div class="card-title">
                                    <h5>Lemon Dessert</h5>
                                </div>
                                <p class="card-text">Lorem ipsum dolor sit amet, cnsectetur adipiscinng elit, sed do eiusmod tempor incididunnt ut labore et dolor</p>
                            <button class="btn btn-primary" type="button">Order Delivery</button>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div class="testimonials">
                        <div class="testimonials-header">
                        <h1>Testimonials</h1>
                        </div>
                        <div class="testimonial-container">
                            <div class="testimonial-card">
                                <img id="profile" src="./" alt="customer"></img>
                                <h2>Name 1</h2>
                                <p>lorem ipsum dolor!</p>
                                <img id="star-rating" src="./" alt="ratings"></img>
                            </div>
                            <div class="testimonial-card">
                                <img id="profile" src="./" alt="customer"></img>
                                <h2>Name 2</h2>
                                <p>lorem ipsum dolor!</p>
                                <img id="star-rating" src="./" alt="ratings"></img>
                            </div>
                            <div class="testimonial-card">
                                <img id="profile" src="./" alt="customer"></img>
                                <h2>Name 3</h2>
                                <p>lorem ipsum dolor!</p>
                                <img id="star-rating" src="./" alt="ratings"></img>
                            </div>
                            <div class="testimonial-card">
                                <img id="profile" src="./" alt="customer"></img>
                                <h2>Name 4</h2>
                                <p>lorem ipsum dolor!</p>
                                <img id="star-rating" src="./" alt="ratings"></img>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div class="about-container">
                        <article class="about-content">
                            <h1 class="about-title">Little Lemon</h1>
                            <h2 class="about-subtitle">Chicago</h2>
                            <h3 class="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id.</h3>
                        </article>
                        <div class="about-images">
                            <img class="img-left" src="./Mario and Adrian A.jpg" alt='Mario and Adian laughing'></img>
                            <img class="img-right" src="./Mario and Adrian b.jpg" alt='Mario and Adian talking'></img>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Hero;