interface OrderInfo{
    name:string;
    quantity: string;
}

export interface HistoryOrderSchema {
    orders: Orders[]
}

export interface Orders {
    id: string;
    orderInfo:OrderInfo[];
    price:string;
    createdAt: string;
}