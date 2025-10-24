import type { JSX, ReactElement } from 'react';
import type { Props as ProductCardProps } from '../components/ProductCard';
import type { ProductTitleProps } from '../components/ProductTitle';
import type { ProductImageProps } from '../components/ProductImage';
import type { ProductButtonsProps } from '../components/ProductButtons';

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductProps {
  product: Product;
  children?: ReactElement | ReactElement[];
}

export interface ProductContextProps {
  increaseBy: (value: number) => void;
  count: number;
  product: Product;
  maxValue?: number;
}

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps): JSX.Element;
  Title: (Props: ProductTitleProps) => JSX.Element;
  Image: (Props: ProductImageProps) => JSX.Element;
  Buttons: (Props: ProductButtonsProps) => JSX.Element;
}

export interface onChangeArgs {
  product: Product;
  count: number;
}
export interface ProductInCard extends Product {
  count: number;
}

export interface ProductCardHandlers {
  count: number;
  isMaxCountReached: boolean;
  maxCount?: number;
  product: Product;
  increaseBy: (value: number) => void;
  reset: () => void;
}
