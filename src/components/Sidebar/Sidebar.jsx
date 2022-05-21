import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SidebarLink } from "./SidebarLink";
import {
  HashtagIcon,
  BookmarkIcon,
  HomeIcon,
  UserIcon,
  LogoutIcon,
  UsersIcon,
} from "@heroicons/react/outline";
import { PostModal } from "../Modals/PostModal";
import { logOut } from "../../features/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { setPostModalOpen } from "../../features/posts/postSlice";

export const Sidebar = () => {
  const { isPostModalOpen } = useSelector(state => state.posts);
  const { userInfo } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOutHandler = () => {
    dispatch(logOut());
    navigate("/login");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  return (
    <>
      <div className="hidden sm:flex flex-col items-center xl:items-start xl:w-[320px] p-2 fixed h-full ">
        <Link to="/">
          <div className="flex items-center justify-center h-14 w-14 hoverAnimation xl:ml-[78px]">
            <UsersIcon className="text-colorgray-100 h-7 w-7" />
          </div>
        </Link>
        <div className="space-y-2.5 mt-4 mb-2.5 xl:ml-[78px]">
          <SidebarLink path="/" text="Home" Icon={HomeIcon} />
          <SidebarLink path="/explore" text="Explore" Icon={HashtagIcon} />
          <SidebarLink path="/bookmarks" text="Bookmarks" Icon={BookmarkIcon} />
          <SidebarLink
            path={`/profile/${userInfo.username}`}
            text="Profile"
            Icon={UserIcon}
          />
        </div>
        <button
          className="hidden xl:inline ml-auto mt-2.5 bg-colorblue-200 text-white rounded-full w-56 h-[52px] text-lg font-bold 
	  hover:bg-colorblue-100"
          onClick={() => dispatch(setPostModalOpen({ isOpen: true }))}
        >
          Tweet
        </button>
        <div
          className="flex items-center hoverAnimation mt-auto mb-4 mx-auto xl:max-w-fit"
          onClick={logOutHandler}
        >
          <div className="flex items-center space-x-4 px-1 text-colorgray-100">
            <LogoutIcon className="h-6" />
            <h4 className="text-[18px] hidden xl:inline">Log out</h4>
          </div>
        </div>
      </div>
      {isPostModalOpen && <PostModal />}
    </>
  );
};
