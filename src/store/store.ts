import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./slice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

// Типизация `RootState`
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
