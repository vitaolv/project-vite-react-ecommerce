export const handleCardNameChange = (inputValue, handleChange) => {
  const alphabetcValue = inputValue.replace(/[^a-zA-ZÀ-ÿ\s'-]/g, "");
  const maxLength = 30;
  const formattedValue = alphabetcValue.substring(0, maxLength);

  handleChange({
    target: {
      name: "nomeEscritoNoCartao",
      value: formattedValue,
    },
  });
};
