export const emptyValues = (input) => {
  let result = input.trim("");
  if (result.length > 0) {
    return false;
  } else {
    return true;
  }
};
