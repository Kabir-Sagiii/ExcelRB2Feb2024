import "./State.css";
import { useState } from "react";

function StateComp() {
  let [state, setState] = useState("sagar");

  function updateState() {
    setState("Kabir");
  }

  return (
    <div className="stateContainer">
      <h2>State Concept</h2>
      <h4>Name :{state} </h4>
      <button onClick={updateState}>Change Name</button>
    </div>
  );
}

export default StateComp;
