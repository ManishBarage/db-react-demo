import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEmployeeById } from "../../services/employeeService";

const EmployeeDetails = () => {
  const employeeParam = useParams();
  //Using the id to request employeeService getEmployeeId and render the data

  const [employee, setEmployee] = useState([]);
  useEffect(() => {
    console.log(employeeParam.id);
    const fetchEmployee = async () => {
      try {
        const data = await getEmployeeById(employeeParam.id);
        console.log(data);
        setEmployee(data);
      } catch (err) {
        console.error("Error fetching employees:", err);
      }
    };

    fetchEmployee();
  },[]);

  return (
    <>
      <h2>Employee Details</h2>
      <p>Id : {employeeParam.id}</p>
      <p>Name : {employee.name}</p>
      <p>Salary : {employee.salary}</p>
    </>
  );
};

export default EmployeeDetails;
