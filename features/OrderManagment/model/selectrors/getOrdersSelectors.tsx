import {StateSchema} from "app/providers/StoreProvider";
import {FilterEnum} from "features/OrderManagment/model/types/orderSchema.ts";

export const getOrderFilter = (state : StateSchema) => state.adminOrder.filter ?? FilterEnum.ALL