const passwordValidation = (password: string): boolean => {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  return passwordRegex.test(password);
};

const quantityValidation = (quantity: string): boolean => {
  const quantityRegex = /^([1-9]|[1-9][0-9]|[1-2][0-9][0-9]|300)$/;

  return quantityRegex.test(quantity);
};

const priceValidation = (price: string): boolean => {
  const priceRegex = /^([1-9][0-9]{3,7}|[1-9][0-9]{7})$/;

  return priceRegex.test(price);
};

export { passwordValidation, quantityValidation, priceValidation };
