import React, { useRef, useState } from "react";
import DatePicker from 'react-datepicker';
import TimePicker from 'react-dropdown-timepicker';
import  '.Reservations.css';


const DatePicker = () => {
    const [startDate, setStartDate] = useState (new Date());

    return (
        <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        />
    );
};

export default DatePicker



