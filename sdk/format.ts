export const formatPrice = (
    price: number | undefined,
    currency = "USD",
    locale = "en-US",
  ) => {
    const formatter = new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
    });
  
    if (!price) {
      return null;
    }
  
    return formatter.format(price);
  };