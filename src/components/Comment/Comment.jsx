import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/outline";
import React from "react";

export const Comment = () => {
  return (
    <div className="p-3 flex cursor-pointer border-b border-gray-700">
      <img
        src="https://i.pravatar.cc/300?img=1"
        alt="avatar"
        className="h-11 w-11 rounded-full mr-4"
      />
      <div className="flex flex-col space-y-2 w-full">
        <div className="flex justify-between">
          <div className="text-[#6e767d]">
            <div className="inline-block group">
              <h4 className="inline-block font-bold text-[15px] sm:text-base text-[#f7f9f9] hover:underline">
                Jasmin Patel
              </h4>
              <span className="text-sm sm:text-[15px] ml-1.5">@jasmin145</span>
            </div>{" "}
            ·{" "}
            <span className="hover:underline text-sm sm:text-[15px]">
              May 12
            </span>
            <p className="text-[#f7f9f9] text-[15px] sm:text-base mt-0.5">
              Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
        <div className="text-[#6e767d] grid grid-cols-3 w-4/5">
          <div className="flex items-center space-x-1 group max-w-fit">
            <div className="icon group-hover:bg-green-500 group-hover:bg-opacity-10">
              <ArrowUpIcon className="h-4 group-hover:text-green-500" />
            </div>

            <span className="group-hover:text-green-500 text-sm">5</span>
          </div>

          <div className="flex items-center space-x-1 group max-w-fit">
            <div className="icon group-hover:bg-pink-600 group-hover:bg-opacity-10">
              <ArrowDownIcon className="h-4 group-hover:text-pink-600" />
            </div>

            <span
              className={`group-hover:text-pink-600 text-sm
                }`}
            >
              1
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
