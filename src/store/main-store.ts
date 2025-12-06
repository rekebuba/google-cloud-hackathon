import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import { persistedRootReducer } from "./persist";

export const store = configureStore({
  reducer: {
    root: persistedRootReducer,
  }
});

export const persister = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
