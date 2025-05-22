import {rtkApi} from "shared/api/rtkApi.tsx";
import {Profile} from "../model/types/ProfileSchema.ts";

const ProfileApi = rtkApi.injectEndpoints({
    endpoints: (build)=>({
        getProfileInfo: build.query<Profile, void>({
            query:()=>({
                url: '/client/get-info',
                method: 'POST',
            })
        }),
        setProfileInfo: build.mutation({
            query:({name, photo})=>({
                url: '/client/change-info',
                method: 'POST',
                body:{
                    name: name,
                    photo: photo
                }
            })
        })
    })
})

export const {
    useGetProfileInfoQuery,
    useSetProfileInfoMutation
} = ProfileApi