import { timeRemaining } from '../../../scripts/helperFunctions/timeRemaining.js';

// const timeRemaining = (art) => {
//   // get today's date in UNIX format (seconds)
//   const today = Math.floor((new Date().getTime()) / 1000);
//   // subtract todays date from the dateAuctioned
//   const timeSpent = today - art.date_auctioned;
//   // if the timeSpent is equal to or less than 0, return 0
//   if (timeSpent > art.bidDuration) {
//     return 0;
//   }
//   // return the time spent from the bid duration
//   // console.log(art.bidDuration - timeSpent)
//   return art.bidDuration - timeSpent;
// }

const sortByPropertyValue = (array, key) => {
  return array.sort((a, b) => {
    if (a[key] > b[key]) {
      return 1;
    }
    if (a[key] < b[key]) {
      return -1;
    }
    return 0;
  });
}

const dontShowArt = (user, listOfArt) => {
  const filtered = listOfArt.filter((art) => {
    // check if the user is the last person to bid, it's been rejected, or there is no more time left on the auction
    // add in filter to check if the user is the owner of the art
    // console.log(user.rejected)
    // console.log(art.id)
    // console.log('rejected', !user.rejected.includes(art.id))
    // console.log('bidder equals username', art.bidders[art.bidders.length - 1] !== user.username)
    return (!user.rejected.includes(art._id) && art.bidders[art.bidders.length - 1] !== user.username && art.auctionTimeLeft > 0)
  })
  return filtered;
}

export function sortArtwork (user, listOfArt) {
  // console.log('list of art', listOfArt);
  // add a property for the time left on the auction

  listOfArt.forEach((art) => {
    art.auctionTimeLeft = timeRemaining(art);
    // const newArt = {...art}
    // newArt.bidders = [...newArt.bidders]
    // newArt.auctionTimeLeft = timeRemaining(art);
    // console.log(newArt)
    // return newArt;
  })
  // console.log('listOfArt', listOfArt)
  // filter artwork in which the user is the last person to bid, it's been rejected, or there is no more time left on the auction
  let artToShow = dontShowArt(user, listOfArt);
  // console.log(artToShow)
  // sort art by time left
  artToShow = sortByPropertyValue(artToShow, 'auctionTimeLeft');
  // console.log('artToShow', artToShow);

  // sort by bookmarked
  let bookmarked = [];
  // first, add a time left property and load the array with bookmarked artwork
  artToShow.forEach((art, index) => {
    if (user.bookmarks.includes(art._id)) {
      bookmarked.push(art);
      artToShow.splice(index, 1);
    }
  });

  // sort by bid on by user
  let bidOn = [];
  // if the user has bid on the item, push it in
  artToShow.forEach((art, index) => {
    if (art.bidders.includes(user.username)) {
      bidOn.push(art);
      artToShow.splice(index, 1);
    }
  });
  // console.log('bookmarked', bookmarked[0]);
  // console.log('bid on', bidOn);
  // console.log('art', artToShow);
  // console.log([...bookmarked, ...bidOn, ...artToShow][0])
  // return an array of sorted objects
  return [...bookmarked, ...bidOn, ...artToShow];
}