import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ThreeDots } from "react-loader-spinner";
import { SparklesIcon } from "@heroicons/react/outline";
import { Input } from "../Input/Input";
import { Post } from "../Post/Post";
import {
  getAllBookmarkPosts,
  getAllPosts,
} from "../../features/posts/postSlice";
import {
  getBookmarkPosts,
  getSortedPosts,
  getUserFeedPosts,
} from "../../helpers";
import { getAllUsers } from "../../features/users/userSlice";
import { FilterModal } from "../Modals/FilterModal";

export const Feed = ({ headerTitle, userFeed, bookmarkPage }) => {
  const { allPosts, bookmarkPosts, filterText, postStatus } = useSelector(
    state => state.posts
  );
  const { userInfo, token } = useSelector(state => state.auth);
  const { allUsers } = useSelector(state => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts());
    dispatch(getAllUsers());
    dispatch(getAllBookmarkPosts(token));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, token]);

  const currentUser = allUsers?.find(
    user => user.username === userInfo.username
  );

  const userFeedPosts = getUserFeedPosts(allPosts, currentUser, filterText);
  const exploreFeedPosts = getSortedPosts(allPosts);
  const bookmarkFeedPosts = getBookmarkPosts(allPosts, bookmarkPosts);

  return (
    <div className="text-white flex-grow border-l border-r border-gray-700 max-w-[600px] sm:ml-[72px] xl:ml-[340px]">
      <div className="text-[#d9d9d9] flex items-center sm:justify-between py-2 px-4 sticky top-0 z-50 bg-[rgba(21, 32, 43, 0.75)] backdrop-blur-md backdrop-brightness-100">
        <h2 className="text-lg sm:text-xl font-bold">{headerTitle}</h2>
        <div className="hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0 ml-auto">
          <SparklesIcon className="h-5 text-white" />
        </div>
      </div>
      {userFeed && <Input />}
      {userFeed && (
        <div className="border-b border-gray-700 px-4 py-3 text-[#d9d9d9] flex items-center justify-between">
          <h4 className="text-[#1d9bf0]">{filterText}</h4>
          <FilterModal />
        </div>
      )}

      <div className="">
        {postStatus === "loading" ? (
          <div
            className={`flex items-center justify-center w-full ${
              userFeed ? "min-h-[70vh]" : "min-h-screen"
            }`}
          >
            <ThreeDots color="#fff" height={80} width={80} />
          </div>
        ) : (
          <div className="pb-72">
            {userFeed ? (
              userFeedPosts.length === 0 ? (
                <div className="flex min-h-[70vh] items-center justify-center text-gray-400">
                  Follow people to see their posts.
                </div>
              ) : (
                userFeedPosts?.map((post, id) => {
                  return (
                    <div key={id}>
                      <Post postData={post} />
                    </div>
                  );
                })
              )
            ) : bookmarkPage ? (
              bookmarkFeedPosts.length === 0 ? (
                <div className="flex min-h-screen items-center justify-center text-gray-400">
                  No Bookmark Posts.
                </div>
              ) : (
                bookmarkFeedPosts?.map((post, id) => {
                  return (
                    <div key={id}>
                      <Post postData={post} />
                    </div>
                  );
                })
              )
            ) : (
              exploreFeedPosts?.map((post, id) => {
                return (
                  <div key={id}>
                    <Post postData={post} />
                  </div>
                );
              })
            )}
          </div>
        )}
      </div>
    </div>
  );
};
