import { createSlice } from "@reduxjs/toolkit";
import { fetchEmployees, createEmployee } from "./empManagementService";

type InitialState = {
  employeeList: Array<any>;
  loading: boolean;
  error: string | undefined | null;
  employeeAddResponse: { status: boolean; message: string; data: any } | null;
};

const initialState: InitialState = {
  employeeList: [],
  loading: false,
  error: null,
  employeeAddResponse: null,
};

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //Fetch Employee
    builder
      .addCase(fetchEmployees.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.employeeAddResponse = null;
      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.loading = false;
        state.employeeList = action.payload;
      })
      .addCase(fetchEmployees.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    //Add Employee
    builder
      .addCase(createEmployee.pending, (state) => {
        state.loading = true;
      })
      .addCase(createEmployee.fulfilled, (state, action) => {
        state.loading = false;
        state.employeeAddResponse = action.payload;
      })
      .addCase(createEmployee.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default employeeSlice.reducer;
