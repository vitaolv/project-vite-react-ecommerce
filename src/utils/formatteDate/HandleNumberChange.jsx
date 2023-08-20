export function handleNumberChange(inputValue, handleChange) {
  const numericValue = inputValue.replace(/\D/g, "");
  let formattedValue = "";

  if (numericValue.length > 10) {
    formattedValue = numericValue.substring(0, 10);
  } else {
    formattedValue = numericValue;
  }

  handleChange({
    target: {
      name: "numero",
      value: formattedValue,
    },
  });
}
