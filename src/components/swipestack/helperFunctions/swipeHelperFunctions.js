import * as generic from "server/fs-generic"
import {arrayUnion, arrayRemove, deleteField} from "firebase/firestore"




export const handleLeftSwipe = (art, user) => {
  // user.rejected.push(art.id);
  generic.update('users', user._id, {rejected: arrayUnion(art._id)})
};

export const handleRightSwipe = (art, user) => {
  // art.bidders.push(user.username);
  // art.bidStartingPrice += art.bidIncrementPrice;
  //add user to bids and increment price
  generic.update('art', art._id, {
    bidders: arrayUnion(user._id),
    bidStartingPrice: art.bidStartingPrice + art.bidIncrementPrice,
    bookmarks: deleteField()
  })


  const bid = {artwork: art.id, bidPrice: art.bidStartingPrice}
  // user.activeBids.push(bid)
};
