import * as types from "../Types";

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

export function addToCart(product) {
  const { id, name, cover, price, flavorSelected, quantity } = product;

  return {
    type: types.ADD_TO_CART,
    payload: {
      id,
      name,
      cover,
      price,
      flavorSelected,
      quantity,
    },
  };
}
export function setQuantityToCart(productID, quantity) {
  console.log("Product ID:", productID);
  console.log("Quantity:", quantity);
  return {
    type: types.SET_QUANTITY_TO_CART,
    payload: {
      productID,
      quantity,
    },
  };
}

export function setFlavorSelected(productID, flavorSelected) {
  return async (dispatch) => {
    dispatch({
      type: types.SET_FLAVOR_SELECTED,
      payload: { productID, flavorSelected },
    });
  };
}

export function removeFromCart(productID) {
  return (dispatch, getState) => {
    dispatch({
      type: types.REMOVE_FROM_CART,
      payload: productID,
    });

    const { productInCart } = getState().cart;
    localStorage.setItem("productInCart", JSON.stringify(productInCart));

    dispatch({
      type: types.SET_CART_ITEM_COUNT,
      payload: productInCart.length,
    });
  };
}
