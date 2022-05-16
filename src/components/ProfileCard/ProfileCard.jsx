import React from "react";
import { LinkIcon } from "@heroicons/react/outline";

export const ProfileCard = () => {
  return (
    <div className="pb-3 border-b border-gray-700">
      <div className="h-36 sm:h-48 bg-[#1a85cd]"></div>
      <div className="p-4">
        <div className="flex justify-between items-start pb-4">
          <img
            src="https://i.pravatar.cc/300?img=11"
            alt="avatar"
            className="h-[120px] w-[120px] sm:h-36 sm:w-36 rounded-full border-4 border-[#151F2B] -mt-20"
          />
          <button className="ml-auto bg-[#151F2B] hover:bg-[#273340] text-white border border-gray-500 rounded-full text-base font-bold py-1.5 px-3.5">
            Edit Profile
          </button>
        </div>
        <div className="flex flex-col space-y-3">
          <div className="">
            <h2 className="text-xl font-extrabold text-[#F7F9F9] leading-tight">
              John Sharma
            </h2>
            <span className="text-gray-500 text-[15px]">@johnSharma</span>
          </div>

          <h4 className="text-[#F7F9F9] text-[15px]">
            Front-end Developer | JavaScript 💛
          </h4>
          <div className="flex items-center space-x-1">
            <LinkIcon className="h-5 text-gray-500" />
            <a
              href="https://github.com/AbhishekkGautam"
              className="text-[#1A8CD8] hover:underline"
            >
              github.com/AbhishekkGautam
            </a>
          </div>
          <div className="flex items-center space-x-5">
            <div className="text-[#F7F9F9] font-bold text-[15px] hover:underline cursor-pointer">
              193 <span className="text-gray-500 font-medium">Following</span>
            </div>
            <div className="text-[#F7F9F9] font-bold text-[15px] hover:underline cursor-pointer">
              463 <span className="text-gray-500 font-medium">Followers</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
