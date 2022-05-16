import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    email: "adarshbalika@gmail.com",
    password: "adarshBalika123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatar: "",
    bio: "",
    portfolio: "",
    following: [],
    followers: [],
    bookmarks: [],
  },
  {
    _id: uuid(),
    firstName: "Admin",
    lastName: "Kumar",
    username: "adminkumar",
    email: "adminkumar@gmail.com",
    password: "admin@123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatar: "",
    bio: "",
    portfolio: "",
    following: [],
    followers: [],
    bookmarks: [],
  },
  {
    _id: uuid(),
    firstName: "Abhishek",
    lastName: "Gautam",
    username: "abhishekgautam243",
    email: "abhishekgautam243@gmail.com",
    password: "abhishekgautam243",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatar: "",
    bio: "",
    portfolio: "",
    following: [],
    followers: [],
    bookmarks: [],
  },
];
