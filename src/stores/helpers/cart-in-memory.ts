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
