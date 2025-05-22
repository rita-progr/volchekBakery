import cls from './AdminOrders.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {OrderFilter, OrdersList} from "features/OrderManagment";
import {MyText, TextAlign, TextSize} from "shared/ui/MyText/MyText.tsx";

interface AdminOrdersProps {
    className?: string;
}

const AdminOrders = ({className}: AdminOrdersProps) => {
    return (
        <div className={classNames(cls.AdminOrders, {}, [className])}>
            <MyText title={`Заказы пекарни`} size={TextSize.XLARGE} align={TextAlign.CENTER}/>
            <OrderFilter/>
            <OrdersList/>
        </div>
    )
}
export default AdminOrders;