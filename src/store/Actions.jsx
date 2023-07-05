import * as types from "./Types";

export function addToCart(product) {
  return (dispatch, getState) => {
    console.log("Objeto do produto:", product);
    dispatch({
      type: types.ADD_TO_CART,
      payload: product,
    });

    const { productInCart } = getState().cart;
    localStorage.setItem("productInCart", JSON.stringify(productInCart));

    dispatch({
      type: types.SET_CART_ITEM_COUNT,
      payload: productInCart.length,
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

export function showNotification(message, variant) {
  return {
    type: types.SHOW_NOTIFICATION,
    payload: { message, variant },
  };
}

export function hideNotification() {
  return {
    type: types.HIDE_NOTIFICATION,
  };
}
