import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    loggedIn: false,
    user: {
      displayName: "",
      email: "",
      photoURL: "",
      uid: "",
      idToken: "",
    },
  },
  reducers: {
    loginUser: (state, action) => {
      console.log("loginUser", action.payload);
      state.user = action.payload;
      state.loggedIn = true;
    },
    logoutUser: (state) => {
      state.loggedIn = false;
      state.user = {
        displayName: "",
        email: "",
        photoURL: "",
        uid: "",
        idToken: "", //this is for API calls
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
});

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
