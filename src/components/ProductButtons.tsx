import React, { useCallback, useContext } from 'react';
import { ProductContext } from '../ProductContext';
import styles from '../styles/styles.module.css';
import type { CSSProperties } from 'react';

export interface ProductButtonsProps {
  className?: string;
  style?: CSSProperties;
}

export const ProductButtons = ({ className, style }: ProductButtonsProps) => {
  const { increaseBy, count, maxValue = 0 } = useContext(ProductContext);
  const isMaxCountReached = useCallback(
    () => !!maxValue && count === maxValue,
    [count, maxValue]
  );
  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>
      <div className={styles.countLabel}>{count}</div>
      <button
        disabled={isMaxCountReached()}
        className={`${styles.buttonAdd} ${
          isMaxCountReached() ? styles.disabled : ''
        }`}
        onClick={() => increaseBy(1)}>
        +
      </button>
    </div>
  );
};
