import {rtkApi} from "shared/api/rtkApi.tsx";

const PlaceAnOrderApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        setOrder: build.mutation({
            query: (info) => ({
                url: '/client/get-info',
                method: 'POST',
                body:{
                    bakeryId: info.id,
                    info: info.goods,
                    price: info.price
                }
            })
        })
    })
})

export const {
    useSetOrderMutation
} = PlaceAnOrderApi