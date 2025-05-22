export enum Category {
    BUN = 'bun',
    BREAD = 'bread',
    CUPCAKES = 'cupcakes',
}

export interface BunsSchema {
    isLoading: boolean;
    error: string;
    category?: Category
}