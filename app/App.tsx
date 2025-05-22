import {Navbar} from "widgets/Navbar";
import './styles/index.scss'
import {RouteProvider} from "app/providers/RouteProvider";
import {SideBar} from "widgets/Sidebar";
import {Footer} from "widgets/Footer/ui/Footer.tsx";
import {USER_COOKIES_KEY} from "shared/const/const.ts";
import Cookies from "js-cookie";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {RoutePath} from "shared/config/route/routeConfig.tsx";

export const App = () => {
    const [token, setToken] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const token = Cookies.get(USER_COOKIES_KEY);
        setToken(token ?? '');
    },[token])

    console.log(token);
    // if(!token){
    //     navigate(RoutePath.register || RoutePath.login || RoutePath.bakery_auth)
    // }

    return (
        <div>
            <Navbar/>
            <RouteProvider/>
            {token && (
                <SideBar/>
            )}
            <Footer/>
        </div>
    )
}