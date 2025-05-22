import cls from './MyText.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {memo} from "react";

export enum TextTheme {
    PRIMARY = 'primary',
    INVERTED_PRIMARY = 'inverted_primary',
    SECONDARY = 'secondary',
    OUTLINED = 'outlined',
    ERROR = 'error',
}
export enum TextAlign{
    LEFT = 'left',
    RIGHT = 'right',
    CENTER = 'center',
}
export enum TextSize{
    EXTRA_SMALL='xs',
    SMALL='s',
    MEDIUM='m',
    XMEDIUM='xm',
    LARGE='l',
    NAVBAR = 'n',
    USERNAME = 'u',
    XLARGE = 'xl',
}
interface TextProps{
    className?: string;
    title?:string;
    theme?:TextTheme;
    text?:string;
    align?: TextAlign;
    size?:TextSize;
}



export const MyText = memo(function Text (props:TextProps)  {
    const {
        className,
        text,
        title,
        size = TextSize.MEDIUM,
        align = TextAlign.LEFT,
        theme = TextTheme.PRIMARY,
    } = props;
    return (
        <div className={classNames(cls.Text, {},[className, cls[theme], cls[align], cls[size]])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    )
})