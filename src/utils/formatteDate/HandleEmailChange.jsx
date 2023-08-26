export const handleEmailChange = (inputValue, handleChange) => {
  const maxEmailLength = 320;

  const limitedEmail = inputValue.substring(0, maxEmailLength);
  handleChange({
    target: { name: "email", value: limitedEmail },
  });
};
