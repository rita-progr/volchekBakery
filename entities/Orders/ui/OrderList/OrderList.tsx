import cls from './OrderList.module.scss';
import {classNames} from "shared/lib/classNames/classNames";

interface OrderListProps {
    className?: string;
}

export const OrderList = ({className}: OrderListProps) => {
    return (
        <div className={classNames(cls.OrderList, {}, [className])}>

        </div>
    )
}