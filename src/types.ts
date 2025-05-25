export interface Product {
  id: string | number;
  title: string;
  description: string;
  thumbnail: string;
  price: number;
  discountPercentage: number;
}

export interface ProductListResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}
