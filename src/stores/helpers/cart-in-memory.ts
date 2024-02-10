import { ProductProps } from "@/utils/data/products";
import { ProductCartProps } from "../cart-store";

export function add(
  products: ProductCartProps[],
  newProduct: ProductProps,
  quantity: number
) {
  const existingProduct = products.find(({ id }) => newProduct.id === id);

  if (existingProduct) {
    return products.map((product) =>
      product.id === existingProduct.id
        ? { ...product, quantity: product.quantity + quantity }
        : product
    );
  }

  return [...products, { ...newProduct, quantity: quantity }];
}

export function remove(products: ProductCartProps[], productRemoveId: string) {
  const updatedProduct = products.map((product) => {
    return product.id === productRemoveId
      ? {
          ...product,
          quantity: product.quantity > 1 ? product.quantity - 1 : 0,
        }
      : product;
  });

  return updatedProduct.filter((product) => product.quantity > 0);
}
