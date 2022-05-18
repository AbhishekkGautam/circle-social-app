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
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate.",
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
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati",
    likes: {
      likeCount: 1,
      likedBy: [],
      dislikedBy: [],
    },
    firstName: "Admin",
    lastName: "Kumar",
    username: "adminkumar",
    avatar: "https://joeschmoe.io/api/v1/joe",
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
