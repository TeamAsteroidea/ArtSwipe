export const handleLeftSwipe = (art, user) => {
  user.rejected.push(art.id);
  return;
};

export const handleRightSwipe = (art, user) => {
  art.bidders.push(user.username);
  art.bidPrice += art.bidIncrement;
  const bid = {artwork: art, bidPrice: art.bidPrice}
  user.activeBids.push(bid)
  return;
};
