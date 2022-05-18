import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import {
  createNewPostService,
  deletePostService,
  editPostService,
  getAllPostsService,
  getSinglePostService,
} from "../../services";

const initialState = {
  allPosts: [],
  singlePost: {},
  userPosts: [],
  postStatus: "idle",
  postError: null,
  isPostModalOpen: false,
  editPostData: {},
};

export const getAllPosts = createAsyncThunk(
  "posts/getAllPosts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getAllPostsService();
      return response.data.posts;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getSinglePost = createAsyncThunk(
  "posts/getSinglePost",
  async (postId, { rejectWithValue }) => {
    try {
      const response = await getSinglePostService(postId);
      return response.data.post;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const createNewPost = createAsyncThunk(
  "posts/createNewPost",
  async ({ postData, token }, { rejectWithValue }) => {
    try {
      const response = await createNewPostService(postData, token);
      return response.data.posts;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const editPost = createAsyncThunk(
  "posts/editPost",
  async ({ postData, token }, { rejectWithValue }) => {
    try {
      const response = await editPostService(postData, token);
      return response.data.posts;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async ({ postId, token }, { rejectWithValue }) => {
    try {
      const response = await deletePostService(postId, token);
      return response.data.posts;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPostModalOpen: (state, { payload }) => {
      state.isPostModalOpen = payload.isOpen;
      state.editPostData = payload.editPostData;
    },
  },
  extraReducers: {
    [getAllPosts.pending]: state => {
      state.postStatus = "loading";
    },
    [getAllPosts.fulfilled]: (state, { payload }) => {
      state.postStatus = "success";
      state.allPosts = payload;
    },
    [getAllPosts.rejected]: (state, { payload }) => {
      state.postStatus = "failed";
      state.postError = payload.errors;
    },
    [getSinglePost.pending]: state => {
      state.singlePostStatus = "loading";
    },
    [getSinglePost.fulfilled]: (state, { payload }) => {
      state.singlePostStatus = "success";
      state.singlePost = payload;
    },
    [getSinglePost.rejected]: (state, { payload }) => {
      state.singlePostStatus = "failed";
      state.postError = payload.errors;
    },
    [createNewPost.fulfilled]: (state, { payload }) => {
      state.allPosts = payload;
      toast.success("Post created successfully!");
    },
    [createNewPost.rejected]: (state, { payload }) => {
      state.postError = payload;
      toast.error("Some error occured. Try Again.");
    },
    [editPost.fulfilled]: (state, { payload }) => {
      state.allPosts = payload;
      toast.success("Post edited successfully!");
    },
    [editPost.rejected]: (state, { payload }) => {
      state.postError = payload;
      toast.error("Some error occured. Try Again.");
    },
    [deletePost.fulfilled]: (state, { payload }) => {
      state.allPosts = payload;
      toast.success("Post deleted successfully!");
    },
    [deletePost.rejected]: (state, { payload }) => {
      state.postError = payload;
      toast.error("Some error occured. Try Again.");
    },
  },
});

export const { setPostModalOpen } = postSlice.actions;
export default postSlice.reducer;
