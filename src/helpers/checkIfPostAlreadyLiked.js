export const checkIfPostAlreadyLiked = (likedByArray, loggedInUser) => {
  return likedByArray?.find(user => user?.username === loggedInUser?.username);
};
