import cls from './OrderItem.module.scss';
import {classNames} from "shared/lib/classNames/classNames";

interface OrderItemProps {
    className?: string;
    img?: string;
}

export const OrderItem = ({className, img}: OrderItemProps) => {
    return (
        <div className={classNames(cls.OrderItem, {}, [className])}>
            <img src="" alt=""/>
        </div>
    )
}