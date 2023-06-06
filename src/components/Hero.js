import React from 'react';
import './Hero.css';
import  { Link } from "react-router-dom";


function Hero() {
    return(
        <>
            <main>
                <section className="Hero">
                    <div className="display-container">
                        <div id="left">
                            <h1 className="display-title">Little Lemon</h1>
                            <h2 className="display-subtitle">Chicago</h2>
                            <h3 className="display-text">Lorem ipsum dolor sit amet, cnsectetur adipiscinng elit, sed do eiusmod tempor incididunnt ut labore et dolor</h3>
                            <Link to="/ReservationsPage">
                                <button type='button' className="reserve-button" href="/">Reserve a Table</button>
                            </Link>
                        </div>
                        <div className="image-container" id="right">
                            <img src='./restaurantfood.jpg' className="display-image" alt='restaurant food' />
                        </div>
                    </div>
                </section>
                <section className="section-wrapper">
                    <div className="specials-header">
                        <h2>Specials</h2>
                        <a className="order-button" href="/">Order Online</a>
                    </div>
                </section>
                <section>
                    <div className="cards">
                        <div className="card">
                            <img className="card-img-top" src="./greek salad.jpg" alt="Greek Salad" />
                            <div className="card-body">
                                <div className="card-title">
                                    <h5>Greek Salad</h5>
                                </div>
                                <p className="card-text">Lorem ipsum dolor sit amet, cnsectetur adipiscinng elit, sed do eiusmod tempor incididunnt ut labore et dolor</p>
                            <button className="btn btn-primary" type="button">Order Delivery</button>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top" src="./Bruschetta_small.jpg" alt="Bruschetta" />
                            <div className="card-body">
                                <div className="card-title">
                                    <h5>Bruschetta</h5>
                                </div>
                                <p className="card-text">Lorem ipsum dolor sit amet, cnsectetur adipiscinng elit, sed do eiusmod tempor incididunnt ut labore et dolor</p>
                            <button className="btn btn-primary" type="button">Order Delivery</button>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top" src="./lemon dessert.jpg" alt="Lemon Dessert" />
                            <div className="card-body">
                                <div className="card-title">
                                    <h5>Lemon Dessert</h5>
                                </div>
                                <p className="card-text">Lorem ipsum dolor sit amet, cnsectetur adipiscinng elit, sed do eiusmod tempor incididunnt ut labore et dolor</p>
                            <button className="btn btn-primary" type="button">Order Delivery</button>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="testimonials">
                        <div className="testimonials-header">
                        <h1>Testimonials</h1>
                        </div>
                        <div className="testimonial-container">
                            <div className="testimonial-card">
                                <img id="profile" src="./" alt="customer"></img>
                                <h2>Name 1</h2>
                                <p>lorem ipsum dolor!</p>
                                <img id="star-rating" src="./" alt="ratings"></img>
                            </div>
                            <div className="testimonial-card">
                                <img id="profile" src="./" alt="customer"></img>
                                <h2>Name 2</h2>
                                <p>lorem ipsum dolor!</p>
                                <img id="star-rating" src="./" alt="ratings"></img>
                            </div>
                            <div className="testimonial-card">
                                <img id="profile" src="./" alt="customer"></img>
                                <h2>Name 3</h2>
                                <p>lorem ipsum dolor!</p>
                                <img id="star-rating" src="./" alt="ratings"></img>
                            </div>
                            <div className="testimonial-card">
                                <img id="profile" src="./" alt="customer"></img>
                                <h2>Name 4</h2>
                                <p>lorem ipsum dolor!</p>
                                <img id="star-rating" src="./" alt="ratings"></img>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="about-container">
                        <article className="about-content">
                            <h1 className="about-title">Little Lemon</h1>
                            <h2 className="about-subtitle">Chicago</h2>
                            <h3 className="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id.</h3>
                        </article>
                        <div className="about-images">
                            <img className="img-left" src="./Mario and Adrian A.jpg" alt='Mario and Adian laughing'></img>
                            <img className="img-right" src="./Mario and Adrian b.jpg" alt='Mario and Adian talking'></img>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Hero;