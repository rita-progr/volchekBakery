import {StateSchema} from "app/providers/StoreProvider";

export const getSum = (state: StateSchema) => state.cart.sum ?? 0;
export const getGoods = (state: StateSchema) => state.cart.info ?? [];