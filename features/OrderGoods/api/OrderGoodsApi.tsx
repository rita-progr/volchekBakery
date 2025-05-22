import {rtkApi} from "shared/api/rtkApi.tsx";
import {ItemDataCard} from "features/OrderGoods/model/types/OrderGoodsSchema.ts";

const OrderGoodsApi = rtkApi.injectEndpoints({
    endpoints:(build)=>({
        getOrdersForAdmin: build.query<ItemDataCard, void>({
            query:()=>({
                url: '/bakery/get-all-bakery-product',
                method: 'POST',
            })
        }),
        addProduct: build.mutation({
            query:({
                name,
                photo,
                price,
                description,
                composition,
                carbohydrates,
                proteins,
                fats,
                calories}) =>({
                url: 'bakery/add-product',
                method: 'POST',
                body:{
                    name,
                    photo,
                    price,
                    description,
                    composition,
                    carbohydrates,
                    proteins,
                    fats,
                    calories
                }
            })
        }),
        deleteProduct: build.mutation({
            query: ({id})=>({
                url: 'bakery/delete-product',
                method: 'POST',
                body: {
                    id
                }
            })
        })

    })
})

export const {
    useGetOrdersForAdminQuery,
    useAddProductMutation,
    useDeleteProductMutation
} = OrderGoodsApi