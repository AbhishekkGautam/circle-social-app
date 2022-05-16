import axios from "axios";

export const signupService = async (
  firstName,
  lastName,
  email,
  password,
  username
) => {
  return await axios.post("/api/auth/signup", {
    firstName,
    lastName,
    email,
    password,
    username,
  });
};
