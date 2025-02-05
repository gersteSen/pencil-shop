import { ProductCardApi } from '../product-card/product-card-interface';

export interface Checkout {
  product: ProductCardApi;
  amount: number;
}
