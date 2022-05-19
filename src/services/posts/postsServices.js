import axios from "axios";

// GET ALL POSTS
export const getAllPostsService = () => axios.get("/api/posts");

// GET SINGLE POST
export const getSinglePostService = postId => axios.get(`/api/posts/${postId}`);

// GET POST BY USERNAME
export const getPostByUsernameService = username =>
  axios.get(`/api/posts/user/${username}`);

// CREATE A NEW POST
export const createNewPostService = (postData, token) =>
  axios.post(
    "/api/posts",
    { postData },
    {
      headers: {
        authorization: token,
      },
    }
  );

// DELETE A POST
export const deletePostService = (postId, token) =>
  axios.delete(`/api/posts/${postId}`, {
    headers: {
      authorization: token,
    },
  });

// EDIT A POST
export const editPostService = (postData, token) =>
  axios.post(
    `/api/posts/edit/${postData._id}`,
    { postData },
    {
      headers: {
        authorization: token,
      },
    }
  );

// LIKE A POST
export const likePostService = (postId, token) =>
  axios.post(
    `/api/posts/like/${postId}`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );

// DISLIKE A POST
export const dislikePostService = (postId, token) =>
  axios.post(
    `/api/posts/dislike/${postId}`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );

// GET COMMENTS
export const getAllCommentsService = postId =>
  axios.get(`/api/comments/${postId}`);

// ADD COMMENT
export const addCommentService = (postId, commentData, token) =>
  axios.post(
    `/api/comments/add/${postId}`,
    {
      commentData,
    },
    {
      headers: {
        authorization: token,
      },
    }
  );

// DELETE COMMENT
export const deleteCommentService = (postId, commentId, token) =>
  axios.post(
    `/api/comments/delete/${postId}/${commentId}`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );

// UPVOTE A COMMENT
export const upvoteCommentService = (postId, commentId, token) =>
  axios.post(
    `/api/comments/upvote/${postId}/${commentId}`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );

// DOWNVOTE A COMMENT
export const downvoteCommentService = (postId, commentId, token) =>
  axios.post(
    `/api/comments/downvote/${postId}/${commentId}`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );

// ADD POST TO USER BOOKMARKS
export const bookmarkPostService = (postId, token) =>
  axios.post(
    `/api/users/bookmark/${postId}`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );

// DELETE POST FROM USER BOOKMARKS
export const deleteBookmarkPostService = (postId, token) =>
  axios.post(
    `/api/users/remove-bookmark/${postId}`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );

// GET ALL BOOKMARKED POSTS
export const getAllBookmarkPostService = token =>
  axios.get("/api/users/bookmark/", {
    headers: {
      authorization: token,
    },
  });
