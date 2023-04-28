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
    genderId: '',
  },
  reducers: {
    setLoginStatus: (state, action) => {
      state.loggedIn = action.payload;
    },
    setGender: (state, action) => {
      state.genderId = action.payload;
    },
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

export const { setLoginStatus, setGender } = userSlice.actions
export default userSlice.reducer