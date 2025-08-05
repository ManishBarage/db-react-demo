import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";

const Login = () => {
  const { user: loggedInUser, setUser: setLoggedInUser } =
    useContext(UserContext);
  const [empData, setEmployee] = useState({ userName: "", password: "" });
  const [message, setMessage] = useState("");
  const [msgType, setMsgType] = useState("");

  const handleInput = (evt) => {
    setEmployee({ ...empData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (empData.userName === "Manish" && empData.password === "manish@123") {
      setLoggedInUser(empData.userName);
      setMessage("Login Successful!");
      setMsgType("success");
    } else {
      // setLoggedInUser(empData.userName);
      setMessage("Login Failed! Invalid credentials.");
      setMsgType("danger");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div
        className="card p-4 shadow-sm"
        style={{ width: "100%", maxWidth: "400px" }}
      >
        <h3 className="text-center mb-4">Login</h3>
        <p>{loggedInUser}</p>

        {message && (
          <div className={`alert alert-${msgType} text-center`} role="alert">
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="userName" className="form-label">
              Username
            </label>
            <input
              type="text"
              name="userName"
              className="form-control"
              id="userName"
              placeholder="Enter username"
              onChange={handleInput}
              autoFocus
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
              onChange={handleInput}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
