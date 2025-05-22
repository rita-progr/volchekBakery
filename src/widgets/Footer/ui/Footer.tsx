import cls from './Footer.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {MyText, TextSize} from "shared/ui/MyText/MyText.tsx";
import {RoutePath} from "shared/config/route/routeConfig.tsx";
import {Link} from "react-router-dom";

interface FooterProps {
    className?: string;
}

interface FooterState {
    title: string;
    link: string;
}

const catalog:FooterState[] = [{
    title: 'Булочные изделия',
    link: 'bread'
},
    {
        title: 'Торты, пироги',
        link: 'cake'
    },
    {
        title: 'Пирожные',
        link: 'cupcake'
    },

    {
        title: 'Мороженое',
        link: 'iceCream'
    },
    {
        title: 'Напитки',
        link: 'coffee'
    }]

export const Footer = ({className}: FooterProps) => {
    return (
        <div className={classNames(cls.Footer, {}, [className])}>
            <div className={cls.footerItem}>
                <MyText text={"Каталог"} size={TextSize.MEDIUM} className={cls.title}/>
                {catalog.map(ct => (
                    <Link to={`${RoutePath.goods}${ct.link}`}>
                        <MyText text={ct.title} key={ct.title} size={TextSize.SMALL}/>
                    </Link>
                ))}
            </div>
            <div className={cls.footerItem}>
                <MyText text={"Наша компания"} size={TextSize.MEDIUM} className={cls.title}/>
                <Link to={RoutePath.about}>
                    <MyText text={'О нас'} size={TextSize.SMALL}/>
                </Link>
            </div>
            <div className={cls.footerItem}>
                    <MyText text={"Контакты"} size={TextSize.MEDIUM} className={cls.title}/>
                    <MyText text={'+7 927 710-95-23'}  size={TextSize.SMALL}/>
                    <MyText text={'feedback@mail.ru'}  size={TextSize.SMALL}/>
            </div>
        </div>
    )
}