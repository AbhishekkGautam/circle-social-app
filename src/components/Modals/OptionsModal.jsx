import React, { useState, useRef } from "react";
import {
  DotsHorizontalIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/outline";
import { useDispatch, useSelector } from "react-redux";
import { useCheckIfClickedOutside } from "../../hooks";
import { deletePost, setPostModalOpen } from "../../features/posts/postSlice";

export const OptionsModal = ({ postData }) => {
  const [showOptionsModal, setShowOptionsModal] = useState(false);
  const ref = useRef();
  useCheckIfClickedOutside(showOptionsModal, ref, setShowOptionsModal);

  const { token } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const postId = postData?._id;

  return (
    <div className="relative" ref={ref}>
      <div className="icon group flex-shrink-0 ml-auto relative">
        <DotsHorizontalIcon
          className="h-5 text-[#6e767d] group-hover:text-[#1d9bf0]"
          onClick={e => {
            e.stopPropagation();
            setShowOptionsModal(!showOptionsModal);
          }}
        />
      </div>
      {showOptionsModal && (
        <div className="w-[180px] h-auto bg-[#1E2732] absolute top-10 right-2.5 rounded-[4px] py-2 shadow border border-gray-700">
          <div
            className="flex items-center space-x-4 px-4 py-2 text-red-500 hover:bg-white hover:bg-opacity-[0.03] cursor-pointer"
            onClick={() => {
              dispatch(deletePost({ postId, token }));
              setShowOptionsModal(false);
            }}
          >
            <TrashIcon className="h-5" />
            <h4 className="text-[16px]">Delete Tweet</h4>
          </div>
          <div
            className="flex items-center space-x-4 px-4 py-2 hover:bg-white hover:bg-opacity-[0.03] cursor-pointer text-white"
            onClick={() =>
              dispatch(
                setPostModalOpen({ isOpen: true, editPostData: postData })
              )
            }
          >
            <PencilIcon className="h-5" />
            <h4 className="text-[16px]">Edit Tweet</h4>
          </div>
        </div>
      )}
    </div>
  );
};
