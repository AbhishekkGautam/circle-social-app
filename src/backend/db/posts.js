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
      likeCount: 1,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Admin",
          lastName: "Kumar",
          username: "adminkumar",
          avatar: "https://joeschmoe.io/api/v1/jai",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Pritam",
    lastName: "Kumar",
    avatar: "https://joeschmoe.io/api/v1/jordan",
    username: "pritamkr_",
    createdAt: "May 14 2022",
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
    firstName: "Himadri",
    lastName: "Shah",
    avatar: "https://joeschmoe.io/api/v1/jeane",
    username: "himadri2110",
    createdAt: "May 27 2022 09:30:20",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        firstName: "Abhishek",
        lastName: "Gautam",
        username: "abhishekgautam",
        avatar: "https://joeschmoe.io/api/v1/james",
        text: "Interesting",
        createdAt: new Date("May 27 2022 11:02:30"),
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
        createdAt: new Date("May 27 2022 14:02:30"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content: "It's not a bug. It's an undocumented feature!",
    likes: {
      likeCount: 5,
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
          firstName: "Himadri",
          lastName: "Shah",
          username: "himadri2110",
          avatar: "https://joeschmoe.io/api/v1/jeane",
        },
        {
          _id: uuid(),
          firstName: "Mahesh",
          lastName: "Deshmukh",
          username: "msdeshmukh09",
          avatar: "https://joeschmoe.io/api/v1/josh",
        },
        {
          _id: uuid(),
          firstName: "Nikhil",
          lastName: "Belide",
          username: "nikhilbelide",
          avatar: "https://joeschmoe.io/api/v1/jean",
        },
        {
          _id: uuid(),
          firstName: "Pritam",
          lastName: "Kumar",
          username: "pritamkr_",
          avatar: "https://joeschmoe.io/api/v1/jordan",
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
        firstName: "Pritam",
        lastName: "Kumar",
        username: "pritamkr_",
        avatar: "https://joeschmoe.io/api/v1/jordan",
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
    createdAt: "May 16 2022 11:02:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Tesla AI Day #2 on Aug 19. So many cool updates!",
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
          firstName: "Himadri",
          lastName: "Shah",
          username: "himadri2110",
          avatar: "https://joeschmoe.io/api/v1/jeane",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Elon",
    lastName: "Musk",
    username: "elonmusk",
    avatar: "https://joeschmoe.io/api/v1/jana",
    comments: [
      {
        _id: uuid(),
        firstName: "Abhishek",
        lastName: "Gautam",
        username: "abhishekgautam",
        avatar: "https://joeschmoe.io/api/v1/james",
        text: "Wow!",
        createdAt: new Date("May 21 2022 11:02:30"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: "May 20 2022 16:02:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Making life multiplanetary expands the scope & scale of consciousness. It also enables us to backup the biosphere, protecting all life as we know it from a calamity on Earth. Humanity is life’s steward, as no other species can transport life to Mars. We can’t let them down.",
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
          firstName: "Himadri",
          lastName: "Shah",
          username: "himadri2110",
          avatar: "https://joeschmoe.io/api/v1/jeane",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Elon",
    lastName: "Musk",
    username: "elonmusk",
    avatar: "https://joeschmoe.io/api/v1/jana",
    comments: [
      {
        _id: uuid(),
        firstName: "Abhishek",
        lastName: "Gautam",
        username: "abhishekgautam",
        avatar: "https://joeschmoe.io/api/v1/james",
        text: "Wow!",
        createdAt: new Date("May 25 2022 11:02:30"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: "May 25 2022 16:02:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "If there's one thing you learn by working on a lot of different Web sites, it's that almost any design idea-no matter how appallingly bad-can be made usable in the right circumstances, with enough effort..",
    likes: {
      likeCount: 5,
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
          firstName: "Himadri",
          lastName: "Shah",
          username: "himadri2110",
          avatar: "https://joeschmoe.io/api/v1/jeane",
        },
        {
          _id: uuid(),
          firstName: "Mahesh",
          lastName: "Deshmukh",
          username: "msdeshmukh09",
          avatar: "https://joeschmoe.io/api/v1/josh",
        },
        {
          _id: uuid(),
          firstName: "Nikhil",
          lastName: "Belide",
          username: "nikhilbelide",
          avatar: "https://joeschmoe.io/api/v1/jean",
        },
        {
          _id: uuid(),
          firstName: "Pritam",
          lastName: "Kumar",
          username: "pritamkr_",
          avatar: "https://joeschmoe.io/api/v1/jordan",
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
        firstName: "Pritam",
        lastName: "Kumar",
        username: "pritamkr_",
        avatar: "https://joeschmoe.io/api/v1/jordan",
        createdAt: new Date("May 27 2022 18:02:30"),
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
        createdAt: new Date("May 27 2022 11:02:30"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: "May 27 2022 11:02:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "A user interface is like a joke. If you have to explain it, it's not that good.",
    likes: {
      likeCount: 4,
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
          firstName: "Mahesh",
          lastName: "Deshmukh",
          username: "msdeshmukh09",
          avatar: "https://joeschmoe.io/api/v1/josh",
        },
        {
          _id: uuid(),
          firstName: "Nikhil",
          lastName: "Belide",
          username: "nikhilbelide",
          avatar: "https://joeschmoe.io/api/v1/jean",
        },
        {
          _id: uuid(),
          firstName: "Pritam",
          lastName: "Kumar",
          username: "pritamkr_",
          avatar: "https://joeschmoe.io/api/v1/jordan",
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
        firstName: "Pritam",
        lastName: "Kumar",
        username: "pritamkr_",
        avatar: "https://joeschmoe.io/api/v1/jordan",
        createdAt: new Date("May 28 2022 18:02:30"),
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
        createdAt: new Date("May 28 2022 11:02:30"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: "May 28 2022 11:02:30",
    updatedAt: formatDate(),
  },
];
