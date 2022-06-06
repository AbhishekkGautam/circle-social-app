import React from "react";
import { useSelector } from "react-redux";
// import { SparklesIcon } from "@heroicons/react/outline";
import { Post } from "../Post/Post";
import { getSortedPosts } from "../../helpers";

export const ExploreFeed = ({ headerTitle }) => {
  const { allPosts } = useSelector(state => state.posts);

  const exploreFeedPosts = getSortedPosts(allPosts);

  return (
    <div className="text-white flex-grow border-l border-r border-gray-700 md:max-w-[600px] sm:ml-[72px] xl:ml-[340px]">
      <div className="text-[#d9d9d9] flex items-center sm:justify-between py-3 px-4 sticky top-0 z-50 bg-[rgba(21, 32, 43, 0.75)] backdrop-blur-md backdrop-brightness-100">
        <h2 className="text-lg sm:text-xl font-bold">{headerTitle}</h2>
        {/* <div className="hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0 ml-auto">
          <SparklesIcon className="h-5 text-white" />
        </div> */}
      </div>
      <div className="">
        {exploreFeedPosts.length === 0 ? (
          <div className="flex min-h-screen items-center justify-center text-gray-400">
            No Posts Available.
          </div>
        ) : (
          <div className="pb-72">
            {exploreFeedPosts?.map((post, id) => {
              return (
                <div key={id}>
                  <Post postData={post} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
