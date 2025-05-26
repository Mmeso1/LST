import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/productsSlice";
import { productsApi } from "./services/productsApi";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "products",
  storage,
};

const persistedReducer = persistReducer(persistConfig, productsReducer);

export const store = configureStore({
  reducer: {
    products: persistedReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      productsApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
