export function convertTimestamp(timestamp) {
  // Convert milliseconds to a Date object
  let date = new Date(timestamp);

  // Extract day, month, and year
  let day = String(date.getUTCDate()).padStart(2, "0");
  let month = String(date.getUTCMonth() + 1).padStart(2, "0"); // Months are 0-based
  let year = date.getUTCFullYear();

  // Return formatted date as dd:mm:yyyy
  return `${day}:${month}:${year}`;
}
