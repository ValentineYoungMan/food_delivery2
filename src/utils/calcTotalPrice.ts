import { CartItem } from '../redux/slices/cartSlice';

export const calcTotalPrice = (items: CartItem[]) => {
  console.log(items);
  return items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
};
