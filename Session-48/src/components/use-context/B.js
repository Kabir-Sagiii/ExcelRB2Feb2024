// import C from "./C";
// import "./Context.css";

// function B({ data }) {
//   //props = {data:"Sagar"}
//   return (
//     <div className="BContainer">
//       <h2>B Component</h2>
//       <p style={{ color: "green" }}>Data of A : {data}</p>
//       <C data1={data} />
//     </div>
//   );
// }

// export default B;

import C from "./C";
import "./Context.css";
import myContext from "./myContext";
import { useContext } from "react";

function B() {
  let info = useContext(myContext);
  return (
    <div className="BContainer">
      <h2>B Component : {info.name}</h2>

      <C />
    </div>
  );
}

export default B;
