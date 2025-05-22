import cls from './HistoryItem.module.scss';
import {classNames} from "shared/lib/classNames/classNames.ts";
import bun from "shared/assets/images/bun.png";
import {MyText, TextSize} from "shared/ui/MyText/MyText.tsx";
import {formatDate} from "../../hooks/formatDate.tsx";

interface HistoryItemProps {
    className?: string;
    price: string;
    date: string;
    ordersInfo: {
        quantity: string;
        name: string;
    }[]

}

export const HistoryItem = ({className, date, price, ordersInfo}: HistoryItemProps) => {
    return (
        <div className={classNames(cls.HistoryItem, {}, [className])}>
            <img src={bun} alt="" className={cls.bunItem}/>
            <div className={cls.order}>
                <MyText text={`Дата создания: ${formatDate(date)}`} size={TextSize.SMALL}/>
                <div className={cls.orders}>
                    <MyText text={`Состав заказа: `} size={TextSize.MEDIUM}/>
                    {ordersInfo.length > 0 && ordersInfo.map(order => (
                        <div className={cls.title}>
                            <MyText text = {order.name} size={TextSize.SMALL}/>
                            <MyText text = {`-  ${order.quantity} шт`} size={TextSize.SMALL}/>
                        </div>
                    ))}
                </div>

                <MyText text={`${price} р`} size={TextSize.MEDIUM}/>
            </div>
        </div>
    )
}