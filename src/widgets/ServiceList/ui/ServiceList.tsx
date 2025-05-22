import cls from './ServiceList.module.scss';
import {classNames} from "shared/lib/classNames/classNames.ts";
import backgr from 'shared/assets/images/organic-whole-grain-baguette-placed-linen-fabric 1.jpg';
import Bread from 'shared/assets/icons/bread.svg?react';
import Cake from 'shared/assets/icons/cake.svg?react';
import Cupcake from 'shared/assets/icons/cupcake.svg?react';
import IceCream from 'shared/assets/icons/iceCream.svg?react'
import Coffee from 'shared/assets/icons/coffee.svg?react';
import {MyText, TextAlign, TextSize, TextTheme} from "shared/ui/MyText/MyText.tsx";
import {Link} from "react-router-dom";
import {RoutePath} from "shared/config/route/routeConfig.tsx";


interface ServiceListProps {
    className?: string;
}

interface ItemIcons{
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    title: string;
    link: string;
}

const items: ItemIcons[] = [
    {
        icon: Bread,
        title: 'Булочные изделия',
        link:'bread'
    },
    {
        icon: Cake,
        title: 'Торты, пироги',
        link:'cake'
    },
    {
        icon: Cupcake,
        title: 'Пирожные',
        link:'cupcake'
    },
    {
        icon: IceCream,
        title: 'Мороженое',
        link:'iceCream'
    },
    {
        icon: Coffee,
        title: 'Напитки',
        link:'coffee'
    },
]

export const ServiceList = ({className}: ServiceListProps) => {
    return (
        <div className={classNames(cls.ServiceList, {}, [className])}>
            <div className={cls.container}>
                <MyText title={'Наши услуги'}
                        align={TextAlign.CENTER}
                        size={TextSize.LARGE}
                        theme={TextTheme.SECONDARY}
                        className={cls.title}/>
                <div className={cls.itemsService}>
                    {items.map(item => (
                        <Link to = {`${RoutePath.goods}${item.link}`} key={item.title} className={cls.item}>
                            <item.icon className={cls.icon}/>
                            <MyText text={item.title} align={TextAlign.CENTER}/>
                        </Link>
                    ))}
                </div>
            </div>

        </div>
    )
}