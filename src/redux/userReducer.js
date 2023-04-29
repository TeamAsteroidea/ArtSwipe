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
      state.user.personalInfo.genderId = action.payload;
    },
    //TODO: make this user array nonsense a bit dryer
    addActive: (state, action) => {
      state = {
        ...state,
        user: {
          ...state.user,
          active: state.user.activeBids.push(action.payload)
        }
      }
    },
    removeActive: (state, action) => {
      state = {
        ...state,
        user: {
          ...state.user,
          activeBids: state.user.activeBids.filter(
            (item) => item !== action.payload
          )
        }
      }
    },
    addReject: (state, action) => {
      state = {
        ...state,
        user: {
          ...state.user,
          rejected: state.user.rejected.push(action.payload)
        }
      }
    },
    removeReject: (state, action) => {
      state = {
        ...state,
        user: {
          ...state.user,
          rejected: state.user.rejected.filter(
            (item) => item !== action.payload
          )
        }
      }
    },
    addBookmark: (state, action) => {
      state = {
        ...state,
        user: {
          ...state.user,
          bookmarks: state.user.bookmarks.push(action.payload)
        }
      }
    },
    removeBookmark: (state, action) => {
      state = {
        ...state,
        user: {
          ...state.user,
          bookmarks: state.user.bookmarks.filter(
            (item) => item !== action.payload
          )
        }
      }
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
  addReject,
  addActive,
} = userSlice.actions;
export default userSlice.reducer;
