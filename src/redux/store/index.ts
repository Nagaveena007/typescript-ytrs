import { compose, applyMiddleware, combineReducers, createStore } from "redux";
import storage from "redux-persist/lib/storage";

import thunk from "redux-thunk";
import cartNewReducer from "../reducer/cartNewReducer";
import likeReducer from "../reducer/likeReducer";
import recipeReducer from "../reducer/recipeReducer";
import totalReducer from "../reducer/totalReducer";
import orderReducer from "../reducer/orderReducer";
import { ReduxStore } from "../../types/ReduxStore";
import { persistStore, persistReducer } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";
//import { WebStorage, Transform } from "redux-persist/es/types";


const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const initialState :ReduxStore= {
  cart: {
    recipesToBuy: [],
  },
  recipes: {
    recipesList: [],
    isError: false,
    isLoading: false,
  },
  orders: {
    ordersList: [],
  },
  user: {
    userName: "",
  },
  total: {
    payment: null,
  },
  like: {
    likedRecipes: [],
  },
};
const bigReducer = combineReducers({
  cart: cartNewReducer,
  recipes: recipeReducer,
  total: totalReducer,
  like: likeReducer,
  orders: orderReducer,
});
/* interface Ipresist {
  key: string;
  storage: WebStorage;
  transforms: Transform<unknown, string, any, any>[];
} */
const persistConfig = {
  key: "root",
  storage,
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_SECRET_KEY || "", // this is mandatory
      onError: (error) => {
        // this is optional
        console.log("encryption error", error);
      },
    }),
    
  ],
};
const persistedReducer = persistReducer(persistConfig, bigReducer);
export let configureStore = createStore(
  persistedReducer,
  initialState,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  composeEnhancers(applyMiddleware(thunk))
);
export const persistor = persistStore(configureStore);

