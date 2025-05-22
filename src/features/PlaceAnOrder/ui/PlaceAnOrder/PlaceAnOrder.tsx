import cls from './PlaceAnOrder.module.scss';
import {classNames} from "shared/lib/classNames/classNames.ts";
import {Modal} from "shared/ui/Modal/Modal.tsx";
import {MyText, TextAlign, TextSize} from "shared/ui/MyText/MyText.tsx";
import Good from 'shared/assets/icons/good.svg?react'

interface PlaceAnOrderProps {
    className?: string;
    onClose:()=>void;
    isOpen:boolean;
}

export const PlaceAnOrder = ({className, onClose, isOpen}: PlaceAnOrderProps) => {
    return (
        <Modal onClose={onClose} isOpen={isOpen} className={classNames(cls.PlaceAnOrder, {}, [className])}>
            <div className={cls.card}>
                <MyText title={'Заказ оформлен'} size={TextSize.XMEDIUM} align={TextAlign.CENTER}/>
                <Good className={cls.icon}/>
            </div>
        </Modal>
    )
}