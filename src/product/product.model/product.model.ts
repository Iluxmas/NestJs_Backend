export class ProductModel {
  _id: string;
  image: string;
  title: string;
  price: number;
  oldPrice: number;
  credit: number;
  rating: number;
  description: string;
  pros: string;
  cons: string;
  category: string[];
  tags: string;
  characteristics: {
    [key: string]: string;
  };
}
