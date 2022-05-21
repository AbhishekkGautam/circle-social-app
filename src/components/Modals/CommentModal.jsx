import React, { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import ReactTimeAgo from "react-time-ago";
import { useSelector, useDispatch } from "react-redux";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { XIcon } from "@heroicons/react/outline";
import { addComment } from "../../features/posts/postSlice";
import { useNavigate } from "react-router-dom";
import { convertDateIntoInteger } from "../../utils";

export const CommentModal = ({ isOpen, setIsOpen, postData }) => {
  const [commentData, setCommentData] = useState({ text: "" });
  const { token, userInfo } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { _id, id, firstName, lastName, username, avatar, content, createdAt } =
    postData;

  const addCommentHandler = () => {
    dispatch(addComment({ postId: _id, commentData, token }));
    setCommentData({ text: "" });
    setIsOpen(false);
    navigate(`/post/${id}`);
  };

  const postTime = convertDateIntoInteger(createdAt);

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="fixed z-50 inset-0 pt-8" onClose={setIsOpen}>
        <div className="flex items-start justify-center min-h-[800px] sm:min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-[#5b7083] bg-opacity-40 transition-opacity" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-[#151F2B] rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full">
              <div className="flex items-center px-1.5 py-2 border-b border-gray-700">
                <div
                  className="hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0"
                  onClick={() => setIsOpen(false)}
                >
                  <XIcon className="h-[22px] text-white" />
                </div>
              </div>
              <div className="flex px-4 pt-5 pb-3 sm:px-6">
                <div className="w-full">
                  <div className="text-[#6e767b] flex gap-x-3 relative">
                    <span className="w-0.5 h-full z-[-1] absolute left-5 top-11 bg-gray-600" />
                    <img
                      src={avatar}
                      alt="avatar"
                      className="h-12 w-12 rounded-full"
                    />
                    <div className="">
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
                      <p className="text-[#f7f9f9] text-[15px] sm:text-base mt-0.5">
                        {content}
                      </p>
                    </div>
                  </div>
                  <div className="mt-7 flex space-x-3 w-full">
                    <img
                      src={userInfo.avatar}
                      alt="avatar"
                      className="h-12 w-12 rounded-full"
                    />
                    <div className="flex-grow mt-2">
                      <TextareaAutosize
                        value={commentData.text}
                        onChange={e => setCommentData({ text: e.target.value })}
                        minRows="3"
                        placeholder="Tweet your reply..."
                        className="bg-transparent h-auto border-none outline-none text-white text-lg placeholder-gray-500 tracking-wide w-full"
                      />
                      <div className="flex items-center justify-between pt-2.5">
                        <div className="flex items-center">
                          {/* <div className="icon">
                            <EmojiHappyIcon className="text-[#1d9bf0] h-[22px]" />
                          </div> */}
                        </div>
                        <button
                          className="bg-[#1d9bf0] text-white rounded-full px-4 py-1.5 font-bold shadow-md hover:bg-[#1a8cd8] disabled:hover:bg-[#1d9bf0] disabled:opacity-50 disabled:cursor-default"
                          type="submit"
                          disabled={!commentData.text.trim()}
                          onClick={addCommentHandler}
                        >
                          Reply
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
