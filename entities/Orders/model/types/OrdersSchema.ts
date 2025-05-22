export interface Order {
    image?: string;
    composition?: string;
    time?: string;
}

export interface OrdersSchema {
    isLoading?: boolean;
    error?: string | null;
    orders?: Order[];
}