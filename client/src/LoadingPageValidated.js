import React, { useEffect } from "react";
import "./loadingPage.css";
import { useLocation, useNavigate } from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader";
import healthy from "./healthy.svg";
import logo from "./logo-white.svg";
import verified from "./verified.svg";

const LoadingPage = () => {
  const navigate = useNavigate();

  //   useEffect(() => {
  //     setTimeout(navigate("/resultsPage"), 5000);
  //   }, []);
  const handleClick = (e) => {
    navigate("/FormPage");
  };

  const color = "#ffffff";
  const loading = true;
  return (
    <div className="loadingPageContainer" onClick={handleClick}>
      <div className="loadingPageWrapper">
        <img className="logo-white" src={logo} />
        <h2 className="title">device paired successfully</h2>
        <img src={verified} className="healthy" />
      </div>
    </div>
  );
};

export default LoadingPage;
