import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {USER_COOKIES_KEY} from "shared/const/const.ts";
import Cookies from 'js-cookie';

const baseUrl = "http://87.228.90.160:8080";

export const rtkApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl,
        prepareHeaders: headers => {
            const token = Cookies.get(USER_COOKIES_KEY || '');
            if(token){
                headers.set('Authorization',`Bearer ${token}`);
            }
        } }),
    endpoints: (build) => ({
    }),
})
