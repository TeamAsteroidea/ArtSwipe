import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  loggedIn: false,
  user: {
    displayName: '',
    email: '',
    photoURL: '',
    uid: '',
    idToken: ''
  },
};

const savedUser = localStorage.getItem('currentUser');
let user;
if (savedUser) {
  user = JSON.parse(savedUser);
} else {
  user = initialState;
}

const userSlice = createSlice({
  name: "user",
  initialState: user,
  reducers: {
    loginUser: (state, action) => {
      console.log('loginUser', action.payload)
      state.user = action.payload;
      state.loggedIn = true;
      localStorage.setItem('currentUser', JSON.stringify(state));
    },
    logoutUser: (state) => {
      state.loggedIn = false;
      state.user = {
        displayName: '',
        email: '',
        photoURL: '',
        uid: '',
        idToken: '' //this is for API calls
      };
      localStorage.removeItem('currentUser');
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