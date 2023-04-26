import { createSlice, PayloadAction } from "@reduxjs/toolkit"
// move this to examples once we have actual reducers


const messageSlice = createSlice({
  name: "message",
  initialState: {
    message: "Initial message"
  },
  reducers: {
    setMessage(state, action: PayloadAction<string>) {
      state.message = action.payload
    }
  }
})

export const { setMessage } = messageSlice.actions
export default messageSlice.reducer