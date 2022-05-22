import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { followUser } from "../../features/users/userSlice";
import { Avatar } from "../Avatar/Avatar";

export const WhoToFollow = ({ userData }) => {
  const dispatch = useDispatch();
  const { token } = useSelector(state => state.auth);

  return (
    <div className="hover:bg-white hover:bg-opacity-[0.02] px-4 py-3 cursor-pointer transition duration-200 ease-out flex items-center">
      <Link to={`/profile/${userData?.username}`}>
        <Avatar
          avatarImg={userData?.avatar}
          firstname={userData?.firstName}
          lastname={userData?.lastName}
        />
      </Link>
      <div className="ml-4 leading-5 group">
        <Link to={`/profile/${userData?.username}`}>
          <h4 className="font-bold hover:underline">
            {userData?.firstName} {userData?.lastName}
          </h4>
        </Link>
        <h5 className="text-gray-500 text-[15px]">@{userData?.username}</h5>
      </div>
      <button
        className="ml-auto bg-[#EFF3F4] hover:bg-[#e0e0e0] text-black rounded-full text-sm font-bold py-1.5 px-3.5"
        onClick={() =>
          dispatch(followUser({ followUserId: userData?._id, token }))
        }
      >
        Follow
      </button>
    </div>
  );
};
