import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <div className="nav-links">
          <Link to={"/"}>Home</Link>
          <Link to={"/employees"}>Employees</Link>
          <Link to={"/employees/new"}>Add Employee</Link>
          <Link to={"/login"}>Login</Link>
          <Link to={"/register"}>Register</Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
