
export interface GoodsItem{
    id: string;
    photo?: string;
    name: string;
    price: string;
    count?: string;
    description?: string;
    proteins?: string;
    fats?: string;
    carbohydrates?: string;
    calories?: string;
    composition?: string;
}

export interface DataResponseCart{
    resp: GoodsItem[]
}

export interface CartSchema {
    isLoading: boolean;
    error?: string|null;
    productIds?: string[];
    sum: number;
    info: CartProductWithQuantity[];
}

export interface CartProductWithQuantity {
    name: string;
    quantity: number;
}