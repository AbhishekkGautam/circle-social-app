import React from "react";

export const WhoToFollow = () => {
  return (
    <div className="hover:bg-white hover:bg-opacity-[0.02] px-4 py-3 cursor-pointer transition duration-200 ease-out flex items-center">
      <img
        src="https://i.pravatar.cc/300?img=12"
        alt="avatar"
        className="h-12 w-12 rounded-full"
      />
      <div className="ml-4 leading-5 group">
        <h4 className="font-bold hover:underline">Abhishek Gautam</h4>
        <h5 className="text-gray-500 text-[15px]">@helloAbhishekk</h5>
      </div>
      <button className="ml-auto bg-[#EFF3F4] hover:bg-[#e0e0e0] text-black rounded-full text-sm font-bold py-1.5 px-3.5">
        Follow
      </button>
    </div>
  );
};
