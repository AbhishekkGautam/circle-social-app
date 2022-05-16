import React, { useState } from "react";
import { SidebarLink } from "./SidebarLink";
import {
  HashtagIcon,
  BookmarkIcon,
  HomeIcon,
  UserIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline";
import { PostModal } from "../Modals/PostModal";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="hidden sm:flex flex-col items-center xl:items-start xl:w-[320px] p-2 fixed h-full ">
        <div className="flex items-center justify-center w-14 h-14 hoverAnimation p-0 xl:ml-[78px]">
          {/* <h1 className="text-white text-xl">Circle</h1> */}
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-7 icon-svg r-jwli3a r-4qtqp9 r-yyyyoo r-16y2uox r-8kz0gk r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp"
          >
            <g>
              <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
            </g>
          </svg>
        </div>
        <div className="space-y-2.5 mt-4 mb-2.5 xl:ml-[78px]">
          <SidebarLink path="/" text="Home" Icon={HomeIcon} />
          <SidebarLink path="/explore" text="Explore" Icon={HashtagIcon} />
          <SidebarLink path="/bookmarks" text="Bookmarks" Icon={BookmarkIcon} />
          <SidebarLink path="/profile" text="Profile" Icon={UserIcon} />
        </div>
        <button
          className="hidden xl:inline ml-auto mt-2.5 bg-[#1A8CD8] text-white rounded-full w-56 h-[52px] text-lg font-bold 
	  hover:bg-[#1d9bf0] "
          onClick={() => setIsOpen(true)}
        >
          Tweet
        </button>
        <div className="text-[#d9d9d9] flex items-center justify-center hoverAnimation xl:ml-auto xl:-mr-5 mt-auto">
          <img
            src="https://i.pravatar.cc/300?img=11"
            alt="avatar"
            className="h-10 w-10 rounded-full xl:mr-2.5"
          />
          <div className="hidden xl:inline leading-5">
            <h4 className="font-bold">John Sharma</h4>
            <p className="text-[#6e767d]">@johnSharma</p>
          </div>
          <DotsHorizontalIcon className="h-5 hidden xl:inline ml-10" />
        </div>
      </div>
      {isOpen && <PostModal isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
};
