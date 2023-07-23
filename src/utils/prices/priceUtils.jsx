export function getFormattedPrice(price) {
  return price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2, // Defina o número mínimo de dígitos decimais
  });
}
export function getFormattedPriceValue(price) {
  const numericValue = Number(price);
  const formattedValue = getFormattedPrice(numericValue);
  return formattedValue;
}
