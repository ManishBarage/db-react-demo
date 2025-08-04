import { getAllEmployees } from "../../services/employeeService";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const EmployeeList = () => {
  const [empList, setEmpList] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const data = await getAllEmployees();
        console.log(data);
        setEmpList(data);
      } catch (err) {
        console.error("Error fetching employees:", err);
      }
    };

    fetchEmployees();
  }, []);

  return (
    <>
      <p>Employee List</p>
      {empList && empList.map((emp, index) => (
        <div key={index}>
          <p>Name : {emp.name} <Link to={`/employees/${emp.id}`}> View Details</Link></p>
          {/* <p> Salary : {emp.salary}</p> */}
        </div>
      ))}
    </>
  );
};

export default EmployeeList;
