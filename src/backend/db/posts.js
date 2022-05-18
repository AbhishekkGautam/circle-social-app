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
      likeCount: 4,
      likedBy: [],
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
        username: "abhishekgautam",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "adminkumar",
        text: "Wow!",
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
      likeCount: 4,
      likedBy: [],
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
        username: "abhishekgautam",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "adminkumar",
        text: "Wow!",
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
      likeCount: 1,
      likedBy: [],
      dislikedBy: [],
    },
    firstName: "Admin",
    lastName: "Kumar",
    username: "adminkumar",
    avatar: "https://joeschmoe.io/api/v1/jai",
    comments: [
      {
        _id: uuid(),
        username: "adarshbalika",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "abhishekgautam",
        text: "Wow!",
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
