import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { loginService, signupService } from "../../services";

const initialState = {
  token: JSON.parse(localStorage.getItem("circle-token")) || null,
  userInfo: JSON.parse(localStorage.getItem("circle-user")) || null,
  isLoggedIn: false,
  authStatus: "idle",
  authError: null,
};

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const res = await loginService(username, password);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const signupUser = createAsyncThunk(
  "auth/signupUser",
  async (
    { firstName, lastName, email, password, username },
    { rejectWithValue }
  ) => {
    try {
      const res = await signupService(
        firstName,
        lastName,
        email,
        password,
        username
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: state => {
      state.token = "";
      state.userInfo = null;
      state.isLoggedIn = false;
    },
  },
  extraReducers: {
    [loginUser.pending]: state => {
      state.authStatus = "loading";
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.token = payload.encodedToken;
      state.userInfo = payload.foundUser;
      state.isLoggedIn = true;
      localStorage.setItem(
        "circle-token",
        JSON.stringify(payload.encodedToken)
      );
      localStorage.setItem("circle-user", JSON.stringify(payload.foundUser));
      state.authStatus = "success";
      toast.success(`Hello, ${payload.foundUser.firstName}. Welcome back!`, {
        icon: "👋",
      });
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.authError = payload.errors;
      state.authStatus = "failed";
      toast.error("Some error occured. Try Again.");
    },
    [signupUser.pending]: state => {
      state.authStatus = "loading";
    },
    [signupUser.fulfilled]: (state, { payload }) => {
      state.token = payload.encodedToken;
      state.userInfo = payload.createdUser;
      state.isLoggedIn = true;
      localStorage.setItem(
        "circle-token",
        JSON.stringify(payload.encodedToken)
      );
      localStorage.setItem("circle-user", JSON.stringify(state.user));
      state.authStatus = "success";
      toast.success("Account created successfully!");
    },
    [signupUser.rejected]: (state, { payload }) => {
      state.authError = payload.errors;
      state.authStatus = "failed";
      toast.error("Some error occured. Try Again.");
    },
  },
});

export const { logOut } = authSlice.actions;
export default authSlice.reducer;
