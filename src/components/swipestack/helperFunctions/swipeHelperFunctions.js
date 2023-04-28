export const handleLeftSwipe = (art, user) => {
  user.rejected.push(art.id);
};

export const handleRightSwipe = (art, user) => {
  art.bidders.push(user.username);
  art.bidStartingPrice += art.bidIncrementPrice;
  const bid = {artwork: art.id, bidPrice: art.bidStartingPrice}
  user.activeBids.push(bid)
};
