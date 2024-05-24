import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  //hooks should be called here

  function logout() {
    //cannot call hooks
  }

  return (
    <div className="navbarContainer shadow p-3">
      <div className="title">
        <h2 className="h1">eCommKart</h2>
      </div>
      <div className="menus">
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/usecontext">UseContext</Link>
        <Link to="/statecomp">StateComp</Link>
        <Link to="/useref">UseRef</Link>
      </div>
    </div>
  );
}

export default Nav;