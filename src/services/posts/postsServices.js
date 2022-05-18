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
