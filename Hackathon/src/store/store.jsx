import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./Slices/productSlice";
import addToCartReducer from "./Slices/addtoCartSlice";    
import { persistStore, persistReducer } from 'redux-persist';    
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';

const persistConfig = {   
  key: 'addToCart',
  storage,  
};

const persistedAddToCartReducer = persistReducer(persistConfig, addToCartReducer);

const rootReducer = combineReducers({
  products: productReducer,
  addToCart: persistedAddToCartReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

export const persistor = persistStore(store);  
export default store;
