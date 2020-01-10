export const getLastProduct = (products) => products[products.length - 1].no;
export const getFirstProduct = (products) => products[0].no;
export const uniqueProducts = (arr1, arr2) => arr2.filter((item) => {
  return !arr1.find((i) => i.product_id === item.product_id)
});
