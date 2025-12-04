import authReducer from "@/features/auth/redux/authSlice";
import { configureStore } from "@reduxjs/toolkit";
import accountTransferReducer from "@/features/transfer/redux/accountTransferSlice";
import userReducer from "@/features/auth/redux/userSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    transfer: accountTransferReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
