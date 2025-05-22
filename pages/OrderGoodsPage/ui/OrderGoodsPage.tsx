import cls from './OrderGoods.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {OrderGoods} from "features/OrderGoods";
import {MyText, TextSize} from "shared/ui/MyText/MyText.tsx";
import Back from 'shared/assets/icons/back.svg?react'
import {useNavigate} from "react-router-dom";
import {useCallback} from "react";

interface OrderGoodsProps {
    className?: string;
}

const OrderGoodsPage = ({className}: OrderGoodsProps) => {
    const navigate = useNavigate();

    const onNavigate = useCallback(()=>{
        navigate(-1)
    },[navigate])

    return (
        <div className={classNames(cls.OrderGoods, {}, [className])}>
           <div className={cls.header}>
               <Back onClick = {onNavigate} className = {cls.back} />
               <MyText title = {'Управление товарами'} size={TextSize.XMEDIUM} />
           </div>
            <OrderGoods/>
        </div>
    )
}
export default OrderGoodsPage;