import { db } from "./firestore.js";
import { collection, getDocs } from "firebase/firestore";

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
