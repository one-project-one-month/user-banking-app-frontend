import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

type UserState = {
  hasInitialPin: boolean;
};

const initialState: UserState = {
  hasInitialPin: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setHasInitialPin: (state, action: PayloadAction<boolean>) => {
      state.hasInitialPin = action.payload;
      Cookies.set("HasInitialPin", String(action.payload));
    },
  },
});

export const { setHasInitialPin } = userSlice.actions;
export default userSlice.reducer;
