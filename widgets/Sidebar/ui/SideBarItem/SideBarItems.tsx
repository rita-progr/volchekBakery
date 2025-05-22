import cls from './SideBarItems.module.scss';
import {classNames} from "shared/lib/classNames/classNames.ts";
import {ItemsListInterface} from "widgets/Sidebar/model/types/SideBarSchema.ts";
import {Link} from "react-router-dom";
import {MyText, TextSize} from "shared/ui/MyText/MyText.tsx";

interface SideBarItemsProps {
    className?: string;
    item: ItemsListInterface;
    onClick?: () => void;
}

export const SideBarItems = ({className, item, onClick}: SideBarItemsProps) => {
    return (
        <div className={classNames(cls.SideBarItems, {}, [className])} onClick = {onClick}>
            <Link to={item?.path}
            className={cls.allLink}>
                {item.icon ? <item.icon className={cls[item.className]}/>: null}
                <MyText text={item?.title} size={TextSize.USERNAME}/>
            </Link>
        </div>
    )
}