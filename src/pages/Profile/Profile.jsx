import React, { useEffect } from "react";
import { ArrowLeftIcon } from "@heroicons/react/outline";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import {
  BottomNavigation,
  Post,
  ProfileCard,
  Sidebar,
  Widgets,
} from "../../components";
import {
  getSingleUser,
  getUserPostsByUsername,
  resetUserProfile,
} from "../../features/users/userSlice";

export const Profile = () => {
  const { username } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getSingleUser({ username }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return () => {
      dispatch(resetUserProfile());
    };
  }, [dispatch, username]);

  const { singleUser, userPosts } = useSelector(state => state.users);
  const { allPosts } = useSelector(state => state.posts);

  useEffect(() => {
    dispatch(getUserPostsByUsername({ username }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allPosts]);

  return (
    <main className="min-h-screen bg-[#151F2B] flex max-w-[1500px] mx-auto">
      <Sidebar />
      <div className="flex-grow border-l border-r border-gray-700 max-w-[600px] sm:ml-[72px] xl:ml-[340px]">
        <div className="flex items-center px-1.5 py-2 border-b border-gray-700 text-[#d9d9d9] font-semibold text-xl gap-x-4 sticky top-0 z-50 bg-[rgba(21, 32, 43, 0.75)] backdrop-blur-md backdrop-brightness-100">
          <div className="hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0">
            <ArrowLeftIcon
              className="h-5 text-white"
              onClick={() => navigate(-1)}
            />
          </div>
          {singleUser.firstName} {singleUser.lastName}
        </div>
        <ProfileCard userDetails={singleUser} />
        <div className="pb-72">
          {userPosts?.map((post, id) => {
            return (
              <div key={id}>
                <Post postData={post} />
              </div>
            );
          })}
        </div>
      </div>
      <Widgets />
      <BottomNavigation />
    </main>
  );
};
