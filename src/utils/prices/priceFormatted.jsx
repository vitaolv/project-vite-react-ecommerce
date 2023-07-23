import { products } from "../../data/Produtos";
import { getFormattedPrice, getFormattedPriceValue } from "./priceUtils";

export function ProductsAndPrice() {
  return products.map((product) => ({
    ...product,
    formattedPriceBefore: getFormattedPrice(product.priceBefore),
    formattedPrice: getFormattedPrice(product.price),
    formattedInstallmentValue: getFormattedPriceValue(product.price / 3),
  }));
}
