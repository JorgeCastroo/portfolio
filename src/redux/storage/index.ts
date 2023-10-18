import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../reducer/theme/theme";
import languageReducer from "../reducer/language/language";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    language: languageReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
