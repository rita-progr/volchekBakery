import cls from './Input.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {ChangeEvent, ForwardedRef, InputHTMLAttributes, memo} from "react";
import {MyText, TextSize} from "shared/ui/MyText/MyText.tsx";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>;

interface InputProps extends HTMLInputProps {
    className?: string,
    value?: string,
    placeholder?: string,
    onChange?: (value: string) => void,
    error?: string,
    label?: string,
    classNameInput?: string,
    ref?: ForwardedRef<HTMLInputElement>
}

export const Input = memo(({
                               className,
                               onChange,
                               placeholder,
                               classNameInput,
                               type = 'text',
                               error,
                               label,
                               ref
                           }: InputProps) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    }

    return (
        <div className={classNames(cls.Input, {}, [className])}>
            {label && label?.length > 0 && (
                <label htmlFor="" className={cls.label}>{label}</label>
            )}
            <input ref={ref} type={type} onChange={onChangeHandler} className={classNameInput} placeholder={placeholder}/>
            {error && error.length > 0 ? (
                <MyText text={error} size={TextSize.EXTRA_SMALL} className={cls.error}/>
            ) : null}
        </div>
    )
})