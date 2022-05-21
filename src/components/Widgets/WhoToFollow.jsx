import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { followUser } from "../../features/users/userSlice";

export const WhoToFollow = ({ userData }) => {
  const dispatch = useDispatch();
  const { token } = useSelector(state => state.auth);

  return (
    <div className="hover:bg-white hover:bg-opacity-[0.02] px-4 py-3 cursor-pointer transition duration-200 ease-out flex items-center">
      <img
        src={userData.avatar}
        alt="avatar"
        className="h-12 w-12 rounded-full"
      />
      <div className="ml-4 leading-5 group">
        <h4 className="font-bold hover:underline">
          {userData?.firstName} {userData?.lastName}
        </h4>
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
