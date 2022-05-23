import React, { useState, useEffect, useRef } from "react";
import { LinkIcon } from "@heroicons/react/outline";
import { useSelector, useDispatch } from "react-redux";
import { EditProfileModal } from "../Modals/EditProfileModal";
import {
  followUser,
  setUsersListModal,
  unfollowUser,
} from "../../features/users/userSlice";
import { getAllPosts } from "../../features/posts/postSlice";
import { Avatar } from "../Avatar/Avatar";
import { UsersListModal } from "../Modals/UsersListModal";

export const ProfileCard = ({ userDetails }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const divRef = useRef(null);

  const {
    _id,
    firstName,
    lastName,
    avatar,
    username,
    bio,
    portfolio,
    followers,
    following,
  } = userDetails || {};

  const { userInfo, token } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  const { usersListModal } = useSelector(state => state.users);

  const isUserAlreadyFollowing = () =>
    followers?.find(user => user.username === userInfo.username);

  return (
    <>
      <div className="pb-3 border-b border-gray-700">
        <div className="h-36 sm:h-40 bg-colorblue-300"></div>
        <div className="p-4">
          <div className="flex justify-between items-start pb-4">
            <Avatar
              avatarImg={avatar}
              firstname={firstName}
              lastname={lastName}
              profileCard
            />
            {userInfo.username === username ? (
              <button
                className="ml-auto bg-background hover:bg-[#273340] text-white border border-gray-500 rounded-full text-base font-bold py-1.5 px-3.5"
                onClick={() => setIsEditModalOpen(true)}
              >
                Edit Profile
              </button>
            ) : isUserAlreadyFollowing() ? (
              <button
                className="ml-auto bg-[#151F2B] hover:bg-[#273340] text-white border border-gray-500 rounded-full text-base font-bold py-1.5 px-3.5"
                onClick={() =>
                  dispatch(unfollowUser({ followUserId: _id, token }))
                }
              >
                Unfollow
              </button>
            ) : (
              <button
                className="ml-auto bg-[#EFF3F4] hover:bg-[#e0e0e0] text-black border border-gray-500 rounded-full text-base font-bold py-1.5 px-3.5"
                onClick={() =>
                  dispatch(followUser({ followUserId: _id, token }))
                }
              >
                Follow
              </button>
            )}
          </div>
          <div className="flex flex-col space-y-3">
            <div className="">
              <h2 className="text-xl font-extrabold text-colorgray-50 leading-tight">
                {firstName} {lastName}
              </h2>
              <span className="text-gray-500 text-[15px]">@{username}</span>
            </div>

            <h4 className="text-colorgray-50 text-[15px]">{bio}</h4>
            {portfolio && (
              <div className="flex items-center space-x-1">
                <LinkIcon className="h-5 text-gray-500" />
                <a href={portfolio} className="text-[#1A8CD8] hover:underline">
                  {portfolio}
                </a>
              </div>
            )}

            <div className="flex items-center space-x-5">
              <div
                ref={divRef}
                className="text-colorgray-50 font-bold text-[15px] hover:underline cursor-pointer"
                onClick={() =>
                  dispatch(
                    setUsersListModal({
                      open: true,
                      title: "Following",
                      data: following,
                    })
                  )
                }
              >
                {following?.length}{" "}
                <span className="text-gray-500 font-medium">Following</span>
              </div>
              <div
                ref={divRef}
                className="text-colorgray-50 font-bold text-[15px] hover:underline cursor-pointer"
                onClick={() =>
                  dispatch(
                    setUsersListModal({
                      open: true,
                      title: "Followers",
                      data: followers,
                    })
                  )
                }
              >
                {followers?.length}{" "}
                <span className="text-gray-500 font-medium">Followers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isEditModalOpen && (
        <EditProfileModal
          isEditModalOpen={isEditModalOpen}
          setIsEditModalOpen={setIsEditModalOpen}
          profileData={userDetails}
        />
      )}
      {usersListModal.open && <UsersListModal divRef={divRef} />}
    </>
  );
};
