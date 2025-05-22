import cls from './AuthorizationFormCode.module.scss';
import {classNames} from "shared/lib/classNames/classNames.ts";
import {MyText, TextAlign, TextSize} from "shared/ui/MyText/MyText.tsx";
import {Input} from "shared/ui/Input/Input.tsx";
import {Button, ButtonTheme} from "shared/ui/Button/Button.tsx";
import {useCallback, useEffect, useRef, useState} from "react";
import {
    useFetchConfirmCodeMutation,

} from "features/Authorization/api/AuthorizationApi.tsx";
import {useNavigate} from "react-router-dom";
import {RoutePath} from "shared/config/route/routeConfig.tsx";

interface AuthorizationFormCodeProps {
    className?: string;
}


export const AuthorizationFormCode = ({className}: AuthorizationFormCodeProps) => {
    const [confirmCode, { isLoading, isError }] = useFetchConfirmCodeMutation();
    const [codeLocal, setCodeLocal] = useState(['', '', '', '']);
    const navigate = useNavigate();
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const value = e.target.value;

        if (/\d/.test(value) || value === '') {
            const newCode = [...codeLocal];
            newCode[index] = value;
            setCodeLocal(newCode);
            if (value && index < 3) {
                inputRefs.current[index + 1]?.focus();
            }
        }
    };

    const handleSubmit = useCallback(async () => {
        const code = codeLocal.join('');
        const method = 'Post';
        const email = JSON.parse(localStorage.getItem('email') ?? "");
        try {
            const response = await confirmCode({ email, code, method  }).unwrap();
            console.log(response);
            if(response.success){
                navigate(RoutePath.main);
            }

        } catch (error) {
            console.error('Ошибка входа', error);
        }
    },[codeLocal, confirmCode, navigate])



    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === 'Backspace' && !codeLocal[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    useEffect(() => {
        inputRefs.current[0]?.focus();
    }, []);

    return (
            <div className={classNames(cls.AuthorizationFormCode, {}, [className])}>
                <MyText text={'Введите код'}
                        size={TextSize.XMEDIUM}
                        align={TextAlign.CENTER}
                        className={cls.title}/>

                <div className={cls.code}>
                    {codeLocal.map((digit, index) => (
                        <Input
                            key={index}
                            ref={(el) => (inputRefs.current[index] = el)}
                            value={digit}
                            onChange={(value) =>
                                handleChange({target: {value}} as React.ChangeEvent<HTMLInputElement>, index)
                            }
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            type="text"
                            maxLength={1}
                            className={cls.codeInput}
                            autoFocus={index === 0}
                        />
                    ))}
                </div>

                <div className={cls.btnCont}>
                    <Button theme={ButtonTheme.PRIMARY} className={cls.btn} onClick={handleSubmit}>
                        <MyText text={'Отправить код'} size={TextSize.MEDIUM} align={TextAlign.CENTER}/>
                    </Button>
                </div>

            </div>

    )
}