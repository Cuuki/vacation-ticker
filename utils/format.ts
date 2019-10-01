export const formatNumberToLength = (
  number: number,
  length: number,
  delimiter = '0'
): string => {
  return number.toString().padStart(length, delimiter);
};

export default {};
