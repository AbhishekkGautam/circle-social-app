export const getBookmarkPosts = (allPosts, bookmarkPosts) => {
  return bookmarkPosts
    .map(id => allPosts.find(post => post._id === id))
    .reverse();
};
