import { CartItem } from '../redux/slices/cartSlice';
import { calcTotalPrice } from './calcTotalPrice';

export const getCartFromLS = () => {
  const data = localStorage.getItem('cart');
  const items = data ? JSON.parse(data) : [];
  console.log(items);
  const totalPrice = calcTotalPrice(items);
  console.log(totalPrice);

  return {
    items: items as CartItem[],
    totalPrice,
  };
};
