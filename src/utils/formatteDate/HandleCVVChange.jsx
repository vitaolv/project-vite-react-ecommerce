export function HandleCardCVVChange(inputValue, handleChange) {
  const maxLength = 3;
  const value = inputValue.replace(/\D/g, "");
  const formattedValue = value.substring(0, maxLength);

  handleChange({
    target: {
      name: "cvv",
      value: formattedValue,
    },
  });
}
