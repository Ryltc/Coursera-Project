import React, { useState } from "react";

export const FormContext = React.createContext();

const FormProvider = ({ children }) => {
  const [form, setForm] = useState({
    name: "",
    date: "",
    time: "",
    guests: 1,
    occasion: false,
  });

  const setFormHandler = (data) => {
    setForm(data);
  };

  return (
    <FormContext.Provider
      value={{
        form,
        setForm: setFormHandler,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;

