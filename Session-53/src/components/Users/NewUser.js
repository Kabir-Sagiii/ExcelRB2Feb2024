import { useState } from "react";
import "./NewUser.css";
import axios from "axios";

function NewUser({ getUsers }) {
  const [user, setUser] = useState({
    name: "",
    city: "",
  });

  const addUser = async () => {
    var res = await axios.post("http://localhost:5000/results", user);

    alert("User Registered successfully");
    getUsers();
    setUser({
      name: "",
      city: "",
    });
  };
  return (
    <div className="newuserContainer">
      <h2 style={{ color: "blue" }}>New User</h2>
      <div style={{ margin: "10px 0px" }}>
        <input
          value={user.name}
          type="text"
          placeholder="Add Name"
          onChange={(event) => {
            setUser({
              ...user,
              name: event.target.value,
            });
          }}
        />
      </div>
      <div style={{ margin: "10px 0px" }}>
        <input
          value={user.city}
          type="city"
          placeholder="Add City"
          onChange={(event) => {
            setUser({
              ...user,
              city: event.target.value,
            });
          }}
        />
      </div>
      <div>
        <button onClick={addUser}>Submit</button>
      </div>
    </div>
  );
}

export default NewUser;
