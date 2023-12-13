import "./Landing.css";
import { Navbar } from "./Navbar";
import { Profile } from "./Profile";
import { Status } from "./Status";
import { useLocation } from "react-router-dom";

const Landing = () => {
  const location = useLocation();
  return (
    <div className="landing">
      <div className="landing1">
        <Navbar />
        <Profile />
        <Status />
        <div className="main"></div>
      </div>
    </div>
  );
};

export default Landing;
