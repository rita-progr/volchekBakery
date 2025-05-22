import cls from './AuthorizationBakery.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {MyText, TextAlign, TextSize} from "shared/ui/MyText/MyText.tsx";
import {Input} from "shared/ui/Input/Input.tsx";
import {Button, ButtonTheme} from "shared/ui/Button/Button.tsx";
import {useCallback, useState} from "react";
import {SelectBakery} from "entities/Bakery";
import {useLoginBakeryMutation} from "features/Authorization/api/AuthorizationApi.tsx";
import {RoutePath} from "shared/config/route/routeConfig.tsx";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {getAuthBakeryId} from "features/Authorization/model/selectors/authSelectors.ts";
import {BAKERY_ID} from "shared/const/const.ts";

interface AuthorizationBakeryProps {
    className?: string;
}

export const AuthorizationBakery = ({className}: AuthorizationBakeryProps) => {
    const [password, setPassword] = useState<string>("");
    const [fetchLoginBakery, {isLoading}] = useLoginBakeryMutation()
    const navigate = useNavigate();
    const bakeryId = useSelector(getAuthBakeryId);



    const onChangeHandler = useCallback((password: string)=>{
        setPassword(password)
    },[])

    const handleSubmit = useCallback(async () => {
        try {
            localStorage.setItem(BAKERY_ID, bakeryId);
            const response = await fetchLoginBakery({bakeryId, password}).unwrap();
            console.log(response);
            if(response){

                navigate(RoutePath.main);
            }

        } catch (error) {
            console.error('Ошибка входа', error);
        }
    },[bakeryId, fetchLoginBakery, navigate, password])

    return (
        <div className={classNames(cls.AuthorizationBakery, {}, [className])}>
                <MyText text={'Вход для пекарен'}
                            size={TextSize.XMEDIUM}
                            align={TextAlign.CENTER}
                            className={cls.title}/>

                    <div className={cls.flex}>
                        <Input label={'Введите пароль'} value={password} onChange={onChangeHandler} placeholder={'12345678'}/>
                        <SelectBakery/>
                    </div>

                    <div className={cls.btnCont}>
                        <Button theme={ButtonTheme.PRIMARY} className={cls.btn} onClick={handleSubmit}>
                            <MyText  text={'Войти'} size={TextSize.MEDIUM} align={TextAlign.CENTER}/>
                        </Button>
                    </div>
        </div>
    )
}