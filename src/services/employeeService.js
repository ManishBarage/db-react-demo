import axios from 'axios';

const api = axios.create({
  baseURL: "http://localhost:8080/api/v1/employees",
  auth: {
    username: 'manish',
    password: 'manish@123'
  }
});

const getAllEmployees = async () => {
  try {
    const response = await api.get("/");
    return response.data;
  } catch (error) {
    console.error("Error fetching employees:", error);
    throw error;
  }
};

const getEmployeeById = async (id) => {
  try {
    const response = await api.get(`/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching employee with id ${id}:`, error);
    throw error;
  }
};

const addEmployee = async (employee) => {
  try {
    const response = await api.post("/", employee);
    return response.data;
  } catch (error) {
    console.error("Error adding employee:", error);
    throw error;
  }
};

export { getAllEmployees, getEmployeeById, addEmployee };
