import { BaseModel } from "./BaseModel";

export interface ProductModel extends BaseModel{
    id: number;
    name: string;
    category_id: number;
    weight: number;
    height: number;
    price: number;
    in_stock: boolean;
    quantity: number;
}
