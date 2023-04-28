import { db } from "./firestore.js";
import { collection, doc, getDoc, getDocs,setDoc, addDoc, updateDoc, query } from "firebase/firestore";

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

export async function write(collectionName, data, setId = undefined) {
  console.log(setId)
  const thisRef = setId? doc(db, collectionName, setId) : collection(db, collectionName);
  const docRef = setId? await setDoc(thisRef, data) : await addDoc(thisRef, data);

  const snapshot = docRef? await getDoc(docRef) : await (getDoc(thisRef));
  if (snapshot && snapshot.exists()) {
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

// import { collection, query, where, getDocs } from "firebase/firestore";

// const q = query(collection(db, "cities"), where("capital", "==", true));

// const querySnapshot = await getDocs(q);
// querySnapshot.forEach((doc) => {
//   // doc.data() is never undefined for query doc snapshots
//   console.log(doc.id, " => ", doc.data());
// });