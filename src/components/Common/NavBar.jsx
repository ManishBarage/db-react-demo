import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const NavBar = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4">
      <Link className="navbar-brand fw-bold" to="/">
        Deutsche Bank
      </Link>

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

          {user && (
            <>
              <li className="nav-item">
                <Link className="nav-link fw-bold" to="/employees">Employees</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold" to="/employees/new">Add Employee</Link>
              </li>
              <li className="nav-item">
                <button className="btn btn-warning fw-bold ms-2" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            </>
          )}

          {!user && (
            <>
              <li className="nav-item">
                <Link className="nav-link fw-bold" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold" to="/register">Register</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
