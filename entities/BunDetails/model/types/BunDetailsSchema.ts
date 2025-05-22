import {GoodsItem} from "features/Cart";

export interface BunDetailsSchema {
    isLoading?: boolean;
    error?: string;
    bun?: GoodsItem;
}