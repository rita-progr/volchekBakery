import {rtkApi} from "shared/api/rtkApi.tsx";

const OrderApi = rtkApi.injectEndpoints({
    endpoints:(build)=>({
        fetchOrder:build.mutation({
            query:({bakeryId, info, price})=>({
                url: '/bakery/add-order',
                method: 'POST',
                body:{
                    bakeryId:bakeryId,
                    info:info,
                    price:price
                }
            })
        })
    })
})

export const {
    useFetchOrderMutation
} = OrderApi