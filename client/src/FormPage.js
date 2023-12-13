import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const FormPage = () => {
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
        "http://127.0.0.1:8000/prediction",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      setPrediction(response.data.prediction);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <div className="predictionForm">
      <h1>Health Information </h1>
      <h2>Fill the input s carefully!</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="age">Age (in years):</label>
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

        <label htmlFor="sex">Sex:</label>
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

        <label htmlFor="cp">Chest Pain Type:</label>
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
        <label htmlFor="chol">Serum Cholestoral (mg/dl):</label>
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
        <label htmlFor="fbs">Fasting Blood Sugar &gt; 120 mg/dl:</label>
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
        <label htmlFor="restecg">Resting Electrocardiographic Results:</label>
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
        <label htmlFor="exang">Exercise Induced Angina:</label>
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
          ST Depression Induced by Exercise Relative to Rest:
        </label>
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
        <label htmlFor="slope">Slope of the Peak Exercise ST Segment:</label>
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
          Number of Major Vessels Colored by Flourosopy (0-3):
        </label>
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
        <label htmlFor="thal">Thal:</label>
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
      </form>

      <h1>Prediction: {prediction !== null ? prediction : "No prediction"}</h1>
    </div>
  );
};
