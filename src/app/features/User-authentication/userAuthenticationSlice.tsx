import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loginUser } from "./userAuthenticationService";
import { InitialState, UserSession } from "./userModal";

const initialState: InitialState = {
  loading: false,
  error: null,
  userSession: null,
  newUserAddedResponse: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        loginUser.fulfilled,
        (state, action: PayloadAction<UserSession>) => {
          state.loading = false;
          state.userSession = action.payload;
        }
      )
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
