import cls from './MainPageInfo.module.scss';
import {classNames} from "shared/lib/classNames/classNames";

import {MyText, TextAlign, TextSize} from "shared/ui/MyText/MyText.tsx";
import {Button, ButtonRadius, ButtonTheme} from "shared/ui/Button/Button.tsx";
import {useCallback, useRef, useState} from "react";
import {useObserver} from "shared/lib/hooks/useObserver.ts";
import {useNavigate} from "react-router-dom";
import {RoutePath} from "shared/config/route/routeConfig.tsx";

interface MainPageInfoProps {
    className?: string;
}

const MainPageInfo = ({className}: MainPageInfoProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    useObserver({
        ref:ref,
        setIsVisible: setIsVisible
    })

    const onAnotherPage = useCallback((nav: string) => {
        navigate(nav);
    },[navigate])

    return (
        <div className={classNames(cls.MainPageInfo, {}, [className])} ref={ref}>
            <div className={cls.img}>
                {/*<img src={imageBakery} alt=""/>*/}
                <div className={cls.texts}>
                    <MyText
                            text = {'Вымесить. Проверить. Испечь.'}
                            size={TextSize.LARGE}
                            align={TextAlign.CENTER}/>
                    <MyText className={cls.text}
                            text = {'Свежий хлеб — это не просто продукт, это маленькое чудо, которое начинается с рассветом. Мы печем наш хлеб, ароматные рогалики и нежные сладости ежедневно, чтобы вы чувствовали тепло и заботу в каждом кусочке.'}
                            size = {TextSize.MEDIUM}
                            align={TextAlign.CENTER}/>
                    <div className={cls.btns}>
                        <Button theme={ButtonTheme.PRIMARY}
                                radius = {ButtonRadius.SMALL}
                                className={classNames(cls.btn,{[cls.btnOne]:isVisible})}
                                onClick={()=>onAnotherPage(RoutePath.catalog)}
                        >
                            <MyText text = {'Посмотреть полное меню'}/>
                        </Button>
                        <Button
                            theme={ButtonTheme.SECONDARY}
                                onClick={()=>onAnotherPage(RoutePath.cart)}
                                className={classNames(cls.btn,{[cls.btnTwo]:isVisible},)}>
                            <MyText text = {'Заказать сейчас'} align={TextAlign.CENTER}/>
                        </Button>
                    </div>
                </div>
                <div className={cls.textFooter}>
                    <MyText
                        text={'Потому что свежесть — это вкус, а качество — наша привычка.'}
                        size={TextSize.EXTRA_SMALL}
                        align={TextAlign.CENTER}
                    />
                </div>
            </div>
        </div>
    )
}

export default MainPageInfo;