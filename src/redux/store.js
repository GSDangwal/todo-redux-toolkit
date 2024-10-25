import { combineReducers, configureStore } from "@reduxjs/toolkit";
import textReducer from "./textSlice";
import filterReducer from "./filterSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  todos: textReducer,
  //  todos: textReducer,
  filter: filterReducer,
});
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["todos"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
});
export const persist = persistStore(store);
export default store;
