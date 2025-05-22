export interface ItemCard{
    id: string;
    name: string;
    price: number;
    photo?: string;
}

export interface ItemDataCard{
    products: ItemCard[];
}