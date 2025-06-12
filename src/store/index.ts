import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import globalReducer from "./slices/global";

const persistConfig = {
  key: "root",
  storage,
};

const store = configureStore({
  reducer: {
    global: persistReducer(persistConfig, globalReducer),
  },
});

export default store;
export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
