export interface Goods{
    name: string;
    quantity: string;
}

export interface PlaceAnOrderSchema {
    price?:string;
    info: Goods[];
}