import React, { useEffect } from "react";
import "./loadingPage.css";
import { useLocation, useNavigate } from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader";
import healthy from "./healthy.svg";
import logo from "./logo-white.svg";

const LoadingPage = () => {
  const navigate = useNavigate();

  //   useEffect(() => {
  //     setTimeout(navigate("/resultsPage"), 5000);
  //   }, []);
  const handleClick = (e) => {
    navigate("/resultsPage");
  };

  const color = "#ffffff";
  const loading = true;
  return (
    <div className="loadingPageContainer" onClick={handleClick}>
      <div className="loadingPageWrapper">
        <img className="logo-white" src={logo} />
        <h2 className="title">Turn on the device and wait for pairing</h2>
        <img src={healthy} className="healthy" />
        <SyncLoader
          height="800"
          width="800"
          radius="9"
          color="#ffffff"
          ariaLabel="three-dots-loading"
          speedMultiplier={0.5}
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </div>
    </div>
  );
};

export default LoadingPage;
