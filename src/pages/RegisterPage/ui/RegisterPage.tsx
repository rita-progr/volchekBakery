import cls from './RegisterPage.module.scss';
import {classNames} from "shared/lib/classNames/classNames.ts";
import {AuthorizationFormRegister} from "../../../features/Authorization";

interface RegisterPageProps {
    className?: string;
}

 const RegisterPage = ({className}: RegisterPageProps) => {
    return (
        <div className={classNames(cls.RegisterPage, {}, [className])}>
            <AuthorizationFormRegister/>
        </div>
    )
}

export default RegisterPage;