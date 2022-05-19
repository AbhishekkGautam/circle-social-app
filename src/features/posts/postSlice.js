import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import {
  createNewPostService,
  deletePostService,
  editPostService,
  getAllPostsService,
  getSinglePostService,
} from "../../services";
import {
  addCommentService,
  bookmarkPostService,
  deleteBookmarkPostService,
  deleteCommentService,
  dislikePostService,
  downvoteCommentService,
  getAllBookmarkPostService,
  likePostService,
  upvoteCommentService,
} from "../../services/posts/postsServices";

const initialState = {
  allPosts: [],
  singlePost: {},
  userPosts: [],
  bookmarkPosts: [],
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

export const likePost = createAsyncThunk(
  "posts/likePost",
  async ({ postId, token }, { rejectWithValue }) => {
    try {
      const response = await likePostService(postId, token);
      return response.data.posts;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const dislikePost = createAsyncThunk(
  "posts/dislikePost",
  async ({ postId, token }, { rejectWithValue }) => {
    try {
      const response = await dislikePostService(postId, token);
      return response.data.posts;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const bookmarkPost = createAsyncThunk(
  "posts/bookmarkPost",
  async ({ postId, token }, { rejectWithValue }) => {
    try {
      const response = await bookmarkPostService(postId, token);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const removeBookmarkPost = createAsyncThunk(
  "posts/removeBookmarkPost",
  async ({ postId, token }, { rejectWithValue }) => {
    try {
      const response = await deleteBookmarkPostService(postId, token);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getAllBookmarkPosts = createAsyncThunk(
  "posts/getAllBookmarkPosts",
  async (token, { rejectWithValue }) => {
    try {
      const response = await getAllBookmarkPostService(token);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const addComment = createAsyncThunk(
  "posts/addComment",
  async ({ postId, commentData, token }, { rejectWithValue }) => {
    try {
      const response = await addCommentService(postId, commentData, token);
      return response.data.posts;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteComment = createAsyncThunk(
  "posts/deleteComment",
  async ({ postId, commentId, token }, { rejectWithValue }) => {
    try {
      const response = await deleteCommentService(postId, commentId, token);
      return response.data.posts;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const upvoteComment = createAsyncThunk(
  "posts/upvoteComment",
  async ({ postId, commentId, token }, { rejectWithValue }) => {
    try {
      const response = await upvoteCommentService(postId, commentId, token);
      return response.data.posts;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const downvoteComment = createAsyncThunk(
  "posts/downvoteComment",
  async ({ postId, commentId, token }, { rejectWithValue }) => {
    try {
      const response = await downvoteCommentService(postId, commentId, token);
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
      console.log(payload);
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
    [likePost.fulfilled]: (state, { payload }) => {
      state.allPosts = payload;
      toast.success("You liked the post");
    },
    [likePost.rejected]: (state, { payload }) => {
      state.postError = payload;
      toast.error("Some error occured. Try Again.");
    },
    [dislikePost.fulfilled]: (state, { payload }) => {
      state.allPosts = payload;
      toast.success("You disliked the post");
    },
    [dislikePost.rejected]: (state, { payload }) => {
      state.postError = payload;
      toast.error("Some error occured. Try Again.");
    },
    [bookmarkPost.fulfilled]: (state, { payload }) => {
      state.bookmarkPosts = payload.bookmarks;
      toast.success("Post bookmarked successfully.");
    },
    [bookmarkPost.rejected]: (state, { payload }) => {
      state.postError = payload;
      toast.error("Some error occured. Try Again.");
    },
    [removeBookmarkPost.fulfilled]: (state, { payload }) => {
      state.bookmarkPosts = payload.bookmarks;
      toast.success("Post removed from bookmark.");
    },
    [removeBookmarkPost.rejected]: (state, { payload }) => {
      state.postError = payload;
      toast.error("Some error occured. Try Again.");
    },
    [getAllBookmarkPosts.fulfilled]: (state, { payload }) => {
      state.bookmarkPosts = payload.bookmarks;
    },
    [getAllBookmarkPosts.rejected]: (state, { payload }) => {
      state.postError = payload;
    },
    [addComment.fulfilled]: (state, { payload }) => {
      state.allPosts = payload;
      toast.success("You commented!");
    },
    [addComment.rejected]: (state, { payload }) => {
      state.postError = payload.errors;
      toast.error("Some error occured. Try Again.");
    },
    [deleteComment.fulfilled]: (state, { payload }) => {
      state.allPosts = payload;
      toast.success("comment deleted!");
    },
    [deleteComment.rejected]: (state, { payload }) => {
      state.postError = payload.errors;
      toast.error("Some error occured. Try Again.");
    },
    [upvoteComment.fulfilled]: (state, { payload }) => {
      state.allPosts = payload;
      toast.success("You upvoted!");
    },
    [upvoteComment.rejected]: (state, { payload }) => {
      state.postError = payload.errors;
      toast.error("Some error occured. Try Again.");
    },
    [downvoteComment.fulfilled]: (state, { payload }) => {
      state.allPosts = payload;
      toast.success("You downvoted!");
    },
    [downvoteComment.rejected]: (state, { payload }) => {
      state.postError = payload.errors;
      toast.error("Some error occured. Try Again.");
    },
  },
});

export const { setPostModalOpen } = postSlice.actions;
export default postSlice.reducer;
