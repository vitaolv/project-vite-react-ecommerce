import dayjs from "dayjs";

export const handleDateChange = (
  date,
  dateString,
  dateFormat,
  handleChange
) => {
  const formattedDate = dayjs(dateString, dateFormat).format(dateFormat);
  handleChange({
    target: {
      name: "dataNascimento",
      value: formattedDate,
    },
  });
};
