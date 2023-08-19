export function HandleComplementoChange(inputValue, handleChange) {
  let formattedValue = "";
  const value = inputValue.replace(/[^a-zA-Z0-9]/g, "");

  if (value.length > 151) {
    formattedValue = value.substring(0, 151);
  } else {
    formattedValue = value;
  }

  handleChange({
    target: {
      name: "complemento",
      value: formattedValue,
    },
  });
}
