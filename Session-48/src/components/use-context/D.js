// import "./Context.css";
// function D({ data }) {
//   return (
//     <div className="DContainer">
//       <h2>D Component</h2>
//       <h4 style={{ color: "red" }}>{data}</h4>
//     </div>
//   );
// }

// export default D;

import "./Context.css";
import { useContext } from "react";
import myContext from "./myContext";
function D() {
  let contextdata = useContext(myContext);
  return (
    <div className="DContainer">
      <h2>D Component</h2>
      <h4 style={{ color: "red" }}>Data: {contextdata.state}</h4>
    </div>
  );
}

export default D;
