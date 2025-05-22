import {rtkApi} from "shared/api/rtkApi.tsx";
import {BakerySchema} from "../model/types/BakerySchema.ts";

const BakeryApi = rtkApi.injectEndpoints({
    endpoints:(build)=>({
        bakeryList: build.query<BakerySchema, void>({
            query:()=>({
                url:'/bakery/get-all-bakery',
                method:'POST',
            })
        })
    })
})

export const {
    useBakeryListQuery
} = BakeryApi;