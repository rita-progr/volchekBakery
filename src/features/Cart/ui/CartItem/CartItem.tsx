import cls from './CartItem.module.scss';
import {classNames} from "shared/lib/classNames/classNames.ts";
import {GoodsItem} from "../../model/types/CartSchema.ts";
import {MyText, TextSize} from "shared/ui/MyText/MyText.tsx";
import {Button} from "shared/ui/Button/Button.tsx";

interface CartItemProps {
    className?: string;
    item: GoodsItem
}


export const CartItem = ({className, item}: CartItemProps) => {
    return (
        <div className={classNames(cls.CartItem, {}, [className])}>
            <div className={cls.cardItem}>
                {item.photo ? <img src={item.photo} className={cls.img} alt=""/>: (
                    <div className={cls.mockImg}/>
                )}
                <div className={cls.itemDescr}>
                    { <MyText text={item.name} size={TextSize.MEDIUM} className={cls.title}/> }
                    <MyText text={`Бжу  ${item.proteins}/${item.fats}/${item.carbohydrates}`} size={TextSize.MEDIUM}/>
                    {item.calories ? <MyText text={`Ккал  ${item.calories} ккал`} size={TextSize.MEDIUM} /> : null }
                </div>
            </div>
            <div className={cls.pricesBlock}>
                {/*<div className={cls.counts}>*/}
                {/*    <Button>*/}
                {/*        -*/}
                {/*    </Button>*/}
                {/*    <MyText text={item.count?.toString() ?? "0"} size={TextSize.MEDIUM} className={cls.count}/>*/}
                {/*    <Button>*/}
                {/*        +*/}
                {/*    </Button>*/}
                {/*</div>*/}
                <MyText text={`${item.price} p`} size={TextSize.MEDIUM}/>
            </div>

        </div>
    )
}