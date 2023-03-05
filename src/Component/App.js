import React, { useState } from "react";
import Aside from "./Aside";
import Steper from "./Steper";
import StepNum from "./StepNumber";
import SignUp from "./Sign-up";
import Message from "./Message";
import Checkbox from "./Checkbox";
import Thanks from "./Thanks";
import Button from "./Button";
import "./stylesheet/app.css";
const App = () => {
  const [step, setstep] = useState(1);
  let form = [<SignUp />, <Message />, <Checkbox />];
  return (
    <div className="main-div">
      <Aside />
      {step === 4 ? (
        <div className="sucess">
          <Steper step={step} />
          <Thanks />
        </div>
      ) : (
        <div className="left-aside-div">
          <Steper step={step} />
          <StepNum step={step} />
          {form[step - 1]}
          <Button step={step} setstep={setstep} />
        </div>
      )}
    </div>
  );
};

export default App;
