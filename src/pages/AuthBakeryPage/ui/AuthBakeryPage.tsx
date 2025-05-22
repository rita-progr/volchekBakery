import cls from './AuthBakeryPage.module.scss';
import {classNames} from "shared/lib/classNames/classNames.ts";
import {AuthorizationBakery} from "../../../features/Authorization";

interface AuthBakeryPageProps {
    className?: string;
}

const AuthBakeryPage = ({className}: AuthBakeryPageProps) => {
    return (
        <div className={classNames(cls.AuthBakeryPage, {}, [className])}>
            <AuthorizationBakery/>
        </div>
    )
}

export default AuthBakeryPage