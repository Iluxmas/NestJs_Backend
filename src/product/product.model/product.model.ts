import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

class ProductCharacteristic {
  @prop()
  name: string;

  @prop()
  value: string;
}

export interface ProductModel extends Base {}
export class ProductModel extends TimeStamps {
  @prop()
  image: string;

  @prop()
  title: string;

  @prop()
  price: number;

  @prop()
  oldPrice: number;

  @prop()
  credit: number;

  @prop()
  rating: number;

  @prop()
  description: string;

  @prop()
  pros: string;

  @prop()
  cons: string;

  @prop({ type: () => [String] })
  category: string[];

  @prop({ type: () => [String] })
  tags: string[];

  @prop({ type: () => [ProductCharacteristic] })
  characteristics: ProductCharacteristic[];
}
