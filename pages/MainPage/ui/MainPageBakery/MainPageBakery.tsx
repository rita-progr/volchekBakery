import cls from './MainPageBakery.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {BunItems} from "features/Buns";
import {MyText, TextAlign, TextSize, TextTheme} from "shared/ui/MyText/MyText.tsx";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch.tsx";
import {useCallback} from "react";
import {GoodsItem} from "features/Cart/model/types/CartSchema.ts";
import {CartActions} from "features/Cart";

interface MainPageBakeryProps {
    className?: string;
}

export const MainPageBakery = ({className}: MainPageBakeryProps) => {
    const dispatch = useAppDispatch();

    const addItemToCart = useCallback((item: GoodsItem)=>{
        dispatch(CartActions.addItem(item.id));
        console.log(item);
    },[dispatch])

    return (
        <div className={classNames(cls.MainPageBakery, {}, [className])}>
            <MyText title = {'Наш хлеб'} align={TextAlign.CENTER} size={TextSize.LARGE} theme={TextTheme.SECONDARY} className={cls.text}/>
            <BunItems addItemToCart={addItemToCart} category={'Булочные изделия'} />
        </div>
    )
}