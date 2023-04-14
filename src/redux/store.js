import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import authReducer from "./auth/authSlice";
import postSlice from "./post/postSlice";

const logger = createLogger();

export const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    auth: authReducer,
    post: postSlice,
  },
});
