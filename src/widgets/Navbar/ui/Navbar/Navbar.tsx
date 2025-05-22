import cls from './Navbar.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {Burger} from "../Burger/Burger.tsx";
import Logo from 'shared/assets/icons/logo.svg?react';
import {useCallback} from "react";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch.tsx";
import {sideBarActions} from "widgets/Sidebar";
import {useSelector} from "react-redux";
import {getCollapsed} from "widgets/Sidebar/model/selectors/getSidebar.ts";
import Card from 'shared/assets/icons/card.svg?react'
import {Link, useNavigate} from "react-router-dom";
import {RoutePath} from "shared/config/route/routeConfig.tsx";
import {USER_COOKIES_KEY} from "shared/const/const.ts";
import Cookies from "js-cookie";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    const token = Cookies.get(USER_COOKIES_KEY)
    const collapsed = useSelector(getCollapsed)
    const dispatch = useAppDispatch();
    const navigate = useNavigate()

    const onToggleCollapsed = useCallback(() => {
        dispatch(sideBarActions.toggleCollapsed(!collapsed))
    },[collapsed, dispatch])

    const onMainPage = useCallback(()=>{
        navigate(RoutePath.main)
    },[navigate])

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Logo className = {cls.logo} onClick = {onMainPage}/>
            {token && token.length > 0 && (
                <div className={cls.flex}>
                    <Link to={RoutePath.cart}>
                        <Card className={cls.card}/>
                    </Link>
                    <Burger onClick={onToggleCollapsed} toggle={collapsed}/>
                </div>
            )}

        </div>
    )
}