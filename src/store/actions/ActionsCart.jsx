import * as types from "../Types";
import { v4 as uuidv4 } from "uuid";

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

  return {
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
  };
}
export function updateQuantityAction(objID, quantity) {
  return {
    type: types.UPDATE_QUANTITY,
    payload: {
      objID: objID,
      quantity: quantity,
    },
  };
}

export const updatePriceTotalAction = (priceTotal) => {
  return {
    type: types.UPDATE_PRICE_TOTAL,
    payload: priceTotal,
  };
};

export function removeFromCartAction(item) {
  return {
    type: types.REMOVE_FROM_CART,
    payload: item,
  };
}

export function clearCartAction() {
  return {
    type: types.CLEAR_CART,
  };
}
