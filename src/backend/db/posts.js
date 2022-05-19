import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "the introverted urge to postpone a meeting using any excuse possible",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Abhishek",
          lastName: "Gautam",
          username: "abhishekgautam",
          avatar: "https://joeschmoe.io/api/v1/james",
        },
        {
          _id: uuid(),
          firstName: "Admin",
          lastName: "Kumar",
          username: "adminkumar",
          avatar: "https://joeschmoe.io/api/v1/jai",
        },
        {
          _id: uuid(),
          firstName: "Adarsh",
          lastName: "Balika",
          username: "adarshbalika",
          avatar: "https://joeschmoe.io/api/v1/jeane",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Adarsh",
    lastName: "Balika",
    avatar: "https://joeschmoe.io/api/v1/jeane",
    username: "adarshbalika",
    createdAt: new Date("May 14 2022 10:02:30"),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        firstName: "Abhishek",
        lastName: "Gautam",
        username: "abhishekgautam",
        avatar: "https://joeschmoe.io/api/v1/james",
        text: "Interesting",
        createdAt: new Date("May 14 2022 11:02:30"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Admin",
        lastName: "Kumar",
        username: "adminkumar",
        avatar: "https://joeschmoe.io/api/v1/jai",
        text: "Wow!",
        createdAt: new Date("May 15 2022 08:02:30"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "The power of networking is good, but learning and building in public is even better.",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Abhishek",
          lastName: "Gautam",
          username: "abhishekgautam",
          avatar: "https://joeschmoe.io/api/v1/james",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Adarsh",
    lastName: "Balika",
    avatar: "https://joeschmoe.io/api/v1/jeane",
    username: "adarshbalika",
    createdAt: new Date("May 15 2022 10:02:30"),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        firstName: "Abhishek",
        lastName: "Gautam",
        username: "abhishekgautam",
        avatar: "https://joeschmoe.io/api/v1/james",
        text: "Interesting",
        createdAt: new Date("May 15 2022 11:02:30"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Admin",
        lastName: "Kumar",
        username: "adminkumar",
        avatar: "https://joeschmoe.io/api/v1/jai",
        text: "Wow!",
        createdAt: new Date("May 15 2022 14:02:30"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "Guys I finally dropped out. Wish me luck for my future, never been this happy in my life 😭",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Abhishek",
          lastName: "Gautam",
          username: "abhishekgautam",
          avatar: "https://joeschmoe.io/api/v1/james",
        },
        {
          _id: uuid(),
          firstName: "Adarsh",
          lastName: "Balika",
          username: "adarshbalika",
          avatar: "https://joeschmoe.io/api/v1/jeane",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Admin",
    lastName: "Kumar",
    username: "adminkumar",
    avatar: "https://joeschmoe.io/api/v1/jai",
    comments: [
      {
        _id: uuid(),
        firstName: "Adarsh",
        lastName: "Balika",
        username: "adarshbalika",
        avatar: "https://joeschmoe.io/api/v1/jeane",
        createdAt: new Date("May 16 2022 18:02:30"),
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Abhishek",
        lastName: "Gautam",
        username: "abhishekgautam",
        avatar: "https://joeschmoe.io/api/v1/james",
        text: "Wow!",
        createdAt: new Date("May 17 2022 11:02:30"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: new Date("May 16 2022 16:02:30"),
    updatedAt: formatDate(),
  },
];
