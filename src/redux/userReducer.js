import { createSlice, PayloadAction } from "@reduxjs/toolkit"
// move this to examples once we have actual reducers


const userSlice = createSlice({
  name: "user",
  initialState: {
    // displayName: "display name",
    // email: "email",
    // photoURL: "photo URL",
    // uid: 1234,
    loggedIn: false,
  },
  reducers: {
    setLoginStatus: (state, action) => {
      state.loggedIn = action.payload;
    }
  },
  // extraReducers: {
  //   [createUser.fulfilled]: (state, action) => {
  //     state.loggedIn = true;
  //   },
  //   [createUser.rejected]: (state, action) => {
  //     state.loggedIn = false;
  //   },
  // },
})

export const {} = userSlice.actions
export default userSlice.reducer