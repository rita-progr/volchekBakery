import cls from './MainPage.module.scss';
import {classNames} from "shared/lib/classNames/classNames.ts";
import {MainPageMain} from "./MainPageMain/MainPageMain.tsx";
import {MainPageAsync} from "./MainPageInfo/MainPage.async.tsx";
import {MainPageBakery} from "./MainPageBakery/MainPageBakery.tsx";
import {ServiceList} from "widgets/ServiceList";
import {MainPageMap} from "pages/MainPage/ui/MainPageMap/MainPageMap.tsx";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {RoutePath} from "shared/config/route/routeConfig.tsx";
import Cookies from "js-cookie";
import {USER_COOKIES_KEY} from "shared/const/const.ts";


interface MainPageProps {
    className?: string;
}

const MainPage = ({className}: MainPageProps) => {
    const [token, setToken] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const token = Cookies.get(USER_COOKIES_KEY);
        setToken(token ?? '');
        if(!token){
            navigate(RoutePath.register || RoutePath.login || RoutePath.bakery_auth)
        }
    },[navigate, token])

    return (
        <div className={classNames(cls.MainPage, {}, [className])}>
            <MainPageMain/>
            <MainPageAsync/>
            <MainPageBakery/>
            <ServiceList/>
            <MainPageMap/>
        </div>
    )
}

export default MainPage;