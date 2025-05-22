import {rtkApi} from "shared/api/rtkApi.tsx";
import {HistoryOrderSchema} from "../model/types/HistoryOrderSchema.tsx";

const HistoryOrderApi = rtkApi.injectEndpoints({
    endpoints: (build)=>({
        getOrders: build.query<HistoryOrderSchema, void>({
            query:()=>({
                url: '/client/get-orders',
                method: 'POST',
            })
        }),
    })
})

export const {
    useGetOrdersQuery
} = HistoryOrderApi