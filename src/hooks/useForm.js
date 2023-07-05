import { useState, useEffect, useReducer } from "react";
import { submitAPI } from "../APIs/apiMockup";
import { useFormContext } from 'react-hook-form';

const initialState = {
  name: "",
  date: "",
  time: "",
  Guests: 1,
  occasion: "",
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
    case ACTION_TYPES.EMAIL:
      return {
        ...state,
        email: action.payload,
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
        Guests: action.payload,
      };
    case ACTION_TYPES.TABLE:
      return {
        ...state,
        tablePreference: action.payload,
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
  const [timeSlots, setTimeslots] = useState([]);
  const [isFormValid, setFormValid] = useState(false);
  const formContext = useFormContext();

  useEffect(() => {
    if (
      form.name.trim().length >= 3 &&
      form.date &&
      form.time &&
      form.Guests &&
      form.occasion
    ) {
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
    fetchTimeSlots(new Date(e.target.value))
      .then((slots) => setTimeslots(slots))
      .catch((error) => console.log(error));
  };

  const fetchTimeSlots = async (date) => {
    try {
      const response = await fetch(
        "https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js"
      );
      const data = await response.json();
      return data.timeSlots;
    } catch (error) {
      throw new Error("Failed to fetch time slots");
    }
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

  const submitHandler = (e) => {
    e.preventDefault();
    let response;

    if (isFormValid) {
      response = submitAPI(form);
      formContext.setForm(form);
    }
    return response ? true : false;
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