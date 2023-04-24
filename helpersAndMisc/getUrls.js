const axios = require("axios");
const fsp = require("node:fs/promises")
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
var query = `https://api.scryfall.com/cards/random?format=image&version=art_crop&q=(${artists.map((value) => `a:"${value}"`).join(' or ')} or is:masterpiece)`;
console.log(query)


const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

var getArtUrl = async (loops) => {

  var axiosPromises = []
  for (let i = 1; i <= loops; i++) {
    console.log(`${i}...`)
    axiosPromises.push(axios.get(query).catch((err) => {console.log(err.name, err.message)}))
    await sleep(150)



    // let result = await axios.get(query)
    // console.log(result.request.res.responseUrl)
    // resultsArray.push(result.request.res.responseUrl)
    // await sleep(50)
  }
  console.log(axiosPromises.length)

  var resultsArray = []
  for (let thisPromise of axiosPromises) {
    var result = await thisPromise
    if (result === undefined) {
      continue
    }

    console.log(result.request.res.responseUrl)
    resultsArray.push(result.request.res.responseUrl)

  }
  return resultsArray
}

getArtUrl(2000).then((resultsArray) => {
  fsp.writeFile('dummyData/artUrlArray.txt', JSON.stringify(resultsArray))
})
