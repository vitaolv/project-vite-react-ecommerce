export function handleAddressChange(inputValue, handleChange) {
  const alphabetcAndNumber = inputValue.replace(/[^a-zA-Z0-9À-ÿ\s/]/g, "");
  let formattedValue = "";

  if (alphabetcAndNumber.length < 151) {
    formattedValue = alphabetcAndNumber.substring(0, 151);
  } else {
    formattedValue = alphabetcAndNumber;
  }
  handleChange({
    target: {
      name: "endereco",
      value: formattedValue,
    },
  });
}
