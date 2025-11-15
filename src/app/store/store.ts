import authReducer from "@/features/auth/authSlice";
import { configureStore } from "@reduxjs/toolkit";
import accountTransferReducer from "@/features/transfer/redux/accountTransferSlice"
export const store = configureStore({
  reducer: {
    auth: authReducer,
    transfer: accountTransferReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
