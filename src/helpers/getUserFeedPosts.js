export const getUserFeedPosts = (posts, loggedInUser, filterType) => {
  let filteredPost = posts?.filter(
    post =>
      post?.username === loggedInUser?.username ||
      loggedInUser?.following?.find(ele => post?.username === ele?.username)
  );

  if (filterType === "Recent") {
    return filteredPost.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
  }
  if (filterType === "Trending") {
    return filteredPost.sort((a, b) => b.likes.likeCount - a.likes.likeCount);
  }
  if (filterType === "Oldest") {
    return filteredPost.sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    );
  }
};
