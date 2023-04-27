import { db } from "./firestore.js";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  addDoc,
  Timestamp,
  where,
  onSnapshot,
} from "firebase/firestore";

import { isSenderSame } from "scripts/messages/isSenderSame.js";

export const getGroups = async (callback) => {
  try {
    const groupRef = collection(db, "messages");
    const groupQuery = await query(
      groupRef,
      where("users", "array-contains", 1)
    );
    console.log(groupQuery);
    const unsubscribe = onSnapshot(groupQuery, (querySnapshot) => {
      if (!querySnapshot) {
        throw "No message groups found for this user";
      }
      const roomsData = querySnapshot.data();
      console.log(roomsData);
      // callback(roomsData);
    });
    return unsubscribe;
  } catch (error) {
    console.log(`ERROR: ${error}`);
  }
};

export const getMessagesByRoom = async (chat_id, callback) => {
  try {
    if (!chat_id) {
      throw "No message group provided to pull messages from";
    }
    const messageRef = doc(db, "messages", chat_id);
    const unsubscribe = onSnapshot(messageRef, (messagesSnapshot) => {
      if (!messagesSnapshot) {
        throw "No message group found with the given ID";
      }
      const roomData = messagesSnapshot.data();
      const messageData = roomData.messages.map((message, index) => {
        const isContinueAbove = isSenderSame(
          message,
          roomData.messages[index + 1]
        );
        const isContinueBelow = isSenderSame(
          message,
          roomData.messages[index - 1]
        );
        return { ...message, isContinueAbove, isContinueBelow };
      });
      callback({
        messageData,
        last_activity_date: roomData.last_activity_date,
      });
    });
    return unsubscribe;
  } catch (error) {
    console.log(`ERROR: ${error}`);
  }
};

export const postMessage = async ({ chat_id, users }, message_body) => {
  try {
    if (message_body.length === 0 || !message_body) {
      throw "No message body provided";
    }

    if (!chat_id) {
      if (!Array.isArray(users) || users.length === 0) {
        throw "No valid message group referenced";
      }

      // Create new document if it doesn't exist and get the returned ID
      chat_id = (
        await addDoc(collection(db, "messages"), {
          last_activity_date: Timestamp.now(),
          users: users,
          messages: [],
        })
      ).id;
    }

    let messageRef = doc(db, "messages", chat_id);
    const messagesSnapshot = await getDoc(messageRef);
    if (!messagesSnapshot) {
      throw `Message group with id ${chat_id} does not exist`;
    }
    const message = { message_body };
    message.chat_id = chat_id;
    message.message_id = messagesSnapshot.data().messages.length + 1;
    message.user_id = 1;
    message.message_date = Timestamp.now();

    await updateDoc(messageRef, {
      messages: [message, ...messagesSnapshot.data().messages],
    });
  } catch (error) {
    console.log(`ERROR: ${error}`);
  }
};
