export const checkProductTotal = (products) => {
  const total = products?.reduce((acc, elem) => {
    let price = elem.price * elem.count;
    return acc + price;
  }, 0);

  return total;
};
