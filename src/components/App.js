import React from "react";
import { Routes, Route } from "react-router-dom";
import "../styles/app.css";
import NavBar from "./NavBar";
import ViewProperties from "./ViewProperties";
import AddProperty from "./AddProperty";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/view" element={<ViewProperties />} />
        <Route path="/add" element={<AddProperty />} />
      </Routes>
    </div>
  );
};

export default App;
