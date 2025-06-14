import { configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  type PersistConfig,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import globalReducer from "./slices/global";

const persistConfig: PersistConfig<GlobalState> = {
  key: "root",
  storage,
};

const persistedGlobalReducer = persistReducer<GlobalState>(
  persistConfig,
  globalReducer
);

export const store = configureStore({
  reducer: {
    global: persistedGlobalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        ignoredActionPaths: ["register"],
        ignoredPaths: ["global._persist"],
      },
    }),
});

export default store;
export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
