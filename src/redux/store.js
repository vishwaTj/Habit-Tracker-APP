import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";

import rootReducer from "./rootReducer";

const persistConfig = {
  key:"root",
  storage
};

const persistReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore ({
    reducer: persistReducer
})

const persistor = persistStore(store);

export { store, persistor };