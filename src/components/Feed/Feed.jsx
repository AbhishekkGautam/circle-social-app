import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SparklesIcon } from "@heroicons/react/outline";
import { Input } from "../Input/Input";
import { Post } from "../Post/Post";
import { getAllPosts } from "../../features/posts/postSlice";
import { getSortedPosts, getUserFeedPosts } from "../../helpers";

export const Feed = ({ userFeed, headerTitle }) => {
  const { allPosts } = useSelector(state => state.posts);
  const { userInfo } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const userFeedPosts = getSortedPosts(getUserFeedPosts(allPosts, userInfo));
  const exploreFeedPosts = getSortedPosts(allPosts);

  return (
    <div className="text-white flex-grow border-l border-r border-gray-700 max-w-[600px] sm:ml-[72px] xl:ml-[340px]">
      <div className="text-[#d9d9d9] flex items-center sm:justify-between py-2 px-4 sticky top-0 z-50 bg-[rgba(21, 32, 43, 0.75)] backdrop-blur-md backdrop-brightness-100">
        <h2 className="text-lg sm:text-xl font-bold">{headerTitle}</h2>
        <div className="hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0 ml-auto">
          <SparklesIcon className="h-5 text-white" />
        </div>
      </div>
      {userFeed && <Input />}

      <div className="pb-72">
        {userFeed
          ? userFeedPosts?.map((post, id) => {
              return (
                <div key={id}>
                  <Post postData={post} />
                </div>
              );
            })
          : exploreFeedPosts?.map((post, id) => {
              return (
                <div key={id}>
                  <Post postData={post} />
                </div>
              );
            })}
      </div>
    </div>
  );
};
