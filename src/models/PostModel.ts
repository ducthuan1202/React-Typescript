import { BaseModel } from "./BaseModel";

export interface PostModel extends BaseModel{
    userId: number;
    id: number;
    title: string;
    body: string;    
}
