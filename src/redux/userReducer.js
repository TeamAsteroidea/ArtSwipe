import { createSlice } from "@reduxjs/toolkit"


const userSlice = createSlice({
  name: "user",
  initialState: {
    loggedIn: false,
    user: {
      displayName: '',
      email: '',
      photoURL: '',
      uid: '',
      idToken: '',
      genderId: '',
      darkMode: 'Off',
      language: 'English (US)',
      showMe: [],
    },
  },
  reducers: {
    loginUser: (state, action) => {
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
        idToken: '' //this is for API calls
      };
    },
    setGender: (state, action) => {
      state.genderId = action.payload;
    },
    setDarkMode: (state, action) => {
      state.darkMode = action.payload;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    setShowMe: (state, action) => {
      console.log('showme payload: ', action.payload);
      state.showMe = action.payload;
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

export const { loginUser, logoutUser, setLoginStatus, setGender, setDarkMode, setLanguage, setShowMe } = userSlice.actions
export default userSlice.reducer