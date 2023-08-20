export function handleCPFChange(inputValue, handleChange) {
  const numericValue = inputValue.replace(/\D/g, "");
  let formattedValue = "";

  for (let i = 0; i < numericValue.length && i < 11; i++) {
    if (i === 3 || i === 6) {
      formattedValue += ".";
    } else if (i === 9) {
      formattedValue += "-";
    }
    formattedValue += numericValue[i];
  }

  handleChange({
    target: {
      name: "cpf",
      value: formattedValue,
    },
  });
}
