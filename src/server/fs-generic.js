import { db } from "./firestore.js";
import { collection, doc, getDoc, getDocs, addDoc } from "firebase/firestore/lite";

export async function getAll(collectionName) {
  const collectionRef = collection(db, collectionName);
  const snapshot = await getDocs(collectionRef);
  const data = snapshot.docs.map((doc) => doc.data());
  return data
}

export async function getOne(collectionName, target) {
  let docRef = doc(db, collectionName, target)
  let snapshot = await getDoc(docRef)
  if (snapshot.exists()) {
    return (snapshot.data())
  }
}

export async function write(collectionName, data) {
  const collectionRef = collection(db, collectionName);
  const docRef = await addDoc(collectionRef, data);
  let snapshot = await getDoc(docRef)
  if (snapshot.exists()) {
    return (snapshot.data())
  }

}