import * as types from "../Types";
import { v4 as uuidv4 } from "uuid";

import { updatePriceTotalReducer } from "../reducers/cart/finalPriceReducer";

export class ProductItem {
  constructor(id, name, cover, price, flavorSelected, quantity) {
    this.id = id;
    this.name = name;
    this.cover = cover[0];
    this.price = price;
    this.flavorSelected = flavorSelected;
    this.quantity = quantity;
  }
}

export function addToCartAction(product) {
  const { id, name, cover, price, flavorSelected, quantity } = product;
  const objID = uuidv4();
  const cartItems = JSON.parse(localStorage.getItem("productInCart")) || [];

  const updatedCart = [
    ...cartItems,
    {
      objID,
      id,
      name,
      cover,
      price,
      flavorSelected,
      quantity,
    },
  ];

  localStorage.setItem("cartItems", JSON.stringify(updatedCart));

  return (dispatch) => {
    dispatch({
      type: types.ADD_TO_CART,
      payload: {
        objID,
        id,
        name,
        cover,
        price,
        flavorSelected,
        quantity,
      },
    });

    dispatch(updatePriceTotalAction());
  };
}

export function updateQuantityAction(objID, quantity) {
  return (dispatch) => {
    dispatch({
      type: types.UPDATE_QUANTITY,
      payload: {
        objID: objID,
        quantity: quantity,
      },
    });

    dispatch(updatePriceTotalAction());
  };
}

export function removeFromCartAction(item) {
  return (dispatch) => {
    dispatch({
      type: types.REMOVE_FROM_CART,
      payload: item,
    });

    dispatch(updatePriceTotalAction());
  };
}

export function clearCartAction() {
  return (dispatch) => {
    dispatch({
      type: types.CLEAR_CART,
    });

    dispatch(updatePriceTotalAction());
  };
}

export function resetCart() {
  return (dispatch) => {
    dispatch({
      type: types.RESET_ALL,
    });

    dispatch(updatePriceTotalAction());
  };
}

export const updatePriceTotalAction = () => {
  return (dispatch, getState) => {
    const state = getState().cart;

    const totalPrice = updatePriceTotalReducer(state);

    dispatch({
      type: types.UPDATE_PRICE_TOTAL,
      payload: totalPrice,
    });
  };
};
