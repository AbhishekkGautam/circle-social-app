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
    avatar: "https://joeschmoe.io/api/v1/jeane",
    bio: "",
    portfolio: "",
    followers: [],
    following: [
      {
        _id: uuid(),
        firstName: "Admin",
        lastName: "Kumar",
        username: "adminkumar",
        avatar: "https://joeschmoe.io/api/v1/joe",
      },
      {
        _id: uuid(),
        firstName: "Abhishek",
        lastName: "Gautam",
        username: "abhishekgautam",
        avatar: "https://joeschmoe.io/api/v1/james",
      },
    ],
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
    avatar: "https://joeschmoe.io/api/v1/jai",
    bio: "",
    portfolio: "",
    following: [
      {
        _id: uuid(),
        firstName: "Adarsh",
        lastName: "Balika",
        username: "adarshbalika",
        avatar: "https://joeschmoe.io/api/v1/jeane",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Adarsh",
        lastName: "Balika",
        username: "adarshbalika",
        avatar: "https://joeschmoe.io/api/v1/jeane",
      },
    ],
    bookmarks: [],
  },
  {
    _id: uuid(),
    firstName: "Abhishek",
    lastName: "Gautam",
    username: "abhishekgautam",
    email: "abhishekgautam243@gmail.com",
    password: "abhishekgautam243",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatar: "https://joeschmoe.io/api/v1/james",
    bio: "",
    portfolio: "",
    following: [],
    followers: [
      {
        _id: uuid(),
        firstName: "Adarsh",
        lastName: "Balika",
        username: "adarshbalika",
        avatar: "https://joeschmoe.io/api/v1/jeane",
      },
    ],
    bookmarks: [],
  },
];
