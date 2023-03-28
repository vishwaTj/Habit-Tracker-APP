import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Week from "./Week";
import "./App.css";

const App = () => {
  return (
    <>
     {/* Routes for home page and week page  */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weekly" element={<Week />} />
      </Routes>
    </>
  );
};

export default App;
