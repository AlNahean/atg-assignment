import React, { useState, useEffect, useReducer, useContext } from "react";
// import axios from "axios";

import Reducer from "./Reducer";

const AppContext = React.createContext();
const initialState = {
  loading: true,
  firstName: "Nahean",
  lastName: "Fardous",
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  const [test, setTest] = useState("Context Text");
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  return (
    <AppContext.Provider
      value={{
        ...state,
        test,
        showRegisterModal,
        setShowRegisterModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider }; //so i would normally use this line in the future child but becouse i am returning right now i would use ---useglobalContext-- hook ine next pages.
