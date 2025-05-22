import {RouteProps} from "react-router-dom";
import {MainPage} from "pages/MainPage";
import {AdminPanel} from "pages/AdminPanel";
import {AdminOrders} from "pages/AdminOrders";
import {CategoryPage} from "pages/CategoryPage";
import {GoodsPage} from "pages/GoodsPage";
import {GoodsDetailsPage} from "pages/GoodsDetailsPage";
import {LoginPage} from "pages/LoginPage";
import {RegisterPage} from "pages/RegisterPage";
import {CartPage} from "pages/CartPage";
import {ProfilePage} from "pages/ProfilePage";
import {AboutPage} from "pages/AboutPage";
import {OrderPage} from "pages/OrderGoodsPage";
import {HistoryOrderPage} from "pages/HistoryOrderPage";
import {ErrorPage} from "pages/ErrorPage";
import {CodeConfirmPage} from "pages/CodeConfirmPage";
import {AuthBakeryPage} from "pages/AuthBakeryPage";

export enum RouteType {
    MAIN = 'main',
    ADMIN = 'admin',
    ADMIN_ORDERS = 'orders',
    CATALOG = 'catalog',
    GOODS = 'goods',
    GOODS_DETAILS = 'goods_details',
    LOGIN = 'login',
    REGISTER = 'register',
    CART = 'cart',
    PROFILE = 'profile',
    ABOUT = 'about',
    ORDER = 'order',
    HISTORY_ORDER = 'history_order',
    CODE = 'code',
    BAKERY_AUTH = 'bakery_auth',
    NOT_FOUND = 'not-found',
}

export const RoutePath: Record<RouteType,string> = {
    [RouteType.MAIN]: '/',
    [RouteType.ADMIN]: '/admin',
    [RouteType.ADMIN_ORDERS]: '/admin/orders',
    [RouteType.CATALOG]: '/catalog',
    [RouteType.GOODS]: '/catalog/goods/',
    [RouteType.GOODS_DETAILS]: '/catalog/goods_details/', //:id
    [RouteType.LOGIN]: '/login',
    [RouteType.REGISTER]: '/register',
    [RouteType.CODE]: '/code',
    [RouteType.CART]: '/cart',
    [RouteType.PROFILE]: '/profile',
    [RouteType.ABOUT]: '/about',
    [RouteType.ORDER]: '/order',
    [RouteType.HISTORY_ORDER]: '/history_order',
    [RouteType.BAKERY_AUTH]: '/bakery_auth',
    [RouteType.NOT_FOUND]: '*',
}

export const RouteConfig:Record<RouteType, RouteProps> = {
    [RouteType.MAIN]:{
        path:RoutePath.main,
        element:<MainPage/>
    },
    [RouteType.ADMIN]:{
        path:RoutePath.admin,
        element:<AdminPanel/>
    },
    [RouteType.ADMIN_ORDERS]:{
        path:RoutePath.orders,
        element:<AdminOrders/>
    },
    [RouteType.CATALOG]:{
        path:RoutePath.catalog,
        element:<CategoryPage/>
    },
    [RouteType.GOODS]:{
        path:`${RoutePath.goods}:id`,
        element:<GoodsPage/>
    },
    [RouteType.GOODS_DETAILS]:{
        path:`${RoutePath.goods_details}:id`,
        element:<GoodsDetailsPage/>
    },
    [RouteType.LOGIN]:{
        path:`${RoutePath.login}`,
        element:<LoginPage/>
    },
    [RouteType.REGISTER]:{
        path:`${RoutePath.register}`,
        element:<RegisterPage/>
    },
    [RouteType.CART]:{
        path:`${RoutePath.cart}`,
        element:<CartPage/>
    },
    [RouteType.PROFILE]:{
        path:`${RoutePath.profile}`,
        element:<ProfilePage/>
    },
    [RouteType.ABOUT]:{
        path:`${RoutePath.about}`,
        element:<AboutPage/>
    },
    [RouteType.ORDER]:{
        path:`${RoutePath.order}`,
        element:<OrderPage/>
    },
    [RouteType.HISTORY_ORDER]:{
        path:`${RoutePath.history_order}`,
        element:<HistoryOrderPage/>
    },
    [RouteType.CODE]:{
        path:`${RoutePath.code}`,
        element:<CodeConfirmPage/>
    },
    [RouteType.BAKERY_AUTH]:{
        path:`${RoutePath["bakery_auth"]}`,
        element:<AuthBakeryPage/>
    },
    [RouteType.NOT_FOUND]:{
        path:`${RoutePath["not-found"]}`,
        element:<ErrorPage/>
    },
}