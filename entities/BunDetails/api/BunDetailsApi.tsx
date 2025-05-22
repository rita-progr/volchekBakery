import {rtkApi} from "shared/api/rtkApi.tsx";

const BunDetailsApi = rtkApi.injectEndpoints({
    endpoints:(build)=>({
        getDetailsGoods: build.mutation({
            query:(id)=>({
                url: 'bakery/get-more-info',
                method: 'POST',
                body: {
                    id
                }
            })
        })
    })
})

export const {
    useGetDetailsGoodsMutation
} = BunDetailsApi;