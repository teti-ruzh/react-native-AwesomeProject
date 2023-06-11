import { createSlice } from "@reduxjs/toolkit";
import { register, login, logout } from "./authOperations";

const initialState = {
  userId: "",
  name: "",
  email: "",
  photo: "",
  isLogIn: false,
  isLoading: false,
  error: "",
};

const onPending = (state) => {
  state.isLoading = true;
};
const onFulfilled = (state, { payload }) => {
  const { userId, name, email, photo } = payload;
  state.userId = userId;
  state.name = name;
  state.email = email;
  state.photo = photo;
  state.isLogIn = true;
  state.isLoading = false;
  state.error = "";
};
const onRejected = (state, { payload }) => {
  state.error = payload;
  state.isLoading = false;
};
const onLogoutFulfilled = (state) => {
  state.userId = "";
  state.name = "";
  state.email = "";
  state.photo = "";
  state.isLogIn = false;
  state.isLoading = false;
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    removeError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, onPending)
      .addCase(register.fulfilled, onFulfilled)
      .addCase(register.rejected, onRejected)
      .addCase(login.pending, onPending)
      .addCase(login.fulfilled, onFulfilled)
      .addCase(login.rejected, onRejected)
      .addCase(logout.fulfilled, onLogoutFulfilled);
  },
});
export const { removeError } = authSlice.actions;
export const authReducer = authSlice.reducer;
