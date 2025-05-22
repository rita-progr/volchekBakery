import {rtkApi} from "shared/api/rtkApi.tsx";
import {OrderManagmentSchema} from "features/OrderManagment/model/types/orderSchema.ts";

export const OrderManagmentApi = rtkApi.injectEndpoints({
    endpoints: (build)=>({
        getAllOrders: build.query<OrderManagmentSchema, void>({
            query:()=>({
                url: '/bakery/get-all-orders',
                method: 'POST',
            })
        }),
        changeStatus: build.mutation({
            query:({id,status})=>({
                url: '/bakery/change-order-status',
                method: 'POST',
                body: {
                    id,
                    status,
                }
            })
        })
    })
})

export const { useGetAllOrdersQuery, useChangeStatusMutation} = OrderManagmentApi;