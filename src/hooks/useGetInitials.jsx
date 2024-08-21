export const getInitials = (fullName) => {
  const names = fullName.trim().split(" ");
  return names.length === 1
    ? names[0].charAt(0).toUpperCase()
    : `${names[0].charAt(0).toUpperCase()}${names[names.length - 1]
        .charAt(0)
        .toUpperCase()}`;
};
