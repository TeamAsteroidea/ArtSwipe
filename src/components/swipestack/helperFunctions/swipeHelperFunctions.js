export const handleLeftSwipe = (art, user) => {
  user.rejected.push(art.id);
};

// change addDoc to setDoc to update a document in firebase
// update the user and art document

export const handleRightSwipe = (art, user) => {
  art.bidders.push(user.username);
  art.bidStartingPrice += art.bidIncrementPrice;
  const bid = {artwork: art.id, bidPrice: art.bidStartingPrice}
  user.activeBids.push(bid)
};
