import { useState } from "react";
import myStore from "./Store.js";

function Name() {
  const [state, setState] = useState("");

  const submit = () => {
    let actionObject = {
      type: "NAME",
      userName: state,
    };

    myStore.dispatch(actionObject);
  };

  return (
    <div>
      <h2>Name Component</h2>
      <input
        type="text"
        placeholder="enter text"
        onChange={(e) => {
          setState(e.target.value);
        }}
      />
      <button onClick={submit}>Submit</button>
      <hr />
    </div>
  );
}

export default Name;
