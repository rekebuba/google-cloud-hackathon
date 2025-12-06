import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./slice/root-slice";


// Persist configuration
const rootPersistConfig = {
  key: "root",
  storage,
  whitelist: ["id", "name"],
};

// Create persisted reducer
export const persistedRootReducer = persistReducer(
  rootPersistConfig,
  rootReducer,
);
