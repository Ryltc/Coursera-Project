import { useState, useEffect, useReducer } from 'react';
// import { submitAPI } from "../APIs/apiMockup";
import { useFormContext } from 'react-hook-form';

const initialState = {
  name: '',
  date: '',
  time: '',
  guests: 1,
  occasion: '',
};

const ACTION_TYPES = {
  NAME: 0,
  DATE: 2,
  TIME: 3,
  GUESTS: 4,
  OCCASION: 6,
};

const formReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.NAME:
      return {
        ...state,
        name: action.payload,
      };
    case ACTION_TYPES.DATE:
      return {
        ...state,
        date: action.payload,
      };
    case ACTION_TYPES.TIME:
      return {
        ...state,
        time: action.payload,
      };
    case ACTION_TYPES.GUESTS:
      return {
        ...state,
        guests: action.payload,
      };
    case ACTION_TYPES.OCCASION:
      return {
        ...state,
        occasion: action.payload,
      };
    default:
      return state;
  }
};

const useForm = () => {
  const [form, dispatch] = useReducer(formReducer, initialState);
  const [timeSlots, setTimeSlots] = useState([]);
  const [isFormValid, setFormValid] = useState(false);
  const formContext = useFormContext();

  useEffect(() => {
    if (form.name.trim().length >= 3 && form.date && form.time && form.guests && form.occasion) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [form]);

  const changeNameHandler = (e) => {
    dispatch({ type: ACTION_TYPES.NAME, payload: e.target.value });
  };

  const changeDateHandler = (e) => {
    dispatch({ type: ACTION_TYPES.DATE, payload: e.target.value });
    fetchTimeSlots(new Date(e.target.value));
  };

  const fetchTimeSlots = (date) => {
    const timeSlots = generateTimeSlots(date);
    setTimeSlots(timeSlots);
  };

  const generateTimeSlots = (date) => {
    let result = [];
    let random = seededRandom(date.getDate());

    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) {
        result.push(i + ':00');
      }
      if (random() < 0.5) {
        result.push(i + ':30');
      }
    }

    return result;
  };

  const seededRandom = (seed) => {
    let m = 2 ** 35 - 31;
    let a = 185852;
    let s = seed % m;
    return () => {
      return (s = (s * a) % m) / m;
    };
  };

  const changeTimeHandler = (event) => {
    dispatch({ type: ACTION_TYPES.TIME, payload: event.target.value });
  };

  const changeGuestsHandler = (e) => {
    dispatch({ type: ACTION_TYPES.GUESTS, payload: e.target.value });
  };

  const changeOccasionHandler = (e) => {
    dispatch({ type: ACTION_TYPES.OCCASION, payload: e.target.value });
  };

 // The rest of the code remains the same

  const submitHandler = (e) => {
    e.preventDefault();
    let response;

    if (isFormValid) {
      response = submitAPI(form);
      formContext.setForm(form);
    }
    return response ? true : false;
  };

  const submitAPI = (formData) => {
    return true; // Placeholder logic, replace with actual submission logic
  };

  return {
    form,
    dispatch,
    methods: {
      timeSlots,
      isFormValid,
      changeNameHandler,
      changeDateHandler,
      changeTimeHandler,
      changeGuestsHandler,
      changeOccasionHandler,
      submitHandler,
    },
  };
};

export default useForm;
