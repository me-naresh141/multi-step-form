import React from "react";
import "./stylesheet/stepnum.css";
const StepNum = (props) => {
  let heading = ["sign up", "message", "check box"];
  return (
    <div className="stepNum">
      <small>
        step <strong className="step-strong">{props.step}</strong> /3
      </small>
      <h1 className="step-num-heading">{heading[props.step - 1]}</h1>
    </div>
  );
};

export default StepNum;
