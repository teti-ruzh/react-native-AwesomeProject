import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../config";

export const register = createAsyncThunk(
  "auth/register",
  async ({ login, email, password }, thunkAPI) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await updateProfile(user, {
        displayName: login,
        photoURL: "",
      });
      return {
        userId: user.uid,
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      const user = res.user;
      return {
        userId: user.uid,
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await signOut(auth);
    return;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refresh = createAsyncThunk(
  "auth/refresh",
  async (_, { dispatch }) => {
    try {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          console.log("User is logged in:", user.uid);
          dispatch(
            setUser({
              userId: user.uid,
              name: user.displayName,
              email: user.email,
              photo: user.photoURL,
              isLoggedIn: true,
            })
          );
        } else {
          console.log("User has logged our or have not logged in yet");
          dispatch(
            setUser({
              userId: "",
              name: "",
              email: "",
              photo: "",
              isLoggedIn: false,
            })
          );
        }
      });
      return () => {
        unsubscribe();
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
