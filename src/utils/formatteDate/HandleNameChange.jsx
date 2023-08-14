export const handleNameChange = (inputValue, handleChange) => {
  let formattedValue = "";
  const alphabetcValue = inputValue.replace(/[^a-zA-ZÀ-ÿ\s'-]/g, "");

  if (alphabetcValue.length > 256) {
    formattedValue = alphabetcValue.substring(0, 256);
  } else {
    formattedValue = alphabetcValue;
  }

  console.log(alphabetcValue.length);
  console.log(formattedValue.length);

  handleChange({
    target: {
      name: "nome",
      value: formattedValue,
    },
  });
};
