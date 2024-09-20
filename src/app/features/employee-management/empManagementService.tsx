import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/axios/axiosInstance";

export const fetchEmployees = createAsyncThunk(
  "employee/getAllemployees",
  async () => {
    const response = await axiosInstance.get("employee/getAllemployees/");
    const data = await response.data;
    return data;
  }
);

export const createEmployee = createAsyncThunk(
  "employee/CreateNewEmployee",
  async (payload) => {
    const response = await axiosInstance.post(
      "employee/create-employee/",
      payload
    );
    const data = await response.data;
    return data;
  }
);
