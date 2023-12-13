import "./App.css";
import Landing from "./Landing";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Router, Route, Link } from "react-router-dom";
import { FormPage } from "./FormPage";
import  ResultsPage  from "./ResultsPage";

function App() {
  return (
    <BrowserRouter>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Landing</Link>
          </li>
          <li>
            <Link to="/formPage">formPage</Link>
          </li>
        </ul>
      </nav> */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/formPage" element={<FormPage />} />
        <Route path="/resultsPage" element={<ResultsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// value={formData.lastName}
// onChange={handleChange}
//value={formData.}
