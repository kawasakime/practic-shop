import { ICartItem } from "../interfaces/components";


export function getProductsCount(products: ICartItem[]) {
  let count = 0;

  products.forEach((item) => (count += item.count));
  return count;
}

export function getTotalPrice(products: ICartItem[]) {
  let price = 0;

  products.forEach((item) => (price += item.price * item.count));

  return price;
}

export function getTotalSale(products: ICartItem[]) {
  let sale = 0;

  products.forEach((item) =>
    !!item.salePrice
      ? (sale += (item.price - item.salePrice) * item.count)
      : null
  );
  return sale;
}

export function resizeString(str: string) {
  return str.slice(0, 21)
}