export const validateForeignerNumber = (number: string) => {
  const regex = /^\d{6}-\d{7}$/;
  return regex.test(number);
};
