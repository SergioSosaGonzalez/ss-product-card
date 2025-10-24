# SS Product Card

Este es un paquete de pruebas de despliegue en NPM

### Sergio Sosa

## Ejemplo

```jsx
import { ProductCard } from 'ss-product-card';
```

```jsx
<ProductCard
  product={product}
  key={product.id}
  initialValues={{
    count: 4,
    maxCount: 10,
  }}
>
  {({ reset, increaseBy, count, isMaxCountReached }) => (
    <>
      <ProductCard.Image />
      <ProductCard.Title />
      <ProductCard.Buttons />
    </>
  )}
</ProductCard>
```
