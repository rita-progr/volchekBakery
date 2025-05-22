import cls from './AdminPanel.module.scss';
import {classNames} from "shared/lib/classNames/classNames.ts";
import {RoutePath} from "shared/config/route/routeConfig.tsx";
import {MyText, TextAlign, TextSize} from "shared/ui/MyText/MyText.tsx";
import {SelectBakery} from "../../../entities/Bakery";
import {Link} from "react-router-dom";

interface AdminPanelProps {
    className?: string;
}

interface AdminPanelItem{
    path: string;
    title: string;
}

const items: AdminPanelItem[] = [
    {
        path: RoutePath.orders,
        title: 'Заказы'
    },
    {
        path: RoutePath.order,
        title: 'Управление товарами'
    },
]

const AdminPanel = ({className}: AdminPanelProps) => {
    return (
        <div className={classNames(cls.AdminPanel, {}, [className])}>
            <MyText title={'Админка'} size={TextSize.XLARGE}/>
            <div className={cls.AdminPanelItems}>
                {items.map((item=>(
                    <Link to={item.path} key={item.title} className={cls.itemCard}>
                            <MyText text={item.title} size={TextSize.XLARGE} align={TextAlign.CENTER}/>
                    </Link>
                )))}
            </div>


        </div>
    )
}

export default AdminPanel;