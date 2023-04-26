// this function takes a single art object
export const timeRemaining = (art) => {
  // console.log(art);
  // console.log(art);
  // get today's date in UNIX format (seconds)
  const today = new Date().getTime();
  // subtract todays date from the dateAuctioned
  const timeSpent = today - art.date_auctioned;
  // if the timeSpent is equal to or less than 0, return 0
  if (timeSpent < 1 || art.bidDuration - timeSpent < 1) {
    // make the current owner of the artwork the last person in the bidder array
    return 0;
  }
  // console.log(timeSpent)
  // return the time spent from the bid duration
  return art.bidDuration - timeSpent;
}