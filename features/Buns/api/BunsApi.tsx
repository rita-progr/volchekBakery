import {rtkApi} from "shared/api/rtkApi.tsx";


const BunsApi = rtkApi.injectEndpoints({
    endpoints: (build)=>({
        getBuns: build.mutation({
            query:(category)=>({
                url: '/bakery/get-menu',
                method: 'POST',
                body:{
                    page: 1,
                    category
                }
            })
        }),
    })
})

export const {
    useGetBunsMutation
} = BunsApi