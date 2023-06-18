import { products } from "../../data/Produtos";
import { getFormattedPrice, getFormattedInstallmentValue } from "./priceUtils";

export function ProductsAndPrice() {
  return products.map((product) => ({
    ...product,
    formattedPriceBefore: getFormattedPrice(product.priceBefore),
    formattedPrice: getFormattedPrice(product.price),
    formattedInstallmentValue: getFormattedInstallmentValue(product.price / 3),
  }));
}
