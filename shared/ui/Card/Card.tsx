import cls from './Card.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {MyText, TextAlign, TextSize} from "shared/ui/MyText/MyText.tsx";
import {CartIcon} from "shared/ui/CartIcon/CartIcon.tsx";



interface CardProps {
    className?: string;
    img?: string;
    title: string;
    description: string;
    addItemToCart: () => void;
}

export const Card = ({className, img, description, title, addItemToCart}: CardProps) => {
    return (
        <div className={classNames(cls.Card, {}, [className])}>
            <div className={cls.img}>
                {img && <img src={img} alt=""/>}
            </div>
            <div className={cls.texts}>
                <MyText text={title} className={cls.title} size={TextSize.XMEDIUM} align={TextAlign.LEFT}/>
                <MyText text={description} className={cls.text} size={TextSize.MEDIUM}/>
            </div>
         <CartIcon onClick = {addItemToCart} className={cls.icon}/>
        </div>
    )
}