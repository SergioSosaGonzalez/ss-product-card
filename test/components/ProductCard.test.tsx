import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { ProductCard } from '../../src/components';
import { product1 } from '../data/products';

describe('ProductCard', () => {
  it('should render without errors', () => {
    render(
      <ProductCard product={product1}>{() => <h1>Hola mundo</h1>}</ProductCard>
    );

    const titleElement = screen.getByText('Hola mundo');
    expect(titleElement).toBeDefined();
  });

  it('should increase counter', () => {
    render(
      <ProductCard product={product1}>
        {({ count, increaseBy }) => (
          <>
            <span data-testid="count">{count}</span>
            <button data-testid="increase-button" onClick={() => increaseBy(1)}>
              Increase
            </button>
          </>
        )}
      </ProductCard>
    );
    // Verificar el contador inicial
    const countElement = screen.getByTestId('count');
    expect(countElement.textContent).toBe('0');
    // Simular el clic
    const button = screen.getByTestId('increase-button');
    fireEvent.click(button);
    expect(countElement.textContent).toBe('1');
  });
});
