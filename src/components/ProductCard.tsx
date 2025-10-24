import React from 'react';
import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import type {
  onChangeArgs,
  Product,
  ProductCardHandlers,
} from '../interfaces/IProducts';
import { ProductContext } from '../ProductContext';
import { ProductTitle } from './ProductTitle';
import { ProductImage } from './ProductImage';
import { ProductButtons } from './ProductButtons';
import type { JSX, CSSProperties } from 'react';
import type { InitialValues } from '../interfaces/IInitialValues';

const { Provider } = ProductContext;
export interface Props {
  product: Product;
  // children?: ReactElement | ReactElement[];
  children?: (arg1: ProductCardHandlers) => JSX.Element;
  className?: string;
  style?: CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const ProductCard = ({
  product,
  children,
  className,
  style,
  onChange = () => {},
  value,
  initialValues,
}: Props) => {
  const { increaseBy, count, maxCount, reset, isMaxCountReached } = useProduct({
    product,
    onChange,
    value,
    initialValues,
  });
  return (
    <Provider value={{ increaseBy, count, product, maxValue: maxCount }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children?.({
          count,
          isMaxCountReached,
          maxCount,
          product,
          increaseBy,
          reset,
        })}
      </div>
    </Provider>
  );
};

ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;
