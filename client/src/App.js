import Landing from "./Landing";
import React from "react";
import { BrowserRouter, Routes, Router, Route, Link } from "react-router-dom";
import { FormPage } from "./FormPage";
import ResultsPage from "./ResultsPage";
import Login from "./Login";
import LoadingPage from "./LoadingPage";
import LoadingPageValidated from "./LoadingPageValidated";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/formPage" element={<FormPage />} />
        <Route path="/resultsPage" element={<ResultsPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/loadingPage" element={<LoadingPage />} />
        <Route
          path="/loadingPageValidated"
          element={<LoadingPageValidated />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
