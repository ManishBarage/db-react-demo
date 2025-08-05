import { getAllEmployees, deleteEmployeeById } from "../../services/employeeService";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle, FaArrowRight, FaEdit, FaTrash } from "react-icons/fa";

const EmployeeList = () => {
  const [empList, setEmpList] = useState([]);
  const [deleteMessage, setDeleteMessage] = useState("");

  const fetchEmployees = async () => {
    try {
      const data = await getAllEmployees();
      setEmpList(data);
    } catch (err) {
      console.error("Error fetching employees:", err);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this employee?");
    if (!confirmDelete) return;

    try {
      await deleteEmployeeById(id);
      setEmpList(empList.filter(emp => emp.id !== id));
      setDeleteMessage("Employee deleted successfully!");

      setTimeout(() => setDeleteMessage(""), 3000);
    } catch (error) {
      alert("Failed to delete employee. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 fw-bold text-secondary">👥 Our Employees</h2>

      {deleteMessage && (
        <div className="alert alert-success text-center" role="alert">
          {deleteMessage}
        </div>
      )}

      {empList.length === 0 ? (
        <div className="alert alert-info">No employees found.</div>
      ) : (
        <ul className="list-group">
          {empList.map((emp, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-center shadow-sm mb-3 rounded"
            >
              <div className="d-flex align-items-center gap-3">
                <FaUserCircle size={32} className="text-primary" />
                <div>
                  <h6 className="mb-1">{emp.name}</h6>
                  <span className="badge bg-secondary">
                    {emp.designation || "Employee"}
                  </span>
                </div>
              </div>

              <div className="btn-group">
                <Link
                  to={`/employees/${emp.id}`}
                  className="btn btn-sm btn-outline-dark"
                >
                  View <FaArrowRight className="ms-1" />
                </Link>

                <Link
                  to={`/employees/edit/${emp.id}`}
                  className="btn btn-sm btn-outline-primary"
                >
                  Edit <FaEdit className="ms-1" />
                </Link>

                <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => handleDelete(emp.id)}
                >
                  Delete <FaTrash className="ms-1" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EmployeeList;
