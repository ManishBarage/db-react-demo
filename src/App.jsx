import "./App.css";
import AppRoutes from "./components/Common/AppRoutes";
import NavBar from "./components/Common/NavBar";
import AddEmployee from "./components/Employee/AddEmployee";
import EmployeeList from "./components/Employee/EmployeeList";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <>
      <UserProvider>
        <NavBar></NavBar>
        <AppRoutes></AppRoutes>
      </UserProvider>
    </>
  );
}

export default App;
