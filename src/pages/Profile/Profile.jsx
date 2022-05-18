import { ArrowLeftIcon } from "@heroicons/react/outline";
import React from "react";
import {
  BottomNavigation,
  ProfileCard,
  Sidebar,
  Widgets,
} from "../../components";

export const Profile = () => {
  return (
    <main className="min-h-screen bg-[#151F2B] flex max-w-[1500px] mx-auto">
      <Sidebar />
      <div className="flex-grow border-l border-r border-gray-700 max-w-[600px] sm:ml-[72px] xl:ml-[340px]">
        <div className="flex items-center px-1.5 py-2 border-b border-gray-700 text-[#d9d9d9] font-semibold text-xl gap-x-4 sticky top-0 z-50 bg-[rgba(21, 32, 43, 0.75)] backdrop-blur-md backdrop-brightness-100">
          <div className="hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0">
            <ArrowLeftIcon className="h-5 text-white" />
          </div>
          Profile
        </div>
        <ProfileCard />
        {/* <div className="pb-72">
          <Post />
          <Post />
          <Post />
          <Post />
        </div> */}
      </div>
      <Widgets />
      <BottomNavigation />
    </main>
  );
};
