import React, { useEffect, useRef } from 'react';
import type { onChangeArgs, Product } from '../interfaces/IProducts';
import type { InitialValues } from '../interfaces/IInitialValues';

interface UseProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const useProduct = ({
  product,
  onChange,
  value = 0,
  initialValues,
}: UseProductArgs) => {
  const [count, setCount] = React.useState<number>(
    initialValues?.count || value
  );
  const isMounted = useRef(false);
  const increaseBy = (value: number) => {
    const { maxCount } = initialValues || {};
    const newValue = Math.max(count + value, 0);
    if (maxCount && newValue > maxCount) return;
    setCount(newValue);
    onChange?.({
      product,
      count: newValue,
    });
  };

  const reset = () => {
    setCount(initialValues?.count || value);
  };
  useEffect(() => {
    if (!isMounted.current) return;
    setCount(value);
  }, [value]);

  useEffect(() => {
    isMounted.current = true;
  }, []);
  return {
    count,
    increaseBy,
    isMaxCountReached:
      !!initialValues?.maxCount && count === initialValues.maxCount,
    maxCount: initialValues?.maxCount,
    reset,
  };
};
