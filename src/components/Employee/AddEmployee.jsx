import React, { useState } from "react";
import { addEmployee } from "../../services/employeeService";

const AddEmployee = () => {
  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !salary || parseFloat(salary) <= 0) {
      setMessage("Please provide a valid name and salary.");
      return;
    }

    const employee = {
      name,
      salary: parseFloat(salary),
    };

    try {
      setIsSubmitting(true);
      await addEmployee(employee);
      setMessage("Employee added successfully!");
      setName("");
      setSalary("");
    } catch (error) {
      const backendMessage = error.response?.headers?.message;
      setMessage((backendMessage || "Internal server error"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "500px" }}>
      <div className="card shadow">
        <div className="card-body">
          <h3 className="card-title text-center mb-4 text-primary">
            Add New Employee
          </h3>

          {message && (
            <div className="alert alert-info text-center" role="alert">
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter employee name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Salary</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter salary"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                required
                min="1"
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Adding..." : "Add Employee"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
