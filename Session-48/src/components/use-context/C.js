// import D from "./D";
// import "./Context.css";
// function C({ data }) {
//   return (
//     <div className="CContainer">
//       <h2>C Component</h2>
//       <h4 style={{ color: "blue" }}>{data}</h4>
//       <D data={data} />
//     </div>
//   );
// }

// export default C;

import D from "./D";
import "./Context.css";

function C() {
  return (
    <div className="CContainer">
      <h2>C Component</h2>

      <D />
    </div>
  );
}

export default C;
