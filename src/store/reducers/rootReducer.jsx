import { combineReducers } from "redux";
import { cartReducer } from "./cart/cartReducer";
import { notificationReducer } from "./notificationReducer";
import { modaisReducer } from "./modaisReducer";

export const rootReducer = combineReducers({
  cart: cartReducer,
  notification: notificationReducer,
  modal: modaisReducer,
});
