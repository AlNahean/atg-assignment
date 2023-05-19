// import './components/Styles/App.scss';
import React from "react";

import Router from "./components/Router";

import { AppProvider } from "./components/Context";

function App() {
  return (
    <>
      <React.StrictMode>
        <AppProvider>
          <Router />
        </AppProvider>
      </React.StrictMode>
    </>
  );
}

export default App;
