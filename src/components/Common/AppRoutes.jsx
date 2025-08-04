import {Navigate, Route, Routes } from "react-router-dom";
import EmployeeList from "../Employee/EmployeeList";
import EmployeeDetails from "../Employee/EmployeeDetails";
import AddEmployee from "../Employee/AddEmployee";
import Home from "../Common/Home";
import Login from "../Common/Login";
import Register from "../Common/Register";
import Page404 from "../Common/Page404";

const AppRoutes = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to={"/"}/>} />
          <Route path="/employees" element={<EmployeeList />} />
          <Route path="/employees/:id" element={<EmployeeDetails />} />
          <Route path="/employees/new" element={<AddEmployee />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Page404 />} />
        </Routes>

    </>
  );
};

export default AppRoutes;
