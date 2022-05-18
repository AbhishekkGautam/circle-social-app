import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  BookmarkIcon,
  ChatIcon,
  HeartIcon,
  ShareIcon,
} from "@heroicons/react/outline";
import { CommentModal } from "../Modals/CommentModal";
import { OptionsModal } from "../Modals/OptionsModal";
import ReactTimeAgo from "react-time-ago";
import { convertDateIntoInteger } from "../../utils";

export const Post = ({ postData, singlePostPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { userInfo } = useSelector(state => state.auth);
  const {
    id,
    firstName,
    lastName,
    username,
    avatar,
    content,
    likes,
    comments,
    createdAt,
  } = postData;

  const userCanEditAndDeletePost = postData.username === userInfo.username;
  const postTime = convertDateIntoInteger(createdAt);

  return (
    <>
      <div className="p-3 flex cursor-pointer border-b border-gray-700 hover:bg-[#18222f] transition ease-out">
        <img
          src={avatar}
          alt="avatar"
          className="h-12 w-12 rounded-full mr-4"
        />
        <div className="flex flex-col space-y-2 w-full">
          <div className="flex justify-between">
            <div className="text-[#6e767d]">
              <div className="inline-block group">
                <h4 className="inline-block font-bold text-[15px] sm:text-base text-[#f7f9f9] hover:underline">
                  {firstName} {lastName}
                </h4>
                <span className="text-sm sm:text-[15px] ml-1.5">
                  @{username}
                </span>
              </div>{" "}
              ·{" "}
              <span className="hover:underline text-sm sm:text-[15px]">
                <ReactTimeAgo
                  date={postTime}
                  locale="en-US"
                  timeStyle="twitter"
                />
              </span>
              {singlePostPage ? (
                <p className="text-[#f7f9f9] text-[15px] sm:text-base mt-0.5">
                  {content}
                </p>
              ) : (
                <p
                  className="text-[#f7f9f9] text-[15px] sm:text-base mt-0.5"
                  onClick={() => navigate(`/post/${id}`)}
                >
                  {content}
                </p>
              )}
            </div>
            {userCanEditAndDeletePost && <OptionsModal postData={postData} />}
          </div>
          <div className="text-[#6e767d] flex justify-between sm:w-10/12">
            <div className="flex items-center space-x-1 group">
              <div
                className="icon group-hover:bg-[#1d9bf0] group-hover:bg-opacity-10"
                onClick={() => setIsOpen(true)}
              >
                <ChatIcon className="h-5 group-hover:text-[#1d9bf0]" />
              </div>

              <span className="group-hover:text-[#1d9bf0] text-sm">
                {comments.length}
              </span>
            </div>

            <div className="flex items-center space-x-1 group">
              <div className="icon group-hover:bg-pink-600 group-hover:bg-opacity-10">
                <HeartIcon className="h-5 group-hover:text-pink-600" />
              </div>

              <span
                className={`group-hover:text-pink-600 text-sm
                }`}
              >
                {likes.likeCount}
              </span>
            </div>

            <div className="flex items-center space-x-1 group">
              <div className="icon group-hover:bg-green-500/10">
                <BookmarkIcon className="h-5 group-hover:text-green-500" />
              </div>
            </div>

            <div className="icon group">
              <ShareIcon className="h-5 group-hover:text-[#1d9bf0]" />
            </div>
          </div>
        </div>
      </div>
      {isOpen && <CommentModal isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
};
