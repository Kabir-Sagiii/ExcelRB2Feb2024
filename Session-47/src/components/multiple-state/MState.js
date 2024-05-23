import { useState } from "react";

function MState() {
  //   let [name, setName] = useState("Rohan sharma");

  //   let [city, setCity] = useState("Hyderabad");

  //   let [data, setData] = useState({
  //     name: "Riya Sharma",
  //     city: "Mumbai",
  //   });

  let [data, setData] = useState(["sagar", "pune"]);

  return (
    <div style={{ textAlign: "center" }}>
      <dl>
        <dt>
          <b>User Name</b>
        </dt>
        <dd>{data[0]}</dd>s
        <dt>
          <b>City Name</b>
        </dt>
        <dd>{data[1]}</dd>
      </dl>
    </div>
  );
}

export default MState;
