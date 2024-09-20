import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "../features/employee-management/employeeManagementSlice";

export const store = configureStore({
  reducer: {
    employee: employeeReducer,
  },
});
// Types for the RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
