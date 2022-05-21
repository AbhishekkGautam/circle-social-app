export const getUserFeedPosts = (posts, loggedInUser, filterType) => {
  let filteredPost = posts?.filter(post =>
    loggedInUser?.following?.find(followedUser => {
      return (
        followedUser.username === post.username ||
        loggedInUser.username === post.username
      );
    })
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
