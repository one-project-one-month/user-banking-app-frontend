import authReducer from "@/features/auth/authSlice";
import { configureStore } from "@reduxjs/toolkit";
import transferReducer from "@/features/auth/redux/transferListSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    transfer : transferReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
