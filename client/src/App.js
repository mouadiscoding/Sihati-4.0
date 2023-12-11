import "./App.css";
import Landing from "./Landing";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    axios
      .get("/members")
      .then((response) => setMembers(response.data.members))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <div>
      <h1>Members</h1>
      <ul>
        {members.map((member, index) => (
          <li key={index}>{member}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
