import { useState } from "react";

const AddEmployee = () => {
  const [employee, setEmployee] = useState({ name: "", salary: "" });
  const [submittedData, setSubmittedData] = useState({ name: "", salary: "" });

  const handleInput = (evt) => {
    console.log(evt.target);
    setEmployee({ ...employee, [evt.target.name]: evt.target.value});
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // console.log(evt.target);
    setSubmittedData(employee);
  };

  return (
    <>
      <p>Add Employee</p>
      <p>Data after submitted</p>
      <p>Name : {submittedData.name}</p>
      <p>Salary : {submittedData.salary}</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={employee.name}
          onChange={handleInput}
          autoFocus
        />
        <input
          type="number"
          name="salary"
          value={employee.salary}
          onChange={handleInput}
        />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default AddEmployee;
