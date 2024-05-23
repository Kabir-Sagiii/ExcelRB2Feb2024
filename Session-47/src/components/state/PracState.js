import "./State.css";

import { useState } from "react";

function PracState() {
  let [state, setState] = useState("Sagar"); //setter function

  function updatestate() {
    setState("Kabir");
  }

  return (
    <div className="stateContainer">
      <h2>State Concept :{state}</h2>
      <button onClick={updatestate}>changeName</button>
    </div>
  );
}

export default PracState;
