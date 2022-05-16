import React, { useState } from "react";
import {
  BookmarkIcon,
  ChatIcon,
  HeartIcon,
  ShareIcon,
} from "@heroicons/react/outline";
import { CommentModal } from "../Modals/CommentModal";
import { OptionsModal } from "../Modals/OptionsModal";

export const Post = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="p-3 flex cursor-pointer border-b border-gray-700 hover:bg-[#18222f] transition ease-out">
        <img
          src="https://i.pravatar.cc/300?img=11"
          alt="avatar"
          className="h-12 w-12 rounded-full mr-4"
        />
        <div className="flex flex-col space-y-2 w-full">
          <div className="flex justify-between">
            <div className="text-[#6e767d]">
              <div className="inline-block group">
                <h4 className="inline-block font-bold text-[15px] sm:text-base text-[#f7f9f9] hover:underline">
                  John Sharma
                </h4>
                <span className="text-sm sm:text-[15px] ml-1.5">
                  @johnSharma
                </span>
              </div>{" "}
              ·{" "}
              <span className="hover:underline text-sm sm:text-[15px]">
                May 12
              </span>
              <p className="text-[#f7f9f9] text-[15px] sm:text-base mt-0.5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                quae? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Velit, odit?
              </p>
            </div>

            <OptionsModal />
          </div>
          <div className="text-[#6e767d] flex justify-between sm:w-10/12">
            <div className="flex items-center space-x-1 group">
              <div
                className="icon group-hover:bg-[#1d9bf0] group-hover:bg-opacity-10"
                onClick={() => setIsOpen(true)}
              >
                <ChatIcon className="h-5 group-hover:text-[#1d9bf0]" />
              </div>

              <span className="group-hover:text-[#1d9bf0] text-sm">2</span>
            </div>

            <div className="flex items-center space-x-1 group">
              <div className="icon group-hover:bg-pink-600 group-hover:bg-opacity-10">
                <HeartIcon className="h-5 group-hover:text-pink-600" />
              </div>

              <span
                className={`group-hover:text-pink-600 text-sm
                }`}
              >
                4
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
