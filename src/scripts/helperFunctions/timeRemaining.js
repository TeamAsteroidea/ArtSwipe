// this function takes a single art object
export const timeRemaining = (art) => {
  // get today's date in UNIX format (seconds)
  const today = Math.floor((new Date().getTime()) / 1000);
  // subtract todays date from the dateAuctioned
  const timeSpent = today - art.dateAuctioned;
  // if the timeSpent is equal to or less than 0, return 0
  if (timeSpent < 1) {
    return 0;
  }
  // return the time spent from the bid duration
  return art.bidDuration - timeSpent;
}