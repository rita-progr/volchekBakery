import cls from './CardWithPin.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import PushPin from 'shared/assets/icons/pushpin.svg?react'
import PinPain from 'shared/assets/icons/pinPain.svg?react';
import {ReactNode} from "react";

interface CardWithPinProps {
    className?: string;
    children?: ReactNode;
}

export const CardWithPin = ({className, children}: CardWithPinProps) => {
    return (
        <div className={classNames(cls.CardWithPin, {}, [className])}>
            <PushPin className={cls.pin}/>
            <PinPain className={cls.pinPain}/>
            {children}
        </div>
    )
}