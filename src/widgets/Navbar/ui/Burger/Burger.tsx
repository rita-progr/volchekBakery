import cls from './Burger.module.scss';
import {classNames} from "shared/lib/classNames/classNames";

interface BurgerProps {
    className?: string;
    onClick?: () => void;
    toggle: boolean;
}

export const Burger = ({className, onClick , toggle}: BurgerProps) => {
    return (
        <div className={classNames(cls.Burger, {[cls.toggle]:toggle}, [className])} onClick={onClick}>
            <span className={cls.line}></span>
            <span className={cls.line}></span>
            <span className={cls.line}></span>
        </div>
    )
}