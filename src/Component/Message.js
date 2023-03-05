import React from "react";
import "./stylesheet/message.css";
const Step2 = () => {
  return (
    <form>
      <div className="textarea-div">
        <label>Message</label>
        <textarea rows={10}></textarea>
      </div>
      <div className="checkbox-div">
        <div>
          <input type="checkbox" />
          <label className="message-label">The number one choice</label>
        </div>
        <div>
          <input type="checkbox" />
          <label className="message-label">The number two choice</label>
        </div>
      </div>
    </form>
  );
};

export default Step2;
