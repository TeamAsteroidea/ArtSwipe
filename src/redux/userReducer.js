import { createSlice, PayloadAction } from "@reduxjs/toolkit"
// move this to examples once we have actual reducers


const userSlice = createSlice({
  name: "user",
  initialState: {
    loggedIn: false,
    user: {
      displayName: '',
      email: '',
      photoURL: '',
      uid: '',
    },
  },
  reducers: {
    loginUser: (state, action) => {
      console.log('loginUser', action.payload)
      state.user = action.payload;
      state.loggedIn = true;
    },
    logoutUser: (state) => {
      state.loggedIn = false;
      state.user = {
        displayName: '',
        email: '',
        photoURL: '',
        uid: '',
      };
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

export const { loginUser, logoutUser } = userSlice.actions
export default userSlice.reducer