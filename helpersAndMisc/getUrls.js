const axios = require("axios");
const fsp = require("node:fs/promises")

function dateWithinPastFewDays() {
  // Number of milliseconds in a day
  const millisecondsPerDay = 24 * 60 * 60 * 1000;
  // Generate a random number between 1 and 5 to represent how many days ago the date should be
  const daysAgo = Math.floor(Math.random() * 5) + 1;
  // Subtract the number of milliseconds in the chosen number of days from the current date to get the desired date
  const date = new Date(Date.now() - (daysAgo * millisecondsPerDay));
  // Return the date in milliseconds
  return date.getTime();
}

function auctionDurationMilliseconds() {
  const millisecondsPerDay = 24 * 60 * 60 * 1000;
  const days = Math.floor(Math.random() * 7) + 1;
  const milliseconds = days * millisecondsPerDay;
  return milliseconds;
}

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

var artists = [
  "Guay",
  "Nils Hamm",
  "Steven Belledin",
  "Staples",
  "Jen Bartel",
  "Junji Ito",
  "John Avon",
  "Adam Paquette",
  "Chris Seaman",
  "Wylie Beckert",
  "Peter Mohrbacher",
  "Dominik Mayer",
  "Jason Rainville",
  "chippy",
  "Quentin Hoover",
  "Zoltan Boros",
  "Gabor Szikszai",
  "Adam Rex",
  "Foglio",
  "Velinov",
  "Kev Walker"

]
var query = `https://api.scryfall.com/cards/search?q=(${artists.map((value) => `a:"${value}"`).join(' or ')} or is:masterpiece) -is:artseries`;
console.log(query)

var results = []
var id = 0
var getUrl = async(url) => {
  var result = await axios.get(url).catch((err) => {console.log(err.name, err.message)})
  // console.log(result.data)
  for (let card of result.data.data) {
    results.push({
      id: id,
      bidders: [],
      bidIncrement: 1,
      bidPrice: 1,
      artist: card.artist,
      name: card.name,
      currentOwner: 'Nobody',
      image: card.image_uris ? card.image_uris.art_crop: card.card_faces[0].image_uris.art_crop,
      date_auctioned: dateWithinPastFewDays(),
      bidDuration: auctionDurationMilliseconds()
    })
    id += 1
  }
  console.log(result.data.next_page)
  console.log(result.data.has_more)
  await sleep(150)
  if (result.data.has_more) {
    getUrl(result.data.next_page)
  }
  else {
    console.log(results.length)
    fsp.writeFile('dummyData/artUrlArray.txt', JSON.stringify(results))
  }
}

getUrl(query)



// var getArtUrl = async (loops) => {

//   var axiosPromises = []
//   for (let i = 1; i <= loops; i++) {
//     console.log(`${i}...`)
//     axiosPromises.push(axios.get(query).catch((err) => {console.log(err.name, err.message)}))
//     await sleep(150)



//     // let result = await axios.get(query)
//     // console.log(result.request.res.responseUrl)
//     // resultsArray.push(result.request.res.responseUrl)
//     // await sleep(50)
//   }
//   console.log(axiosPromises.length)

//   var resultsArray = []
//   for (let thisPromise of axiosPromises) {
//     var result = await thisPromise
//     if (result === undefined) {
//       continue
//     }

//     console.log(result.request.res.responseUrl)
//     resultsArray.push(result.request.res.responseUrl)

//   }
//   return resultsArray
// }

// getArtUrl(2000).then((resultsArray) => {
//   fsp.writeFile('dummyData/artUrlArray.txt', JSON.stringify(resultsArray))
// })
