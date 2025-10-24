import React from 'react';
import { render, screen } from '@testing-library/react';

import { ProductTitle, ProductCard } from '../../src/components';
import { product1 } from '../data/products';

describe('ProductTitle', () => {
  it('should show component with custom title', () => {
    render(<ProductTitle title="Custom title" />);
    const titleElement = screen.getByText('Custom title');
    expect(titleElement).toBeDefined();
  });
  it('should show component with product name', () => {
    render(
      <ProductCard product={product1}>{() => <ProductTitle />}</ProductCard>
    );
    const titleElement = screen.getByText('Product 1');
    expect(titleElement).toBeDefined();
  });
});
