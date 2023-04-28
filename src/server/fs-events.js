import { db } from "./firestore.js";
import { collection, doc, getDoc, getDocs, addDoc, updateDoc, query, setDoc } from "firebase/firestore";

export async function getAllEvents() {
  try {
    // console.log('db is', db);
    const eventsCol = collection(db, 'events');
    const eventsSnapShot = await getDocs(eventsCol);
    // const eventsSnapShot = [];
    const events = [];
    eventsSnapShot.forEach((doc) => {
      // console.log('doc is............--------');
      // console.log('doc id:', doc.id);
      const docdata = doc.data();
      docdata['id'] = doc.id;
      events.push(docdata);
    })

    // console.log(events);
    return events;
  } catch (err) {
    console.log('Error getting:', err);
    return [];
  }
}

export async function writeEvent(collectionName, data) {
  const collectionRef = collection(db, collectionName);
  const docRef = await addDoc(collectionRef, data);
  const snapshot = await getDoc(docRef)
  if (snapshot.exists()) {
    var id = snapshot.id
    return ({...snapshot.data(), id:id})
  }
}

export async function updateEvent(collectionName, target, updateObject) {
  // takes in an object of {key: value}s you want to overwrite
  const docRef = doc(db, collectionName, target)
  await updateDoc(docRef, updateObject)
  const snapshot = await getDoc(docRef)
  if (snapshot.exists()) {
    var id = snapshot.id
    return ({...snapshot.data(), id:id})
  }

}
