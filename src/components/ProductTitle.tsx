import React, { useContext } from 'react';
import { ProductContext } from '../ProductContext';
import styles from '../styles/styles.module.css';
import type { CSSProperties } from 'react';

export interface ProductTitleProps {
  title?: string;
  className?: string;
  style?: CSSProperties;
}

export const ProductTitle = ({
  title,
  className,
  style,
}: ProductTitleProps) => {
  const { product } = useContext(ProductContext);
  const titleToShow = title
    ? title
    : product.title
    ? product.title
    : 'No title';
  return (
    <span className={`${styles.productDescription} ${className}`} style={style}>
      {titleToShow}
    </span>
  );
};
