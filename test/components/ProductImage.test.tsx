import React from 'react';
import { render, screen } from '@testing-library/react';

import { ProductImage, ProductCard } from '../../src/components';
import { product2 } from '../data/products';

describe('ProductImage', () => {
  it('should show component with custom image', () => {
    render(<ProductImage img={product2?.img} />);
    const titleElement = screen.getByTestId('product-image');
    expect(titleElement.getAttribute('src')).toBe(product2.img);
  });
  it('should show a default image when you do not pass an image property ', () => {
    render(
      <ProductCard product={product2}>{() => <ProductImage />}</ProductCard>
    );

    const titleElement = screen.getByTestId('product-image');
    expect(titleElement.getAttribute('src')).toBe(product2.img);
  });
});
