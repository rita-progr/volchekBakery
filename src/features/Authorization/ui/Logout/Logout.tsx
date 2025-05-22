import cls from './Logout.module.scss';
import {classNames} from "shared/lib/classNames/classNames.ts";
import {MyText, TextSize} from "shared/ui/MyText/MyText.tsx";
import {useLogoutUserMutation} from "../../api/AuthorizationApi.tsx";
import {LoadingPage} from "pages/LoadingPage";
import {useCallback} from "react";
import Cookies from "js-cookie";
import {useNavigate} from "react-router-dom";
import {RoutePath} from "shared/config/route/routeConfig.tsx";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch.tsx";
import {sideBarActions} from "widgets/Sidebar";

interface LogoutProps {
    className?: string;
}

export const Logout = ({className}: LogoutProps) => {

    const [logout, {isLoading}] = useLogoutUserMutation()
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleLogout = useCallback( async () => {
        const accessToken = Cookies.get("token");
        try{
            const response = await logout({accessToken}).unwrap();
            if(response.success){
                Cookies.remove("token");
                dispatch(sideBarActions.toggleCollapsed(false))
                navigate(RoutePath.register);

            }
        }catch(err){
            console.log(err);
        }
    },[logout, navigate])

    if(isLoading){
        return <LoadingPage/>
    }

    return (
        <div className={classNames(cls.Logout, {}, [className])} onClick={handleLogout}>
            <MyText text={'Выйти'} size={TextSize.USERNAME}/>
        </div>
    )
}