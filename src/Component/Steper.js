import React from "react";
import "./stylesheet/steper.css";
import { TbSquareNumber1 } from "react-icons/tb";
import { TbSquareNumber2 } from "react-icons/tb";
import { TbSquareNumber3 } from "react-icons/tb";
import { FcOk } from "react-icons/fc";

const Steper = (props) => {
  return (
    <div>
      <ul className="steper">
        <li>
          {props.step > 1 ? <FcOk /> : <TbSquareNumber1 />}
          sign up
        </li>
        <li>
          {props.step > 2 ? <FcOk /> : <TbSquareNumber2 />}
          message
        </li>
        <li>
          {props.step > 3 ? <FcOk /> : <TbSquareNumber3 />}
          check box
        </li>
      </ul>
    </div>
  );
};

export default Steper;
