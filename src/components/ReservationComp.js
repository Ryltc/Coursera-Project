import React, { useState, useEffect } from 'react';
//import { useFormContext }  from 'react-hook-form';
import { ReactComponent as Logo } from './Logo.svg';
import './ReservationComp.css';
import useForm from '../hooks/useForm';
import { submitAPI } from '../APIs/apiMockup';



const ReservationComp = ({ navigate }) => {
    const { form, methods } = useForm();
    const {
      changeNameHandler,
      changeDateHandler,
      changeTimeHandler,
      changeGuestsHandler,
      changeOccasionHandler,
    } = methods;
    //const formMethods = useFormContext();
    //const { handleSubmit } = formMethods;

    const [setTimeSlots] = useState([]);

    useEffect(() => {
        fetchTimeSlots()
          .then((slots) => setTimeSlots(slots))
          .catch((error) => console.log(error));
      }, []);

      const fetchTimeSlots = async () => {
        try {
          const date = new Date(); // Use the desired date to generate time slots
          const timeSlots = generateTimeSlots(date); // Call a helper function to generate time slots
          return timeSlots;
        } catch (error) {
          throw new Error('Failed to fetch time slots');
        }
      };

      const seededRandom = (seed) => {
        let m = 2 ** 35 - 31;
        let a = 185852;
        let s = seed % m;
        return () => {
          return (s = (s * a) % m) / m;
        };
      };

      const generateTimeSlots = (date) => {
        const result = [];
        const random = seededRandom(date.getDate());

        for (let i = 17; i <= 23; i++) {
          if (random() < 0.5) {
            result.push(`${i}:00`);
          }
          if (random() < 0.5) {
            result.push(`${i}:30`);
          }
        }
      }
      //const formContext = useFormContext();

    const onSubmit = () => {
        console.log(form);
        const response = submitAPI(form);
        if (response) {
            navigate('/ResConfirmPage', { state: { formData: form } });
      };
    }
    return (
        <>
            <section className="reservation-container">
                <div className="reservation-blocked">
                    <div className="reservation-header">
                        <Logo className="reservation-lemon"/>
                    </div>
                    <div className="reservation-subtitle">
                        <h2>Make A Reservation!</h2>
                    </div>
                        <form
                            onSubmit={onSubmit}
                            aria-label='On Submit'
                            className="reservation-form">
                            <label className="form-text" htmlFor="name">
                                Enter name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required=""
                                minLength="4"
                                maxLength="10"
                                size="10"
                                value={form && form.name ? form.name : ''}
                                onChange={changeNameHandler}
                            ></input>
                            <br />
                            <label className="form-text" htmlFor="res-date">
                                Choose date
                            </label>
                            <input
                                id="res-date"
                                type="date"
                                name="date"
                                aria-label="On change"
                                required=""
                                value={form ? form.date : ''}
                                onChange={changeDateHandler}
                            ></input>
                            <br />
                            <label htmlFor="res-time">
                                Choose time
                            </label>
                            <select value={form.time} onChange={changeTimeHandler}>
                                <option value=""></option>
                                {methods.timeSlots.map((timeSlots) => (
                                    <option key={timeSlots} value={timeSlots}>
                                        {timeSlots}
                                    </option>
                                ))}
                            </select>
                            <br />
                            <label className="form-text" htmlFor="guests">
                                Number of Guests:
                            </label>
                            <input
                                id="guests"
                                type="number"
                                placeholder="1-10"
                                min="1" max="10"
                                name="guests"
                                aria-label="On Change"
                                required=""
                                value={form.Guests}
                                onChange={changeGuestsHandler}
                            ></input>
                            <br />
                            <label htmlFor="occasion" >
                                Occasion
                            </label>
                            <select
                                aria-label="On Change"
                                onChange={changeOccasionHandler}
                                id="occasion"
                                name="occasion"
                                required=""
                                value={form.occasion}>
                                    <option value="Birthday">Birthday</option>
                                    <option value="Anniversary">Anniversary</option>
                                    <option value="Engagement">Engagement</option>
                                    <option value="Wedding">Wedding Party</option>
                                    <option value="Divorce!">Divorce!</option>
                                    <option value="Treat Yo-Self!">Treat Yo-Self!</option>
                                    <option value="Promotion">Promotion</option>
                            </select>
                            <button
                                //disabled={!isFormValid}
                                className="booking-btn"
                                type="submit"
                                value="Make Reservation">
                                    Make Reservation
                            </button>
                        </form>
                </div>
            </section>
        </>
        );
    }


export default ReservationComp;
