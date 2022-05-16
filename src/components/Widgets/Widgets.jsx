import { SearchIcon } from "@heroicons/react/outline";
import React from "react";
import { WhoToFollow } from "./WhoToFollow";

export const Widgets = () => {
  return (
    <div className="hidden lg:inline ml-8 xl:w-[450px] py-1 space-y-5">
      <div className="sticky top-0 py-1.5 z-50 w-11/12 xl:w-9/12 bg-[#151F2B]">
        <div className="flex items-center bg-[#273340] p-3 rounded-full relative">
          <SearchIcon className="text-gray-500 h-5 z-50" />
          <input
            type="text"
            className="bg-transparent placeholder-gray-500 outline-none text-[#d9d9d9] absolute inset-0 pl-11 border border-transparent w-full focus:border-[#1d9df0] rounded-full focus:bg-[#151F2B] focus:shadow-lg"
            placeholder="Search Twitter"
          />
        </div>
        <div className="text-[#d9d9d9] mt-5 space-y-1 bg-[#1E2732] pt-3 rounded-xl overflow-hidden">
          <h4 className="font-bold text-xl px-4 pb-2">Who to follow</h4>
          <WhoToFollow />
          <WhoToFollow />
          <WhoToFollow />
          <button className="hover:bg-white hover:bg-opacity-[0.02] px-4 py-3 cursor-pointer transition duration-200 ease-out flex items-center justify-between w-full text-[#1d9bf0] font-light">
            Show more
          </button>
        </div>
      </div>
    </div>
  );
};
