import { configureStore } from "@reduxjs/toolkit";
import reducers from "./ducks";
import thunk from "redux-thunk";
import { getDefaultMiddleware } from "@reduxjs/toolkit";

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});
export const store = configureStore({
  reducer: reducers,
  devTools: process.env.NODE_ENV !== "production",
  // middleware: [thunk],
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export default store;
