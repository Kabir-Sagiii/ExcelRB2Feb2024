import "./Users.css";
import { useState } from "react";
import axios from "axios";
import NewUser from "./NewUser";

function Users() {
  let [users, setUsers] = useState([]);

  const getUsers = () => {
    //Implmenent the Logic to send a request to json server
    var promiseObject = axios.get("http://localhost:5000/results");

    promiseObject
      .then((successdata) => {
        setUsers(successdata.data);
      })
      .catch((failuredata) => {
        alert("Something went wrong");
      });
  };

  const deleteUser = (id) => {
    axios
      .delete(`http://localhost:5000/results/${id}`)
      .then((successdata) => {
        console.log(successdata);
        alert("User Deleted Successfully");
        getUsers();
      })
      .catch(() => {
        alert("Failed to Delete User");
      });
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
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <div className="leftSection">
            <NewUser getUsers={getUsers} />
          </div>

          <div className="rightSection">
            <div
              style={{
                margin: "50px auto",
                width: "500px",
                boxShadow: "0 0 10px green",
                padding: "10px",
              }}
            >
              <table width={"100%"} rules="groups" cellPadding={10}>
                <thead>
                  <tr>
                    <th>NAME</th>
                    <th>CITY</th>
                    <th colSpan={2}>ACTIONS</th>
                  </tr>
                </thead>
                <tbody align="center">
                  {users.length > 0 &&
                    users.map((user) => {
                      return (
                        <tr key={user.id}>
                          <td>{user.name}</td>
                          <td>{user.city}</td>
                          <td>
                            <button>Update</button>
                          </td>
                          <td>
                            <button
                              onClick={() => {
                                deleteUser(user.id);
                              }}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
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
