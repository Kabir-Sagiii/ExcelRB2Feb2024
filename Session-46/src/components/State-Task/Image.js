import { useState } from "react";

function Image() {
  let [state, setState] = useState(
    "https://jslib.dev/wp-content/uploads/2022/03/Reactlogo.jpg"
  );
  function showReact() {
    setState("https://jslib.dev/wp-content/uploads/2022/03/Reactlogo.jpg");
  }

  function showJava() {
    setState("https://wallpapercave.com/wp/wp7250032.png");
  }
  return (
    <div style={{ textAlign: "center" }}>
      <img src={state} width="500" height="300" />
      <br />
      <br />
      <input type="radio" name="content" onChange={showReact} />
      React
      <input type="radio" name="content" onChange={showJava} />
      Java
    </div>
  );
}

export default Image;
