import React from "react";
import "./stylesheet/button.css";

const Button = (props) => {
  const handleStep = () => {
    props.setstep(props.step < 4 ? props.step + 1 : props.step);
  };
  const handlebackbtn = () => {
    props.setstep(props.step > 1 ? props.step - 1 : props.step);
  };
  let btnText = ["next step", "next step", "submit"];
  return (
    <div className="btn-div">
      {props.step > 1 ? (
        <button className="back-btn" onClick={handlebackbtn}>
          Back
        </button>
      ) : (
        ""
      )}
      <button className="next-btn" onClick={handleStep}>
        {btnText[props.step - 1]}
      </button>
    </div>
  );
};

export default Button;
