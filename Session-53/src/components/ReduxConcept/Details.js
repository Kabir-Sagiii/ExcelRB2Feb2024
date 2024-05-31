import React from "react";
import { useSelector } from "react-redux";

function Details() {
  let value = useSelector((data) => {
    return data.name;
  });
  return (
    <div>
      <h2>Details Component</h2>
      <h3 style={{ color: "green", fontStyle: "italic" }}>{value}</h3>
    </div>
  );
}

export default Details;
