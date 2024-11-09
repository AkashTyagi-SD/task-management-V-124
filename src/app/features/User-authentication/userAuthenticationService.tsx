import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/axios/axiosInstance";
import { UserSession, UserLoginPayload } from "./userModal";

export const loginUser = createAsyncThunk<UserSession, UserLoginPayload>(
  "user/login",
  async (payload) => {
    const response = await axiosInstance.post("user/login/", payload);
    const data = await response.data;
    return data;
  }
);
