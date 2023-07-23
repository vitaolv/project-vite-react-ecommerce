export function addReducer(state, payload) {
  const { id, name, flavorSelected, quantity, price } = payload;

  const existingProduct = state.productInCart.find(
    (item) =>
      item.id === id &&
      item.name === name &&
      item.flavorSelected === flavorSelected
  );

  if (existingProduct) {
    const updatedCart = state.productInCart.map((item) => {
      if (
        item.id === id &&
        item.name === name &&
        item.flavorSelected === flavorSelected
      ) {
        return {
          ...item,
          quantity: quantity,
        };
      }
      return item;
    });

    return {
      ...state,
      productInCart: updatedCart,
      quantityTotal:
        state.quantityTotal + (quantity - existingProduct.quantity),
      priceTotal:
        state.priceTotal +
        (price * quantity - existingProduct.price * existingProduct.quantity),
    };
  } else {
    return {
      ...state,
      productInCart: [...state.productInCart, payload],
      quantityTotal: state.quantityTotal + quantity,
      priceTotal: state.priceTotal + price * quantity,
    };
  }
}
