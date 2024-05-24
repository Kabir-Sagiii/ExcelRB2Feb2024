// import B from "./B";
// import "./Context.css";
// import { useState } from "react";

// function A() {
//   let [state, setState] = useState("Sagar");

//   const getData = (event) => {
//     //event.target.value
//     setState(event.target.value);
//   };

//   return (
//     <div className="AContainer">
//       <h2>A Component</h2>
//       <input type="text" placeholder="Enter Some Text" onChange={getData} />
//       <B data={state} />
//     </div>
//   );
// }

// export default A;

import B from "./B";
import "./Context.css";
import { useState } from "react";
import myContext from "./myContext";

function A() {
  let [state, setState] = useState("Rohan Verma");

  let [name, setName] = useState("Riya Verma");

  const getData = (event) => {
    //event.target.value
    setState(event.target.value);
  };
  return (
    <div className="AContainer">
      <h2>A Component</h2>
      <input type="text" placeholder="Enter Some Text" onChange={getData} />

      <myContext.Provider value={{ state, name }}>
        <B />
      </myContext.Provider>
    </div>
  );
}

export default A;
