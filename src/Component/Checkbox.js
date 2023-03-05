import React from "react";
import "./stylesheet/checkbox.css";
import { MdGirl } from "react-icons/md";
import { AiOutlineLaptop } from "react-icons/ai";
const Step3 = () => {
  return (
    <div>
      <div className="icon-div">
        <MdGirl
          style={{
            fontSize: "13rem",
            border: "1px solid gray",
            backgroundColor: "rgb(249,249,251)",
            cursor: "pointer",
          }}
        />
        <AiOutlineLaptop
          style={{
            fontSize: "13rem",
            border: "1px solid gray",
            backgroundColor: "rgb(249,249,251)",
            cursor: "pointer",
          }}
        />
      </div>
      <div className="checkbox-div">
        <div>
          <input type="checkbox" />
          <label className="checkbox-label">i want to add this option</label>
        </div>
        <div>
          <input type="checkbox" />
          <label className="checkbox-label">
            let me click on this checkbox and choose some cool stuf.
          </label>
        </div>
      </div>
    </div>
  );
};

export default Step3;
