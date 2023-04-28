import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    loggedIn: false,
    user: {
      _id: "",
      activeBids: [],
      bookmarks: [],
      rejected: [],
      personalInfo: {
        firstName: "",
        number: "",
        email: "",
        genderId: "",
        location: "",
        birthdate: "",
        lastName: ""},
      // idToken: "", //might need later for auth
    },
  },
  reducers: {
    loginUser: (state, action) => {
      // console.log("loginUser", action.payload);
      state.user = action.payload;
      state.loggedIn = true;
    },
    logoutUser: (state) => {
      state.loggedIn = false;
      state.user = {
        _id: "",
        activeBids: [],
        bookmarks: [],
        rejected: [],
        personalInfo: {
          firstName: "",
          number: "",
          email: "",
          genderId: "",
          location: "",
          birthdate: "",
          lastName: ""},
        // idToken: "", //might need later for auth
      }
    },
    setGender: (state, action) => {
      state.genderId = action.payload;
    },
    removeBookmark: (state, action) => {
      state = {
        ...state,
        bookmarks: state.user.bookmarks.filter(
          (bookmark) => bookmark !== action.payload
        ),
      };
    },
    addBookmark: (state, action) => {
      console.log(state.user.bookmarks, "bookmarks");
      state = {
        ...state,
        bookmarks: state.user.bookmarks.push(action.payload),
      };
    },
    setDarkMode: (state, action) => {
      state.darkMode = action.payload;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    setShowMe: (state, action) => {
      console.log("showme payload: ", action.payload);
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
});

export const {
  loginUser,
  logoutUser,
  setLoginStatus,
  setGender,
  addBookmark,
  removeBookmark,
  setDarkMode,
  setLanguage,
  setShowMe,
} = userSlice.actions;
export default userSlice.reducer;
