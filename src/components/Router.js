import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Page/Home/home";
import Error from "./Page/Error/Error";
import TaskTwo from "./Page/TaskTwo/TaskTwo";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" caseSensitive={false} element={<Home />} />
        <Route path="/home" caseSensitive={false} element={<Home />} />
        <Route path="/task-2" caseSensitive={false} element={<TaskTwo />} />
        <Route path="*" caseSensitive={false} element={<Error />} />
      </Routes>
    </Router>
  );
};

export default Routing;
