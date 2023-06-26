import { useState, useReducer, useEffect } from "react";
import { fetchAPI, submitAPI } from "../APIs/apiMockup";
import { useFormContext } from 'react-hook-form';

const initialState = {
  name: "",
  email: "",
  date: "",
  time: "",
  numberOfGuests: 1,
  occasion: "",
};

const ACTION_TYPES = {
  NAME: 0,
  EMAIL: 1,
  DATE: 2,
  TIME: 3,
  GUESTS: 4,
  OCCASION: 6,
};

function formReducer(state, action) {
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
        numberOfGuests: action.payload,
      };
    case ACTION_TYPES.OCCASION:
      return {
        ...state,
        occasion: action.payload,
      };
    default:
      return state;
  }
}

const useForm = () => {
  const [form, setform, dispatch] = useReducer(formReducer, initialState);
  const [setTimeslots] = useState(["17:00"]);
  const timeSlots = [
    "17:00 PM",
    "17:30 PM",
    "18:00 PM",
    "18:30 PM",
    "19:00 PM",
    "19:30 PM",
    "20:00 PM",
    "20:30 PM",
    "21:00 PM",
    "21:30 PM",
    "22:00 PM",
    "22:30 PM",
    "23:00 PM",
    "23:30 PM",
  ];
  const [isFormValid, setFormValid] = useState(false);
  const formContext = useFormContext();

  useEffect(() => {
    if (
      form.name.trim().length >= 3 &&
      form.date &&
      form.time &&
      form.numberOfGuests &&
      form.occasion
    ) {
      setFormValid(true);
    }
  }, [form]);

  const changeNameHandler = (e) => {
    dispatch({ type: ACTION_TYPES.NAME, payload: e.target.value });
  };

  const changeDateHandler = (e) => {
    dispatch({ type: ACTION_TYPES.DATE, payload: e.target.value });
    setTimeslots(fetchAPI(new Date(e.target.value)));
  };

  const changeTimeHandler = (e) => {
    dispatch({ type: ACTION_TYPES.TIME, payload: e.target.value });
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