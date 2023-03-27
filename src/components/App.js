import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import WeekView from "./WeekView";
import "./App.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weekly" element={<WeekView />} />
      </Routes>
    </>
  );
};

export default App;
