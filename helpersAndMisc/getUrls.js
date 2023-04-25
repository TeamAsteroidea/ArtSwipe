const axios = require("axios");
const fsp = require("node:fs/promises")

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
      bidIncrementPrice: 1,
      bidStartingPrice: 1,
      artist: card.artist,
      name: card.name,
      currentOwner: 'Nobody',
      image: card.image_uris ? card.image_uris.art_crop: card.card_faces[0].image_uris.art_crop,
      date_auctioned: 0,
      bidDuration: 0
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
