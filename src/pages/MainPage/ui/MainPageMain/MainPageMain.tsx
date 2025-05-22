import cls from './MainPageMain.module.scss';
import {MyText, TextSize} from "shared/ui/MyText/MyText.tsx";
import {Button, ButtonRadius, ButtonTheme} from "shared/ui/Button/Button.tsx";
import Logo from 'shared/assets/icons/logo.svg?react';
import wheatImg from 'shared/assets/images/mainPage/wheat.png'

import {RoutePath} from "shared/config/route/routeConfig.tsx";
import {useNavigate} from "react-router-dom";
import {useCallback} from "react";

export const MainPageMain = () => {
    const navigate = useNavigate();
    const onNavigate = useCallback(() => {
        navigate(RoutePath.about)
        console.log('click')
    },[navigate])

    return (
        <div className={cls.MainPageMain}>
            <div className={cls.title}>
                <div className={cls.img}>
                    <img src={wheatImg} alt=""/>
                </div>
                <div className={cls.img2}>
                    <img src={wheatImg} alt=""/>
                </div>
                <div className={cls.img3}>
                    <img src={wheatImg} alt=""/>
                </div>
                <div className={cls.img4}>
                    <img src={wheatImg} alt=""/>
                </div>
                <Logo className={cls.logo}/>
                <MyText text={'Булочная Вольчека'} size={TextSize.LARGE} className={cls.text}/>
                <MyText text={'Радовать вас и ваших близких - наш конёк !'}/>
                    <Button theme={ButtonTheme.PRIMARY}
                            onClick={onNavigate}
                            className={cls.btn}
                            radius={ButtonRadius.SMALL}
                    ><MyText text={'Читать подробнее'}
                             size={TextSize.EXTRA_SMALL}
                             className={cls.textBtn}/>
                    </Button>

            </div>
        </div>
    )
}