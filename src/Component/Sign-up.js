import React from "react";
import "./stylesheet/sign-up.css";
const Step1 = () => {
  return (
    <form>
      <div className="step1-parent-div">
        <div className="step1-input-div">
          <label>First Name</label>
          <input type="text" />
        </div>
        <div className="step1-input-div">
          <label>Last Name</label>
          <input type="text" />
        </div>
        <div className="step1-input-div">
          <label>Date of Birth</label>
          <input type="date" />
        </div>
        <div className="step1-input-div">
          <label>Email Address</label>
          <input type="email" />
        </div>
        <div className="step1-address-input">
          <label>Address</label>
          <input />
        </div>
      </div>
    </form>
  );
};

export default Step1;
