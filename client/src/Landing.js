import "./Landing.css";
import { Navbar } from "./Navbar";
import { Profile } from "./Profile";
import { Status } from "./Status";


const Landing = () => {
  return (
    <div className="landing">
      <div className="landing1">
        <Navbar/>
        <Profile/>
        <Status/>
        <div className="main">
         </div>
         </div>
         </div>
  );
};

export default Landing;
