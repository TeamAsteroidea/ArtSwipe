import axios from 'axios';
import fs from 'fs/promises';
// import * as generic from "../src/server/fs-generic.js"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import dotenv from 'dotenv'
import { collection, doc, getDoc, getDocs, addDoc, updateDoc, query, where } from "firebase/firestore/lite";

dotenv.config();

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: 'artswipe-b2bc3.firebaseapp.com',
  databaseURL: 'https://artswipe-b2bc3.firebaseio.com/',
  projectId: 'artswipe-b2bc3',
  storageBucket: 'artswipe-b2bc3.appspot.com',
  messagingSenderId: 'sender-id',
  appId: process.env.APP_ID,
  measurementId: "G-48R5S5D0J1",
};

console.log(firebaseConfig)

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export async function getAll(collectionName) {
  const collectionRef = collection(db, collectionName);
  const snapshot = await getDocs(collectionRef);
  const data = snapshot.docs.map((doc) => {
    var _id = doc.id
    return {...doc.data(), _id: _id}
  });
  return data
}

export async function getOne(collectionName, target) {
  const docRef = doc(db, collectionName, target)
  const snapshot = await getDoc(docRef)
  if (snapshot.exists()) {
    var _id = snapshot.id
    return ({...snapshot.data(), _id:_id})
  }
}

export async function write(collectionName, data) {
  const collectionRef = collection(db, collectionName);
  const docRef = await addDoc(collectionRef, data);
  const snapshot = await getDoc(docRef)
  if (snapshot.exists()) {
    var _id = snapshot.id
    return ({...snapshot.data(), _id:_id})
  }

}


export async function update(collectionName, target, updateObject) {
  // takes in an object of {key: value}s you want to overwrite
  const docRef = doc(db, collectionName, target)
  await updateDoc(docRef, updateObject)
  const snapshot = await getDoc(docRef)
  if (snapshot.exists()) {
    var _id = snapshot.id
    return ({...snapshot.data(), _id:_id})
  }

}

export async function search(collectionName, ...params) {
  // see query docs: https://firebase.google.com/docs/firestore/query-data/queries?hl=en&authuser=0
  // be sure to import where when using query

  const collectionRef = collection(db, collectionName);
  const thisQuery = query(collectionRef, ...params)
  const snapshot = await getDocs(thisQuery)
  const data = snapshot.docs.map((doc) => {
    var _id = doc.id
    return {...doc.data(), _id: _id}
  });
  return data

}

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
var scryQuery = `https://api.scryfall.com/cards/search?q=(${artists.map((value) => `a:"${value}"`).join(' or ')} or is:masterpiece) -is:artseries`;
console.log(scryQuery)

var results = []
var getUrl = async(url) => {
  var result = await axios.get(url).catch((err) => {console.log(err.name, err.message)})
  // console.log(result.data)
  for (let card of result.data.data) {
    results.push({
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
  }
  console.log(result.data.next_page)
  console.log(result.data.has_more)
  await sleep(150)
  if (result.data.has_more) {
    getUrl(result.data.next_page)
  }
  else {
    console.log(results.length)
    for (let result of results) {
      var first = result.artist.split(' ') ? result.artist.split(' ')[0]: result.artist;
      var last = result.artist.split(' ') ? result.artist.split(' ')[1]: '';
      var artistSearch = await search('users', where(`personalInfo.firstName`, '==', first))
      // console.log(artistSearch)
      // console.log(first)
      var artData = {}
      if (artistSearch.length === 0) {
        // console.log(result)
        // console.log(last)
        artistSearch = [await write('users',
          {
            bookmarks: [],
            activeBids: [],
            rejected: [],
            userName: last ? first + last[0] : first,
            personalInfo: {
              number: '123-456-7890',
              birthdate: '01/01/2000',
              genderId: 'Prefer not to say',
              location: 'Dominaria',
              email: 'replaceme@test.pizza',
              firstName: first,
              lastName: last ? last : 'n/a',
            }
          }
        )]
      }
      await write('art',
        {
          artistID: artistSearch[0]._id,
          artistName: result.artist,
          bidDuration: result.bidDuration,
          bidIncrementPrice: result.bidIncrement,
          bidStartingPrice: result.bidPrice,
          bidders: [],
          name: result.name,
          currentOwnerID: artistSearch[0]._id,
          image: result.image,
          dateAuctioned: result.date_auctioned,
        }
      )
      console.log(result.name)
    }
    fs.writeFile('dummyData/artUrlArray.txt', JSON.stringify(results))
  }
}

getUrl(scryQuery)



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
