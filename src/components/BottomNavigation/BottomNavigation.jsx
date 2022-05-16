import React from "react";
import {
  HashtagIcon,
  BookmarkIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/outline";

export const BottomNavigation = () => {
  return (
    <div className="sm:hidden fixed bottom-0 bg-[#151F2B] border-t border-gray-700 w-full z-50 px-6">
      <div className="flex items-center justify-between py-5">
        <HomeIcon className="h-6 text-[#d9d9d9]" />
        <HashtagIcon className="h-6 text-[#d9d9d9]" />
        <BookmarkIcon className="h-6 text-[#d9d9d9]" />
        <UserIcon className="h-6 text-[#d9d9d9]" />
      </div>
    </div>
  );
};
