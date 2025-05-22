import cls from './MainPageMap.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {MyText, TextAlign, TextSize, TextTheme} from "shared/ui/MyText/MyText.tsx";

interface MainPageMapProps {
    className?: string;
}

export const MainPageMap = ({className}: MainPageMapProps) => {
    return (
        <div className={classNames(cls.MainPageMap, {}, [className])}>
            <MyText title = {'Где мы находимся?'} size={TextSize.LARGE} align={TextAlign.CENTER} theme = {TextTheme.SECONDARY}/>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d138106.1553273403!2d30.142642439563016!3d59.92397193004476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z0LHRg9C70L7Rh9C90YvQtSDQstC-0LvRjNGH0LXQutCwINC90LAg0LrQsNGA0YLQtSDRgdC_0LHCoA!5e0!3m2!1sru!2sru!4v1746766984730!5m2!1sru!2sru"
                className={cls.map} loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}