import axios from "axios";

// GET ALL USERS
export const getAllUsersService = () => axios.get("/api/users");

// GET A USER
export const getSingleUserService = username =>
  axios.get(`/api/users/${username}`);

// EDIT USER DATA
export const editUserProfileService = (userData, token) =>
  axios.post(
    `/api/users/edit`,
    { userData },
    {
      headers: {
        authorization: token,
      },
    }
  );

// FOLLOW USER
export const followUserService = (followUserId, token) =>
  axios.post(
    `/api/users/follow/${followUserId}`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );

// UNFOLLOW USER
export const unfollowUserService = (followUserId, token) =>
  axios.post(
    `/api/users/unfollow/${followUserId}`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );
