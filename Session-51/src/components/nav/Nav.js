import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="navbarContainer shadow p-3">
      <div className="title">
        <h2 className="h1">Axios with API's</h2>
      </div>
      <div className="menus">
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/">Products</Link>
        <Link to="/profile">ContactUs</Link>
      </div>
    </div>
  );
}

export default Nav;
