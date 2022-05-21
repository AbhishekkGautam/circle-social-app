import React from "react";
import ReactTimeAgo from "react-time-ago";
import { useDispatch, useSelector } from "react-redux";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  TrashIcon,
} from "@heroicons/react/outline";
import { convertDateIntoInteger } from "../../utils";
import {
  deleteComment,
  downvoteComment,
  upvoteComment,
} from "../../features/posts/postSlice";
import { Avatar } from "../Avatar/Avatar";
import { Link } from "react-router-dom";

export const Comment = ({ commentData, postId }) => {
  const { _id, username, firstName, lastName, avatar, votes, text, createdAt } =
    commentData;
  const dispatch = useDispatch();
  const { token, userInfo } = useSelector(state => state.auth);

  const commentTime = convertDateIntoInteger(createdAt);

  const alreadyUpvoted = votes.upvotedBy?.find(
    user => user.username === userInfo.username
  );
  const alreadyDownvoted = votes.downvotedBy?.find(
    user => user.username === userInfo.username
  );

  return (
    <div className="p-3 flex border-b border-gray-700">
      <div className="w-12 min-h-fit">
        <Link to={`/profile/${username}`}>
          <Avatar
            avatarImg={avatar}
            firstname={firstName}
            lastname={lastName}
          />
        </Link>
      </div>
      <div className="flex flex-col space-y-2 w-full ml-4">
        <div className="flex justify-between">
          <div className="text-[#6e767d]">
            <div className="inline-block group">
              <Link to={`/profile/${username}`}>
                <h4 className="inline-block font-bold text-[15px] sm:text-base text-[#f7f9f9] hover:underline">
                  {firstName} {lastName}
                </h4>
              </Link>
              <span className="text-sm sm:text-[15px] ml-1.5">@{username}</span>
            </div>{" "}
            ·{" "}
            <span className="hover:underline text-sm sm:text-[15px]">
              <ReactTimeAgo
                date={commentTime}
                locale="en-US"
                timeStyle="twitter"
              />
            </span>
            <p className="text-[#f7f9f9] text-[15px] sm:text-base mt-0.5">
              {text}
            </p>
          </div>
          {userInfo?.username === username && (
            <div className="icon group">
              <TrashIcon
                className="h-5 group-hover:text-[#1d9bf0] text-[#6e767d]"
                onClick={() => {
                  dispatch(deleteComment({ postId, commentId: _id, token }));
                }}
              />
            </div>
          )}
        </div>
        <div className="text-[#6e767d] grid grid-cols-3 w-4/5">
          <div className="flex items-center group max-w-fit">
            <div className="icon group-hover:bg-green-500 group-hover:bg-opacity-10">
              <ArrowUpIcon
                className={`h-4 group-hover:text-green-500 ${
                  alreadyUpvoted && "text-green-500"
                }`}
                onClick={() =>
                  dispatch(upvoteComment({ postId, commentId: _id, token }))
                }
              />
            </div>

            <span
              className={`group-hover:text-green-500 text-sm ${
                alreadyUpvoted && "text-green-500"
              } `}
            >
              {votes?.upvotedBy.length}
            </span>
          </div>

          <div className="flex items-center group max-w-fit">
            <div className="icon group-hover:bg-pink-600 group-hover:bg-opacity-10">
              <ArrowDownIcon
                className={`h-4 group-hover:text-pink-600 ${
                  alreadyDownvoted && "text-pink-600"
                } `}
                onClick={() =>
                  dispatch(downvoteComment({ postId, commentId: _id, token }))
                }
              />
            </div>

            <span
              className={`group-hover:text-pink-600 text-sm ${
                alreadyDownvoted && "text-pink-600"
              } }`}
            >
              {votes?.downvotedBy.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
