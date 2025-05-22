export interface OrderManagmentSchema {
    isLoading?: boolean;
    error?: string | null;
    orders: IOrder[];
}

export interface IOrder{
    id: string;
    createdAt?: string;
    orderInfo?: OrderInfo[];
    price: number;
    status: string;
}

export interface OrderInfo {
    name:string;
    price:string;
    quantity: string;
}

export interface OrderSchema{
    filter?: FilterEnum
}

export enum FilterEnum{
    ALL = 'Все заказы',
    PENDING = 'В процессе',
    READY = 'Готовы'
}

export enum StatusEnum{
    READY = 'Готов',
    PENDING = 'В процессе'

}
