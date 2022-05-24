import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import {
  editUserProfileService,
  followUserService,
  getAllUsersService,
  getPostByUsernameService,
  getSingleUserService,
  unfollowUserService,
} from "../../services";

const initialState = {
  allUsers: [],
  singleUser: {},
  userPosts: [],
  userStatus: "idle",
  userError: null,
  isPostModalOpen: false,
  editUserData: {},
  usersListModal: {
    open: false,
    title: "",
    data: [],
  },
};

export const getAllUsers = createAsyncThunk(
  "users/getAllUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getAllUsersService();
      return response.data.users;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getSingleUser = createAsyncThunk(
  "users/getSingleUser",
  async ({ username }, { rejectWithValue }) => {
    try {
      const response = await getSingleUserService(username);
      return response.data.user;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

export const getUserPostsByUsername = createAsyncThunk(
  "users/getUserPostsByUsername",
  async ({ username }, { rejectWithValue }) => {
    try {
      const response = await getPostByUsernameService(username);
      return response.data.posts;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const editUserProfile = createAsyncThunk(
  "users/editUserProfile",
  async ({ userData, token }, { rejectWithValue }) => {
    try {
      const response = await editUserProfileService(userData, token);
      return response.data.user;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const followUser = createAsyncThunk(
  "users/followUser",
  async ({ followUserId, token }, { rejectWithValue }) => {
    try {
      const response = await followUserService(followUserId, token);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const unfollowUser = createAsyncThunk(
  "users/unfollowUser",
  async ({ followUserId, token }, { rejectWithValue }) => {
    try {
      const response = await unfollowUserService(followUserId, token);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    resetUserProfile: state => {
      state.singleUser = {};
      state.userPosts = [];
    },
    setUsersListModal: (state, { payload }) => {
      state.usersListModal = payload;
    },
  },
  extraReducers: {
    [getAllUsers.pending]: state => {
      state.userStatus = "loading";
    },
    [getAllUsers.fulfilled]: (state, { payload }) => {
      state.allUsers = payload;
      state.userStatus = "success";
    },
    [getAllUsers.rejected]: (state, { payload }) => {
      state.userError = payload.errors;
      state.userStatus = "failed";
    },
    [getSingleUser.pending]: state => {
      state.singleUserStatus = "loading";
    },
    [getSingleUser.fulfilled]: (state, { payload }) => {
      state.singleUser = payload;
      state.singleUserStatus = "success";
    },
    [getSingleUser.rejected]: (state, { payload }) => {
      state.userError = payload.errors;
      state.singleUserStatus = "failed";
    },
    [getUserPostsByUsername.pending]: state => {
      state.userPostsStatus = "loading";
    },
    [getUserPostsByUsername.fulfilled]: (state, { payload }) => {
      state.userPosts = payload;
      state.userPostsStatus = "success";
    },
    [getUserPostsByUsername.rejected]: (state, { payload }) => {
      state.userPostsError = payload.errors;
      state.userPostsStatus = "failed";
    },
    [editUserProfile.fulfilled]: (state, { payload }) => {
      state.allUsers.map(user =>
        user.username === payload.username ? payload : user
      );
      toast.success("Profile edited successfully!");
    },
    [editUserProfile.rejected]: (state, { payload }) => {
      state.userError = payload.errors;
      toast.error("Some error occured. Try Again.");
    },
    [followUser.fulfilled]: (state, { payload }) => {
      const { user, followUser } = payload;
      state.allUsers = state.allUsers.map(currUser =>
        currUser.username === user.username ? user : currUser
      );
      state.allUsers = state.allUsers.map(currUser =>
        currUser.username === followUser.username ? followUser : currUser
      );
      state.singleUser = payload.followUser;
      toast.success("You followed!");
    },
    [followUser.rejected]: (state, { payload }) => {
      state.userError = payload.errors;
      toast.error("Some error occured. Try Again.");
    },
    [unfollowUser.fulfilled]: (state, { payload }) => {
      const { user, followUser } = payload;
      state.allUsers = state.allUsers.map(currUser =>
        currUser.username === user.username ? user : currUser
      );
      state.allUsers = state.allUsers.map(currUser =>
        currUser.username === followUser.username ? followUser : currUser
      );
      state.singleUser = payload.followUser;
      toast.success("You unfollowed!");
    },
    [unfollowUser.rejected]: (state, { payload }) => {
      state.userError = payload.errors;
      toast.error("Some error occured. Try Again.");
    },
  },
});

export const { resetUserProfile, setUsersListModal } = userSlice.actions;
export default userSlice.reducer;
