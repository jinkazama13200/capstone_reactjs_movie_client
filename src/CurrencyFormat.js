const CURRENCY_FORMAT = new Intl.NumberFormat(undefined, {
  style: "currency",
  currency: "VND",
});
const currencyFormat = (number) => {
  return CURRENCY_FORMAT.format(number);
};
export default currencyFormat;
