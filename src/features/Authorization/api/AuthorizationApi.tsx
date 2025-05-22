import {rtkApi} from "shared/api/rtkApi.tsx";
import Cookies from "js-cookie";
import {USER_COOKIES_KEY} from "shared/const/const.ts";

const AuthorizationApi = rtkApi.injectEndpoints({
    endpoints:(build) => ({
        registerUser: build.mutation({
            query:({email, password})=>({
                url: '/auth/sign-up',
                method: 'POST',
                body: {
                    "info":{
                        email,
                        password
                    }
                },

            })
        }),
        fetchConfirmCode: build.mutation({
            query: ({email, code})=>({
                url:'/auth/confirm-code',
                method: 'POST',
                body: {email, code}
            }),
            async onQueryStarted(_, { queryFulfilled }) {
                try {
                    const { meta } = await queryFulfilled;

                    const authHeader = meta?.response?.headers.get('Authorization');

                    if (authHeader && authHeader.startsWith('Bearer ')) {
                        const token = authHeader.slice(7);
                        Cookies.remove(USER_COOKIES_KEY);
                        Cookies.set(USER_COOKIES_KEY, token);

                    }
                } catch (error) {
                    console.error('Ошибка логина:', error);
                }
            }
        })
    ,
    loginUser: build.mutation({
            query:({email, password})=>({
                url: '/auth/login',
                method: 'POST',
                body: {
                    email,
                    password
                }
            }),
            async onQueryStarted(_, { queryFulfilled }) {
                try {
                    const { meta } = await queryFulfilled;

                    const authHeader = meta?.response?.headers.get('Authorization');

                    if (authHeader && authHeader.startsWith('Bearer ')) {
                        const token = authHeader.slice(7);
                        Cookies.remove(USER_COOKIES_KEY);
                        Cookies.set(USER_COOKIES_KEY, token);
                        console.log(token);
                    }
                } catch (error) {
                    console.error('Ошибка логина:', error);
                }
            }
        }),
        logoutUser: build.mutation({
            query:({accessToken})=>({
                url: '/auth/logout',
                method: 'POST',
                body:{
                    accessToken: accessToken
                }
            })
        }),
        loginBakery: build.mutation({
            query:({bakeryId, password})=>({
                url: '/auth/immediately-login',
                method: 'POST',
                body:{bakeryId, password}
            }),
            async onQueryStarted(_, { queryFulfilled }) {
                try {
                    const { meta } = await queryFulfilled;

                    const authHeader = meta?.response?.headers.get('Authorization');

                    if (authHeader && authHeader.startsWith('Bearer ')) {
                        const token = authHeader.slice(7);
                        Cookies.remove(USER_COOKIES_KEY);
                        Cookies.set(USER_COOKIES_KEY, token);
                        console.log(token);
                    }
                } catch (error) {
                    console.error('Ошибка логина:', error);
                }
            }
        })
    })
})

export const {
    useRegisterUserMutation,
    useFetchConfirmCodeMutation,
    useLogoutUserMutation,
    useLoginUserMutation,
    useLoginBakeryMutation
} = AuthorizationApi