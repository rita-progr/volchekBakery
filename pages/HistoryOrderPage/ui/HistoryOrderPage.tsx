import cls from './HistoryOrderPage.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {HistoryOrder} from "features/HistoryOrder";
import {MyText, TextSize} from "shared/ui/MyText/MyText.tsx";
import Back from 'shared/assets/icons/back.svg?react'

import {useCallback} from "react";
import {useNavigate} from "react-router-dom";

interface HistoryOrderPageProps {
    className?: string;
}

const HistoryOrderPage = ({className}: HistoryOrderPageProps) => {
    const navigate = useNavigate();
    const onNavigate = useCallback(()=>{
        navigate(-1)
    },[navigate])

    return (
        <div className={classNames(cls.HistoryOrderPage, {}, [className])}>

            <MyText title={'Мои заказы'} size={TextSize.LARGE} className={cls.title}/>
            <div className={cls.flex} onClick={onNavigate}>
                <Back className={cls.back}/>
            </div>
            <HistoryOrder/>
        </div>
    )
}

export default HistoryOrderPage;