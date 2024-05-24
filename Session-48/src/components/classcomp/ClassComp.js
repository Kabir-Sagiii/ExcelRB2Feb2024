import { Component } from "react";
class ClassComp extends Component {
  constructor() {
    super();
    this.state = {
      name: "raj",
    };
  }
  render() {
    return (
      <div style={{ padding: "50px" }}>
        {/* <h1>{this.state.name}</h1> */}
        <h2>God Names</h2>
        <ul>
          <li>Ram</li>
          <li>Shyam</li>
          <li>Krishna</li>
          <li>Govinda</li>
        </ul>
      </div>
    );
  }
}

export default ClassComp;
