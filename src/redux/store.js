import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./user/userApi";
import { githubUserApi } from "./user/githubUserApi";
import themeReducer from "./theme/themeSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    [userApi.reducerPath]: userApi.reducer,
    [githubUserApi.reducerPath]: githubUserApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware, githubUserApi.middleware),
});
