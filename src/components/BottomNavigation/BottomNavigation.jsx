import React from "react";
import {
  HashtagIcon,
  BookmarkIcon,
  HomeIcon,
  UserIcon,
  LogoutIcon,
} from "@heroicons/react/outline";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../features/auth/authSlice";

export const BottomNavigation = () => {
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
    <div className="sm:hidden fixed bottom-0 bg-[#151F2B] border-t border-gray-700 w-full z-50 px-6">
      <div className="flex items-center justify-between py-5">
        <Link to="/">
          <HomeIcon className="h-6 text-[#d9d9d9]" />
        </Link>
        <Link to="/explore">
          <HashtagIcon className="h-6 text-[#d9d9d9]" />
        </Link>
        <Link to="/bookmarks">
          <BookmarkIcon className="h-6 text-[#d9d9d9]" />
        </Link>
        <Link to={`/profile/${userInfo?.username}`}>
          <UserIcon className="h-6 text-[#d9d9d9]" />
        </Link>

        <LogoutIcon className="h-6 text-[#d9d9d9]" onClick={logOutHandler} />
      </div>
    </div>
  );
};
