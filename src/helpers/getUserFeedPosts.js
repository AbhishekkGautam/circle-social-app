export const getUserFeedPosts = (posts, loggedInUser) => {
  return [...posts]
    .filter(
      post =>
        post?.username === loggedInUser?.username ||
        loggedInUser.following?.find(
          followedUser => followedUser?.username === post.username
        )
    )
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
};
