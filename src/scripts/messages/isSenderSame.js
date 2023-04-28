export const isSenderSame = (currentMessage, prevMessage) => {
  if (currentMessage && prevMessage) {
    return currentMessage.user_id === prevMessage.user_id;
  }
  return false;
};
