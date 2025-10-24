import type { ProductContextProps } from './interfaces/IProducts';
import { createContext } from 'react';

export const ProductContext = createContext<ProductContextProps>({
  increaseBy: () => {},
  count: 0,
  product: {
    id: '',
    title: '',
    img: '',
  },
});
export default ProductContext;
