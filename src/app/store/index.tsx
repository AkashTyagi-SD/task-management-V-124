import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import employeeReducer from "../features/employee-management/employeeManagementSlice";
import userReducer from "../features/User-authentication/userAuthenticationSlice";

export const store = configureStore({
  reducer: {
    employee: employeeReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
  devTools: process.env.NODE_ENV !== "production",
});
// Types for the RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
