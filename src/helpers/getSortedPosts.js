export const getSortedPosts = posts => {
  return [...posts].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );
};
