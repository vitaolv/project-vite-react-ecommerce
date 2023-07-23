export function getFormattedFinalPriceInstallmente(totalPrice) {
  const installmentOptions = [
    { maxValue: 180, numInstallments: 3 },
    { maxValue: 300, numInstallments: 4 },
    { maxValue: 400, numInstallments: 6 },
  ];

  let numInstallments = 10; // Valor padrão para mais de 400 (caso não atenda nenhuma opção anterior)

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
