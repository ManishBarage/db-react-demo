import axios from 'axios';

const api = axios.create({
  baseURL: "http://localhost:8080/api/v1/employees",
  auth: {
    username: 'manish',
    password: 'manish@123'
  }
});

// Get all employees
const getAllEmployees = async () => {
  try {
    const response = await api.get("/");
    return response.data;
  } catch (error) {
    console.error("Error fetching employees:", error);
    throw error;
  }
};

// Get a specific employee by ID
const getEmployeeById = async (id) => {
  try {
    const response = await api.get(`/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching employee with id ${id}:`, error);
    throw error;
  }
};

// Add a new employee
const addEmployee = async (employee) => {
  try {
    const response = await api.post("/", employee);
    return response.data;
  } catch (error) {
    console.error("Error adding employee:", error);
    throw error;
  }
};

// Delete employee by ID
const deleteEmployeeById = async (id) => {
  try {
    const response = await api.delete(`/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting employee with id ${id}:`, error);
    throw error;
  }
};

export {
  getAllEmployees,
  getEmployeeById,
  addEmployee,
  deleteEmployeeById
};
