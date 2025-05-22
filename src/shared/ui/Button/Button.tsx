import cls from './Button.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {ButtonHTMLAttributes, memo, ReactNode} from "react";

export enum ButtonTheme {
    PRIMARY = "primary",
    SECONDARY = "secondary",
    CLEAR = 'clear',
}

export enum ButtonRadius{
    DEFAULT = 'default',
    SMALL = 'small',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children?: ReactNode;
    theme?:ButtonTheme;
    radius?: ButtonRadius;
}

export const Button = memo(({className, children,onClick, theme = ButtonTheme.CLEAR, radius = ButtonRadius.DEFAULT, ...otherProps}: ButtonProps) => {
    return (
        <button className={classNames(cls.Button, {}, [className, cls[theme], cls[radius]])} onClick={onClick} {...otherProps}>
            {children}
        </button>
    )
})