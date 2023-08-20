export function HandleCardNumberChange(inputValue, handleChange) {
  let formattedValue = "";
  const maxLength = 15;
  const value = inputValue.replace(/\D/g, "");

  for (let i = 0; i < value.length && i <= maxLength; i++) {
    if (i === 4 || i === 8 || i === 12) {
      formattedValue += ".";
    }
    formattedValue += value[i];
  }

  handleChange({
    target: {
      name: "numeroDoCartao",
      value: formattedValue,
    },
  });
}
