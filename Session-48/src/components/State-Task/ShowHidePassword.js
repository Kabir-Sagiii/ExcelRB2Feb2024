import "./ShowHide.css";
import { useState } from "react";
function ShowHidePassword() {
  let [state, setState] = useState("text");

  function showText() {
    setState("text");
  }

  function hideText() {
    setState("password");
  }

  return (
    <div className="hide">
      <input type={state} placeholder="Add Content" />
      <br />
      <br />
      <input type="radio" name="content" onChange={showText} />
      Show Content
      <input type="radio" name="content" onChange={hideText} />
      Hide Content
    </div>
  );
}

export default ShowHidePassword;
