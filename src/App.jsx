import "./App.css";
import AppRoutes from "./components/Common/AppRoutes";
import NavBar from "./components/Common/NavBar";
import AddEmployee from "./components/Employee/AddEmployee";
import EmployeeList from "./components/Employee/EmployeeList";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <AppRoutes></AppRoutes>
      <hr />
    </>
  );
}

export default App;
