import cls from './LoginPage.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {AuthorizationForm} from "features/Authorization";

interface LoginPageProps {
    className?: string;
}

const LoginPage = ({className}: LoginPageProps) => {
    return (
        <div className={cls.LoginPage}>
            <AuthorizationForm />
        </div>
    )
}

export default LoginPage;