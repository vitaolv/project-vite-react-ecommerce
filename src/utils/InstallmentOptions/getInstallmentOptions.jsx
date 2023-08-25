import { installmentOptions } from "./installmentConfig";
import { getFormattedPriceValue } from "../prices/priceUtils";

export const getInstallmentOptions = (value) => {
  let numInstallments = 12;

  for (const option of installmentOptions) {
    if (value <= option.maxValue) {
      numInstallments = option.numInstallments;
      break;
    }
  }

  const formattedOptions = [];
  formattedOptions.push(`1x de ${getFormattedPriceValue(value)} à vista`);

  if (numInstallments > 1) {
    for (let i = 2; i <= numInstallments; i++) {
      const installmentAmount = value / i;
      formattedOptions.push(
        `${i}x de R$ ${getFormattedPriceValue(installmentAmount)} sem juros`
      );
    }

    return formattedOptions;
  } else {
    return [];
  }
};
