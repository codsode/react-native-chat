export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const now = new Date();

  // Check if the date is within the current week
  const isSameWeek = (date, now) => {
    const startOfWeek = new Date(now);
    startOfWeek.setDate(now.getDate() - now.getDay());
    startOfWeek.setHours(0, 0, 0, 0);

    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 7);

    return date >= startOfWeek && date < endOfWeek;
  };

  if (isSameWeek(date, now)) {
    // If the date is within the current week, format as "Wed 8:21 PM"
    return date.toLocaleString("en-US", {
      weekday: "short", // Wed
      hour: "numeric", // 8
      minute: "numeric", // 21
      hour12: true, // PM format
    });
  }

  // Default format "Aug 21 8:21 PM"
  return date.toLocaleString("en-US", {
    month: "short", // Aug
    day: "numeric", // 21
    hour: "numeric", // 8
    minute: "numeric", // 21
    hour12: true, // PM format
  });
};

const formattedDate = formatDate("2023-08-21T14:46:09.437Z");
console.log(formattedDate);
