export function HandleCardExpirationChange(inputValue, handleChange) {
  let formattedValue = "";
  const maxLength = 3;
  const value = inputValue.replace(/\D/g, "");

  for (let i = 0; i < value.length && i <= maxLength; i++) {
    if (i === 2) {
      formattedValue += "/";
    }
    formattedValue += value[i];
  }

  handleChange({
    target: {
      name: "vencimento",
      value: formattedValue,
    },
  });
}
