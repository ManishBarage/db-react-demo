import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4">
      <Link className="navbar-brand fw-bold" to="/">Deutsche Bank</Link>
      
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link fw-bold" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link fw-bold" to="/employees">Employees</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link fw-bold" to="/employees/new">Add Employee</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link fw-bold" to="/login">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link fw-bold" to="/register">Register</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
