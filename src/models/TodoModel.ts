import { BaseModel } from "./BaseModel";

export interface TodoModel extends BaseModel{
    id: string;
    name: string;
    status: string;
}