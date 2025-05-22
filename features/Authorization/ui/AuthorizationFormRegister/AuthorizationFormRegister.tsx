import cls from './AuthorizationFormRegister.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {MyText, TextAlign, TextSize} from "shared/ui/MyText/MyText.tsx";
import {Input} from "shared/ui/Input/Input.tsx";
import {Button, ButtonTheme} from "shared/ui/Button/Button.tsx";
import {Link, Route, useNavigate} from "react-router-dom";
import {RoutePath} from "shared/config/route/routeConfig.tsx";
import {DynemicModuleLoader, ReducersList} from "shared/lib/components/DynemicModuleLoader/DynemicModuleLoader.tsx";
import {AuthActions, AuthReducer} from "../../model/slices/AuthSlices.ts";
import {useRegisterUserMutation} from "../../api/AuthorizationApi.tsx";
import {LoadingPage} from "pages/LoadingPage";
import {useSelector} from "react-redux";
import {
    getAuthEmail,
    getAuthPassword,
    getAuthRepeatPassword,
    getValidateError
} from "../../model/selectors/authSelectors.ts";
import {useCallback} from "react";
import {validateAuthForm} from "features/Authorization/model/services/validateData/validateData.tsx";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch.tsx";

interface AuthorizationFormProps {
    className?: string;
}

const reducers: ReducersList = {
    auth: AuthReducer
}

export const AuthorizationFormRegister = ({className}: AuthorizationFormProps) => {
    const [registerUser, {isLoading, isError}] = useRegisterUserMutation();
    const email = useSelector(getAuthEmail);
    const password = useSelector(getAuthPassword);
    const navigate = useNavigate();
    const repeatPassword = useSelector(getAuthRepeatPassword)
    const dispatch = useAppDispatch();
    const validateError = useSelector(getValidateError);
    const handleEmailChange = useCallback((email: string) => {
        const errors = validateAuthForm({ email});
        dispatch(AuthActions.setErrors({ ...validateError, email: errors.email }));
        dispatch(AuthActions.setEmail(email))

    },[dispatch, validateError])

    const handlePasswordChange = useCallback((password: string) => {
        const { password: passwordError, repeatPassword: repeatPasswordError } = validateAuthForm({
            email,
            password,
            repeatPassword,
        });
        dispatch(AuthActions.setPassword(password));
        dispatch(AuthActions.setErrors({
            ...validateError,
            password: passwordError,
            repeatPassword: repeatPasswordError,
        }));
    }, [dispatch, email, repeatPassword, validateError]);

    const handleRepeatPasswordChange = useCallback((repeatPassword: string) => {
        const { repeatPassword: repeatPasswordError } = validateAuthForm({
            email,
            password,
            repeatPassword,
        });
        dispatch(AuthActions.setRepeatPassword(repeatPassword));
        dispatch(AuthActions.setErrors({
            ...validateError,
            repeatPassword: repeatPasswordError,
        }));
    }, [dispatch, email, password, validateError]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await registerUser({ email, password }).unwrap();
            localStorage.setItem('email', JSON.stringify(email));
            console.log(response);
            if(response.success){
                navigate(RoutePath.code)
            }
        } catch (error) {
            console.error('Ошибка регистрации', error);
        }
    };

    if(isLoading){
        return <LoadingPage/>
    }


    return (
        <DynemicModuleLoader reducers={reducers}>
        <div className={classNames(cls.AuthorizationForm, {}, [className])}>
            <MyText text = {'Регистрация'}
                    size={TextSize.XMEDIUM}
                    align={TextAlign.CENTER}
                    className={cls.title}/>
            <Input placeholder={'example@mail.ru'} label={'Введите почту'} value={email} onChange={handleEmailChange} error={ validateError ? validateError.email : ""}/>
            <Input placeholder={'1234567890'} label={'Введите пароль'} value={password} onChange={handlePasswordChange} error={ validateError ? validateError.password : ""}/>
            <Input placeholder={'1234567890'} label={'Повторите пароль'} value={repeatPassword} onChange={handleRepeatPasswordChange} error={ validateError ? validateError.repeatPassword : ""}/>
            <div className={cls.btnCont}>
                <Button theme={ButtonTheme.PRIMARY} className={cls.btn} onClick={handleSubmit}>
                    <MyText text={'Регистрация'} size={TextSize.MEDIUM} align={TextAlign.CENTER} />
                </Button>
                <div className={cls.text}>
                    <MyText text={'Уже есть аккаунт? '} size={TextSize.EXTRA_SMALL}/>
                    <div className={cls.links}>
                        <Link to = {RoutePath.login} >
                            <MyText text={'Войти'} size={TextSize.EXTRA_SMALL} className={cls.textLink}/>
                        </Link>
                        /
                        <Link to = {RoutePath.bakery_auth} >
                            <MyText text={'Войти как пекарня'} size={TextSize.EXTRA_SMALL} className={cls.textLink}/>
                        </Link>

                    </div>

                </div>
            </div>

        </div>
        </DynemicModuleLoader>
    )
}