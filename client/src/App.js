import "./App.css";
import Landing from "./Landing";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [formData, setFormData] = useState({
    age: "",
    name: "",
    lastName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target; //deconstructing
    setFormData({ ...formData, [name]: value });
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
          },
          withCredentials: true,
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    // <Landing />
    <div className="predictionForm">
      <h1>Health Information </h1>
      <h2>Fill the inputs carefully!</h2>
      <form onSubmit={handleSubmit}>
        <p>age</p>
        <input
          type="number"
          name="age"
          id="age"
          value={formData.age}
          onChange={handleChange}
        />
        <br />
        <p>name</p>
        <input
          type="text"
          name="name"
          id="chol"
          value={formData.name}
          onChange={handleChange}
        />
        <p>last name </p>
        <input
          type="text"
          name="lastName"
          id="ca"
          value={formData.lastName}
          onChange={handleChange}
        />
        <br />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
