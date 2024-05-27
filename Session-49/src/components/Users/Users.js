import "./Users.css";
import { useState } from "react";
import axios from "axios";

function Users() {
  let [users, setUsers] = useState([]);

  const getUsers = () => {
    //Implmenent the Logic to send a request to json server
    var promiseObject = axios.get("http://localhost:5000/results");

    promiseObject
      .then((successdata) => {
        setUsers(successdata.data);
      })
      .catch((failuredata) => {});
  };

  return (
    <div className="userContainer">
      <h2>All Users Information</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni alias
        numquam illo ipsam dolorum iste. Ducimus, deleniti ex nostrum dolore
        rerum sunt adipisci quasi est excepturi nemo at praesentium id
        exercitationem. Suscipit ex temporibus dolorum repellat cupiditate ad
        quam facere impedit perspiciatis commodi nesciunt, amet odit officia rem
        laborum esse nemo a accusantium. Error cum corrupti nam id, dolor
        laboriosam! Ab, id aut iure ea nulla a dolorum quos fuga quod
        voluptatibus incidunt hic cum, expedita vitae omnis quia corrupti
        officiis qui at tempora eaque. Ratione dolorum in qui voluptates vel
        aspernatur rem et mollitia, ullam expedita quaerat sunt iure.
      </p>
      <button onClick={getUsers}>Get Users</button>
      {users.length > 0 ? (
        <div>
          <ol>
            {users.length > 0 &&
              users.map((user) => {
                return <li>{user.name}</li>;
              })}
          </ol>
          {/* <ol>
            <li>{users[0].name}</li>
            <li>{users[1].name}</li>
            <li>{users[2].name}</li>
            <li>{users[3].name}</li>
            <li>{users[4].name}</li>
          </ol> */}
        </div>
      ) : (
        <h2 style={{ textAlign: "center", margin: "50px 0px", color: "red" }}>
          No Users To Display
        </h2>
      )}
    </div>
  );
}

export default Users;
