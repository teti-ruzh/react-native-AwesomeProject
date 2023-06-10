import { createSlice } from "@reduxjs/toolkit";
import { register, login, logout, refresh } from "./authOperations";

const initialState = {
  userId: "",
  name: "",
  email: "",
  photo: "",
  isLogIn: false,
  isLoading: false,
  isRefresh: false,
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

const onUserFulfilledRefreshing = (state, { payload }) => {
  const { userId, name, email, photo, isLogIn } = payload;
  state.userId = userId;
  state.name = name;
  state.email = email;
  state.photo = photo;
  state.isLogIn = isLogIn;
  state.error = "";
  state.isRefresh = false;
};
const onRejectedRefreshing = (state) => {
  state.isRefresh = false;
};
const onPendingRefreshing = (state) => {
  state.isRefresh = true;
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
      .addCase(logout.fulfilled, onLogoutFulfilled)
      .addCase(refresh.pending, onPendingRefreshing)
      .addCase(refresh.fulfilled, onUserFulfilledRefreshing)
      .addCase(refresh.rejected, onRejectedRefreshing)
      .addCase(register.pending, onPending)
      .addCase(login.pending, onPending)
      .addCase(register.fulfilled, onFulfilled)
      .addCase(login.fulfilled, onFulfilled)
      .addCase(register.rejected, onRejected)
      .addCase(login.rejected, onRejected);
  },
});
export const { removeError } = authSlice.actions;
export const authReducer = authSlice.reducer;
