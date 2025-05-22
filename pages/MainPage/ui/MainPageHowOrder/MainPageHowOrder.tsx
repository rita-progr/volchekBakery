import cls from './MainPageHowOrder.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {MyText, TextAlign, TextSize, TextTheme} from "shared/ui/MyText/MyText.tsx";

interface MainPageHowOrderProps {
    className?: string;
}

export const MainPageHowOrder = ({className}: MainPageHowOrderProps) => {
    return (
        <div className={classNames(cls.MainPageHowOrder, {}, [className])}>
            <MyText title = {'Как заказать товар?'}
                    size={TextSize.LARGE}
                    align={TextAlign.CENTER}
                    theme = {TextTheme.SECONDARY}
            />

        </div>
    )
}