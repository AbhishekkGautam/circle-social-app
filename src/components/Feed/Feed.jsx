import { SparklesIcon } from "@heroicons/react/outline";
import React from "react";
import { Input } from "../Input/Input";
import { Post } from "../Post/Post";

export const Feed = () => {
  return (
    <div className="text-white flex-grow border-l border-r border-gray-700 max-w-[600px] sm:ml-[72px] xl:ml-[340px]">
      <div className="text-[#d9d9d9] flex items-center sm:justify-between py-2 px-4 sticky top-0 z-50 bg-[rgba(21, 32, 43, 0.75)] backdrop-blur-md backdrop-brightness-100">
        <h2 className="text-lg sm:text-xl font-bold">Home</h2>
        <div className="hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0 ml-auto">
          <SparklesIcon className="h-5 text-white" />
        </div>
      </div>
      <Input />
      <div className="pb-72">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};
