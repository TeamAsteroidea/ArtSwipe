import { createSlice } from "@reduxjs/toolkit"
// move this to examples once we have actual reducers


const eventSlice = createSlice({
  name: "event",
  initialState: {
    eventStart: {},
    eventEnd: {},
  },
  reducers: {
    setEventStart: (state, action) => {
      state.eventStart = action.payload.startDate
    },
    setEventEnd: (state, action) => {
      state.eventEnd = action.payload.endDate
    },
  }
})

export const { setEventStart, setEventEnd } = eventSlice.actions
export default eventSlice.reducer