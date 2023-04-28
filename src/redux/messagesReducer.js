import { createSlice } from "@reduxjs/toolkit";
// move this to examples once we have actual reducers

const messagesSlice = createSlice({
  name: "messages",
  initialState: {
    groupData: [],
    messageData: {},
  },
  reducers: {
    setGroupData: (state, action) => {
      state.groupData = action.payload;
    },
    setMessageData: (state, action) => {
      state.messageData = action.payload;
    },
  },
});

export const { setGroupData, setMessageData } = messagesSlice.actions;
export default messagesSlice.reducer;
