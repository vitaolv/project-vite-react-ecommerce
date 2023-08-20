export const handleCEPChange = (inputValue, handleChange) => {
  let formattedValue = "";
  const numericValue = inputValue.replace(/\D/g, "");

  for (let i = 0; i < numericValue.length && i < 8; i++) {
    if (i === 5) {
      formattedValue += "-";
    }
    formattedValue += numericValue[i];
  }

  handleChange({
    target: {
      name: "cep",
      value: formattedValue,
    },
  });
};
