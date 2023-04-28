import { db } from "./firestore.js";
import { collection, getDocs } from "firebase/firestore/lite";

export async function getAllEvents() {
  try {
    console.log('db is', db);
    const eventsCol = collection(db, 'events');
    const eventsSnapShot = await getDocs(eventsCol);
    // const eventsSnapShot = [];
    const events = [];
    eventsSnapShot.forEach((doc) => {
      events.push(doc.data());
    })

    console.log(events);
    return events;
  } catch (err) {
    console.log('Error getting:', err);
    return [];
  }
}
