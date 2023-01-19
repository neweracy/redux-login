import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { write } from "fs";
import { Root } from "react-dom/client";
import { RootState, AppThunk } from "../../app/store";
//import { fetchCount } from "./counterAPI";

export const counterSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = counterSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectUser = (state: { counter: { user: any; }; }) => state.counter.user;
console.log(selectUser);

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.

export default counterSlice.reducer;
