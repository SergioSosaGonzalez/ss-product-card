import React, { useContext } from 'react';
import { ProductContext } from '../ProductContext';
import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';
import type { CSSProperties } from 'react';

export interface ProductImageProps {
  img?: string;
  className?: string;
  style?: CSSProperties;
}

export const ProductImage = ({
  img = '',
  className,
  style,
}: ProductImageProps) => {
  const { product } = useContext(ProductContext);
  let imgToShow: string;
  if (img) {
    imgToShow = img;
  } else if (product.img) {
    imgToShow = product.img;
  } else {
    imgToShow = noImage;
  }
  return (
    <img
      src={imgToShow}
      alt='Product'
      className={`${styles.productImg} ${className}`}
      style={style}
    />
  );
};
