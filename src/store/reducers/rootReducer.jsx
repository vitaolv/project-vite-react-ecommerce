import { combineReducers } from "redux";
import { cartReducer } from "./cart/cartReducer";
import { notificationReducer } from "./notificationReducer";

export const rootReducer = combineReducers({
  cart: cartReducer,
  notification: notificationReducer,
});
