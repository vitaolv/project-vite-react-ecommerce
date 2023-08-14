export const handleTelephoneChange = (
  inputValue,
  setTelefone,
  handleChange
) => {
  const numericValue = inputValue.replace(/\D/g, "");
  let formattedValue = "";

  for (let i = 0; i < numericValue.length && i < 11; i++) {
    if (i === 0) {
      formattedValue += "(";
    }
    if (i === 2) {
      formattedValue += ")";
      formattedValue += " ";
    }
    if (i === 7) {
      formattedValue += "-";
    }
    formattedValue += numericValue[i];
  }

  setTelefone(formattedValue);
  handleChange({
    target: {
      name: "telefone",
      value: formattedValue,
    },
  });
};
