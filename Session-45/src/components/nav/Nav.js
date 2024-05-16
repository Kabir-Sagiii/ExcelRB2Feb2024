import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <div className="navbarContainer shadow p-3">
      <div className="title">
        <h2 className="h1">eCommKart</h2>
      </div>
      <div className="menus">
        <a href="/">Home</a>
        <a href="/profile">Profile</a>
        <a href="/users">Users</a>
        <a href="/products">Products</a>
        <a href="/cart">Cart</a>
        {/* <a href="/signin">SignIn</a>
        <a href="/signup">SignUp</a> */}
        <button className="btn btn-outline-danger">Logout</button>
      </div>
    </div>
  );
}

export default Nav;
