import {rtkApi} from "shared/api/rtkApi.tsx";
import {DataResponseCart} from "features/Cart/model/types/CartSchema.ts";

const CardApi = rtkApi.injectEndpoints({
    endpoints: (build)=>({
        getCart: build.query<DataResponseCart,string[]>({
            query:(idProduct)=>({
                url: '/bakery/get-bucket',
                method: 'POST',
                body:{
                    idProduct
                }
            })
        })
    })
})

export const {
    useGetCartQuery
} = CardApi