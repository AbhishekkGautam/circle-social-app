import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ArrowLeftIcon } from "@heroicons/react/outline";
import { Comment, Post, Sidebar, Widgets } from "../../components";
import { getSinglePost } from "../../features/posts/postSlice";

export const SinglePost = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { singlePost, singlePostStatus, allPosts } = useSelector(
    state => state.posts
  );
  useEffect(() => {
    dispatch(getSinglePost(postId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const currentPost = allPosts?.find(post => post.id === postId);

  const updatedPost = currentPost ?? singlePost;

  return (
    <main className="min-h-screen bg-background flex max-w-[1500px] mx-auto">
      <Sidebar />
      <div className="flex-grow border-l border-r border-gray-700 max-w-[600px] sm:ml-[72px] xl:ml-[340px]">
        <div className="flex items-center px-1.5 py-2 border-b border-gray-700 text-colorgray-100 font-semibold text-xl gap-x-4 sticky top-0 z-50 bg-[rgba(21, 32, 43, 0.75)] backdrop-blur-md backdrop-brightness-100">
          <div className="hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0">
            <ArrowLeftIcon
              className="h-5 text-white"
              onClick={() => navigate(-1)}
            />
          </div>
          Tweet
        </div>
        {singlePostStatus === "success" && (
          <Post postData={currentPost ?? singlePost} singlePostPage />
        )}
        <div className="pb-72">
          {singlePostStatus === "success" &&
            updatedPost?.comments.map(comment => {
              return (
                <div key={comment._id}>
                  <Comment commentData={comment} postId={updatedPost._id} />
                </div>
              );
            })}
        </div>
      </div>
      <Widgets />
    </main>
  );
};
