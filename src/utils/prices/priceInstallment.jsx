import { installmentOptions } from "../InstallmentOptions/installmentConfig";

export function getFormattedFinalPriceInstallmente(totalPrice) {
  let numInstallments = 12; // Valor padrão para mais de 645 (caso não atenda nenhuma opção anterior)

  for (const option of installmentOptions) {
    if (totalPrice <= option.maxValue) {
      numInstallments = option.numInstallments;
      break;
    }
  }

  const installmentValue = totalPrice / numInstallments;

  const formattedInstallmentValue = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(installmentValue);

  return [numInstallments, formattedInstallmentValue];
}
