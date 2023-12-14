import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import mehdi from "./mehdi.jpeg";

import notification from "./Notification.png";
import logo from "./sihati.png";
import "./form.css";

export const FormPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    age: "",
    sex: "1",
    cp: "1",
    chol: "",
    fbs: "1",
    restecg: "0",
    exang: "1",
    oldpeak: "",
    slope: "1",
    ca: "",
    thal: "3",
  });
  const [prediction, setPrediction] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target; //deconstructing
    setFormData({ ...formData, [name]: value });
    console.log(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send form data to the Flask backend
      const response = await axios.post(
        "http://localhost:8000/prediction",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          },
          withCredentials: true,
        }
      );
      setPrediction(response.data.prediction);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
    navigate("/resultsPage");
  };
  return (
    <div className="predictionForm">
      <div
        className="logo"
        style={{
          width: 192.61,
          height: 63.06,
          left: 50.26,
          top: 48.07,
          position: "absolute",
        }}
      >
        <div
          style={{
            width: 189.94,
            height: 53.42,
            left: 0,
            top: 0,
            position: "absolute",
          }}
        >
          <img
            src={logo}
            style={{
              width: 189.94,
              height: 53.42,
              left: 0,
              top: 0,
              position: "absolute",
            }}
          />
        </div>
        <div
          style={{
            width: 191.33,
            height: 2.07,
            left: 1.29,
            top: 60.99,
            position: "absolute",
            background: "rgba(40.13, 35.82, 87.54, 0.74)",
            boxShadow:
              "15.800000190734863px 15.800000190734863px 15.800000190734863px ",
            borderRadius: 9999,
            filter: "blur(15.80px)",
          }}
        />
      </div>
      <div
        style={{
          width: 39.13,
          height: 32.47,
          left: 214.31,
          top: 78.67,
          position: "absolute",
          color: "#FF5C5C",
          fontSize: 24,

          fontWeight: "800",
          wordWrap: "break-word",
        }}
      >
        4.0
      </div>
      {/* *******************$ */}
      <div
        className="navBar"
        style={{
          width: 498.42,
          height: 29,
          left: 458.94,
          top: 69.36,
          position: "absolute",
        }}
      >
        <div
          style={{
            left: 0,
            top: 0,
            position: "absolute",

            fontSize: 24,
            fontWeight: "500",
            wordWrap: "break-word",
          }}
        >
          Appointements
        </div>
        <div
          style={{
            left: 241.82,
            top: 0,
            position: "absolute",

            fontSize: 24,
            fontWeight: "500",
            wordWrap: "break-word",
          }}
        >
          Doctors
        </div>
        <div
          style={{
            left: 407.42,
            top: 0,
            position: "absolute",

            fontSize: 24,
            fontWeight: "500",
            wordWrap: "break-word",
          }}
        >
          Settings
        </div>
      </div>
      {/* ***************************** */}
      <div
        className="profileInNav"
        style={{
          width: 274.01,
          height: 70.79,
          left: 1194.29,
          top: 52.94,
          position: "absolute",
        }}
      >
        <div
          style={{
            left: 54.04,
            top: 22.41,
            position: "absolute",
            color: "black",
            fontSize: 20,

            fontWeight: "300",
            wordWrap: "break-word",
          }}
        >
          Hello, Mehdi
        </div>
        <img
          style={{
            width: 30.63,
            height: 30.63,
            left: 0,
            top: 18.6,
            position: "absolute",
          }}
          src={notification}
        />
        <div
          style={{
            width: 70.79,
            height: 70.79,
            left: 203.23,
            top: 0,
            position: "absolute",
          }}
        >
          <div
            style={{
              width: 70.79,
              height: 70.79,
              left: 0,
              top: 0,
              position: "absolute",
              // background: "#D9D9D9",
              borderRadius: 10,
            }}
          />
          <img
            style={{
              width: 88.29,
              height: 88.05,
              left: -8.75,
              top: -6.54,
              position: "absolute",
              borderRadius: 20,
            }}
            src={mehdi}
          />
        </div>
      </div>
      {/* ***************************************** */}
      <form
        onSubmit={handleSubmit}
        style={{
          width: 502.79,
          height: 755.18,
          left: 51.55,
          top: 200.49,
          position: "absolute",
        }}
      >
        <div className="formPartsContainer">
          <div className="firstPart">
            <label htmlFor="age">Age </label>
            <br />
            <input
              value={formData.age}
              type="number"
              name="age"
              id=" age"
              required
              onChange={handleChange}
            />
            <br />
            <br />

            <label htmlFor="sex">Sex</label>
            <br />

            <select
              name="sex"
              id="sex"
              required
              onChange={handleChange}
              value={formData.sex}
            >
              <option value="1">Male</option>
              <option value="0">Female</option>
            </select>
            <br />
            <br />
          </div>
          <div className="secondPart">
            <label htmlFor="cp">Chest Pain Type</label>
            <br />
            <select
              name="cp"
              id="cp"
              required
              onChange={handleChange}
              value={formData.cp}
            >
              <option value="1">Typical Angina</option>
              <option value="2">Atypical Angina</option>
              <option value="3">Non-anginal Pain</option>
              <option value="4">Asymptomatic</option>
            </select>
            <br />
            <br />
            <label htmlFor="chol">Serum Cholestoral (mg/dl)</label>
            <br />
            <input
              value={formData.chol}
              type="number"
              name="chol"
              id="chol"
              required
              onChange={handleChange}
            />
            <br />
            <br />
            <label htmlFor="fbs">Fasting Blood Sugar &gt; 120 mg/dl</label>
            <br />
            <select
              name="fbs"
              id="fbs"
              required
              onChange={handleChange}
              value={formData.fbs}
            >
              <option value="1">Yes</option>
              <option value="0">No</option>
            </select>
            <br />
            <br />
          </div>
          <div className="thirdPart">
            <label htmlFor="restecg">
              Resting Electrocardiographic Results
            </label>
            <br />
            <select
              name="restecg"
              id="restecg"
              required
              onChange={handleChange}
              value={formData.restecg}
            >
              <option value="0">Normal</option>
              <option value="1">Abnormal (ST-T Wave)</option>
              <option value="2">
                Probable or Definite Left Ventricular Hypertrophy
              </option>
            </select>
            <br />
            <br />
            <label htmlFor="exang">Exercise Induced Angina</label>
            <br />
            <select
              name="exang"
              id="exang"
              required
              onChange={handleChange}
              value={formData.edexang}
            >
              <option value="1">Yes</option>
              <option value="0">No</option>
            </select>
            <br />
            <br />
            <label htmlFor="oldpeak">
              ST Depression Induced by Exercise Relative to Rest
            </label>
            <br />
            <input
              value={formData.oldpeak}
              type="number"
              name="oldpeak"
              id="oldpeak"
              step="0.1"
              required
              onChange={handleChange}
            />
            <br />
            <br />
            <label htmlFor="slope">Slope of the Peak Exercise ST Segment</label>
            <br />
            <select
              name="slope"
              id="slope"
              required
              onChange={handleChange}
              value={formData.slope}
            >
              <option value="1">Upsloping</option>
              <option value="2">Flat</option>
              <option value="3">Downsloping</option>
            </select>
            <br />
            <br />
            <label htmlFor="ca">
              Number of Major Vessels Colored by Flourosopy (0-3)
            </label>
            <br />
            <input
              value={formData.ca}
              type="number"
              name="ca"
              id="ca"
              min="0"
              max="3"
              required
              onChange={handleChange}
            />
            <br />
            <br />
            <label htmlFor="thal">Thal</label>
            <br />
            <select
              name="thal"
              id="thal"
              required
              onChange={handleChange}
              value={formData.thal}
            >
              <option value="3">Normal</option>
              <option value="6">Fixed Defect</option>
              <option value="7">Reversible Defect</option>
            </select>
            <br />
            <br />
            <input type="submit" value="Submit" onChange={handleChange} />
          </div>
        </div>

        <br />
        <span>
          {/* Prediction: {prediction !== null ? prediction : "No prediction"} */}
        </span>
      </form>
    </div>
  );
};
