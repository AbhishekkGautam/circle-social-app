import React from "react";
import {
  HashtagIcon,
  BookmarkIcon,
  HomeIcon,
  UserIcon,
  LogoutIcon,
} from "@heroicons/react/outline";
import { NavLink, useNavigate } from "react-router-dom";
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
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-[#d9d9d9] ${isActive && "font-bold text-colorblue-100"}`
          }
        >
          <HomeIcon className="h-6" />
        </NavLink>
        <NavLink
          to="/explore"
          className={({ isActive }) =>
            `text-[#d9d9d9] ${isActive && "font-bold text-colorblue-100"}`
          }
        >
          <HashtagIcon className="h-6" />
        </NavLink>
        <NavLink
          to="/bookmarks"
          className={({ isActive }) =>
            `text-[#d9d9d9] ${isActive && "font-bold text-colorblue-100"}`
          }
        >
          <BookmarkIcon className="h-6" />
        </NavLink>
        <NavLink
          to={`/profile/${userInfo?.username}`}
          className={({ isActive }) =>
            `text-[#d9d9d9] ${isActive && "font-bold text-colorblue-100"}`
          }
        >
          <UserIcon className="h-6" />
        </NavLink>

        <LogoutIcon className="h-6 text-[#d9d9d9]" onClick={logOutHandler} />
      </div>
    </div>
  );
};
