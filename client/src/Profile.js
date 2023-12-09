import React from "react";
import doctorIcon from "./doctorIcon.png";
import "./Landing.css";

export const Profile = () => {
  return (
    <div className="rectangle-parent">
      <div className="group-inner" />
      <img className="rectangle-div" src={doctorIcon} />
      <div className="fluka-benabdelkader-parent">
        <div className="fluka-benabdelkader">Fluka Benabdelkader</div>
        <div className="age-21">Age : 21</div>
        <div className="age-211">Age : 21</div>
        <div className="age-212">Age : 21</div>
        <div className="gender-male">Gender : Male</div>
        <div className="gender-male1">Gender : Male</div>
        <div className="gender-male2">Gender : Male</div>
        <div className="blood-type">Blood Type : Nice</div>
        <div className="blood-type1">Blood Type : Nice</div>
        <div className="blood-type2">Blood Type : Nice</div>
        <div className="weight-60kg">Weight : 60kg</div>
        <div className="stats">Stats</div>
        <div className="height-190cm">Height : 190cm</div>
      </div>
      <div className="group-child1" />
      <div className="looking-for-a">Looking for a specific patient ?</div>
    </div>
  );
};
