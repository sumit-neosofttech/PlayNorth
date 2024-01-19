export const useConvertToCamelCase = (data: string) => {
  let ans = data.toLowerCase();
  // Returning string to camelcase
  return ans
    .split(" ")
    .reduce((s, c) => s + (c.charAt(0).toUpperCase() + c.slice(1)));
};
