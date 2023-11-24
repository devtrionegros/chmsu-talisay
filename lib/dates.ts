export const currentDateString = () => {
  // Create a new Date object
  const currentDate = new Date();

  // Get the year, month, and day
  const year = currentDate.getFullYear();
  // Months are zero-based, so we add 1 to get the correct month
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");

  // Create the formatted date string
  const formattedDateString = `${year}-${month}-${day}`;
  return formattedDateString;
};
