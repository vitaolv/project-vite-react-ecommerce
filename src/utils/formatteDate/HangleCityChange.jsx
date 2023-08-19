export const handleCityChange = (inputValue, handleChange) => {
  let formattedValue = "";
  const alphabetcValue = inputValue.replace(/[^a-zA-ZÀ-ÿ\s'-]+$/g, "");

  if (alphabetcValue.length > 100) {
    formattedValue = alphabetcValue.substring(0, 100);
  } else {
    formattedValue = alphabetcValue;
  }

  if (formattedValue.trim() === "") {
    handleChange({
      target: {
        name: "cidade",
        value: "",
      },
    });
    return;
  }

  const pattern = /^[a-zA-ZÀ-ÿ\s'-]+$/;
  if (!pattern.test(formattedValue)) {
    throw new Error("The city name is not valid.");
  }

  if (alphabetcValue[0] === " ") {
    throw new Error("The city name cannot start with a space.");
  }

  handleChange({
    target: {
      name: "cidade",
      value: formattedValue,
    },
  });
};
