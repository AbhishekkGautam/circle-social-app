import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "emoji-mart/css/emoji-mart.css";
import TextareaAutosize from "react-textarea-autosize";
import {
  createNewPost,
  editPost,
  setPostModalOpen,
} from "../../features/posts/postSlice";
import { Avatar } from "../Avatar/Avatar";
import { Link } from "react-router-dom";

export const Input = ({ editPostData }) => {
  const [postContent, setPostContent] = useState({
    content: editPostData?.content || "",
  });

  const { token, userInfo } = useSelector(state => state.auth);
  const { allUsers } = useSelector(state => state.users);
  const dispatch = useDispatch();

  const createPostHandler = () => {
    let postData = postContent;
    dispatch(createNewPost({ postData, token }));
    setPostContent({ content: "" });
    dispatch(setPostModalOpen(false));
  };

  const editPostHandler = () => {
    console.log("handler");
    let postData = { ...editPostData, content: postContent.content };
    dispatch(editPost({ postData, token }));
    setPostContent({ content: "" });
    dispatch(setPostModalOpen(false));
  };

  const currentUser = allUsers?.find(
    user => user.username === userInfo.username
  );

  return (
    <div
      className={`border-b border-gray-700 py-3 px-4 flex space-x-3 overflow-y-scroll scrollbar-hide`}
    >
      <Link to={`/profile/${currentUser?.username}`}>
        <Avatar
          avatarImg={currentUser?.avatar}
          firstname={currentUser?.firstName}
          lastname={currentUser?.lastName}
        />
      </Link>
      <div className="w-full divide-y divide-gray-700">
        <div className="">
          <TextareaAutosize
            value={postContent.content}
            minRows="3"
            onChange={e => setPostContent({ content: e.target.value })}
            placeholder="What's happening?"
            className="bg-transparent h-auto outline-none border-none text-white text-xl placeholder-gray-500 tracking-wide w-full"
          />
        </div>
        <div className="flex items-center justify-end pt-2.5">
          {/* <div className="flex items-center">
            <div className="icon">
              <PhotographIcon className="h-6 text-[#1d9bf0]" />
              <input type="file" className="hidden" />
            </div>
            <div className="icon" onClick={() => setShowEmoji(!showEmoji)}>
              <EmojiHappyIcon className="h-6 text-[#1d9bf0]" />
            </div>
            <div className="icon">
              <CalendarIcon className="h-6 text-[#1d9bf0]" />
            </div>
          </div> */}
          <button
            className="bg-[#1d9bf0] text-white rounded-full px-4 py-1.5 font-bold shadow-md hover:bg-[#1a8cd8] disabled:cursor-default disabled:opacity-50"
            disabled={!postContent.content.trim()}
            onClick={editPostData ? editPostHandler : createPostHandler}
          >
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
};
