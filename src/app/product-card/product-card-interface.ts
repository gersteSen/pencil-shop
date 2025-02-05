export interface ProductCardApi {
  id: string;
  name: string;
  description: string;
  price: number;
  remainingOnStock: number;
  onStock: boolean;
  imageUrl: string;
}
